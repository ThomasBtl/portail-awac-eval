<script lang="ts">
    import type { HeatHistory } from "$lib/types/heatHistory.type";
    import type { Point } from "$lib/types/chart.type";
    import type { Tweened } from "svelte/motion";
    import { extent, scaleLinear, type ScaleLinear } from "d3";
    import Axis from "./ChartElements/Axis.svelte";
    import Bubble from "./ChartElements/Bubble.svelte";
    import { tweened } from "svelte/motion";
    import { quartInOut } from "svelte/easing";

    export let width: number;
    export let height: number;
    export let title: string;
    export let xAxisTitle: string;
    export let yAxisTitle: string;
    export let showYAxis: boolean = true;
    export let showValue: boolean = false;
    /**Padding to add to the graph*/
    export let paddings: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    } = { top: 50, bottom: 50, left: 70, right: 50 };
   export let data: Point[];
   export let threshold: number[] = [];
   export let nTicks: number = 10
   export let color: string;

    let xScale: ScaleLinear<number, number, never> | undefined;
    let yScale: ScaleLinear<number, number, never> | undefined;

    let tweenedPoint: Tweened<Point[]>;

    const DEFAULT_WIDTH = 600;

    $: {
        if (data.length > 0) {
            if (tweenedPoint) {
                tweenedPoint.set(data)
            } else {
                tweenedPoint = tweened(data, {
                    delay: 0,
                    duration: 1500,
                    easing: quartInOut
                })
            }
        }
    }

    $: {
        if (tweenedPoint) {
            const [xMin, xMax] = extent($tweenedPoint, (d) => d.xValue)
            if (xMin !== undefined && xMax !== undefined) {
                xScale = scaleLinear()
                    .range([paddings.left, width - paddings.right])
                    .domain([xMin - 10, xMax + 5])
            }
        }
    }

    $: {
        if (tweenedPoint) {
            const [yMin, yMax] = extent($tweenedPoint, (d) => d.yValue)
            if (yMin !== undefined && yMax !== undefined) {
                yScale = scaleLinear()
                    .range([height - paddings.bottom, paddings.top])
                    .domain([- 1.5, yMax + 15])
            }
        }
    }

</script>

<svg {width} {height}>
    <text
        y={paddings.top/2}
        x={(width - paddings.left - paddings.right)/2 + 50}
        stroke="#000"
        stroke-width=0.7
        text-anchor="middle"
        font-size={`${width/DEFAULT_WIDTH}em`}
    >{title}</text>
    <g class="background">
        {#if xScale && yScale}
            {#each threshold as value}
                <line
                    x1={xScale(value)}
                    x2={xScale(value)}
                    y1=90%
                    y2=10%
                    stroke="black"
                    stroke-width=1
                    stroke-dasharray=2
                />
            {/each}
        {/if}
    </g>
    <g class="container">
        {#if xScale && yScale}
            <Axis 
                paddings={paddings}
                {width}
                {height}
                direction={"horizontal"}
                nTicks={nTicks}
                scale={xScale}
                name={xAxisTitle}
            />
            {#if showYAxis}
                <Axis 
                    paddings={paddings}
                    {width}
                    {height}
                    direction={"vertical"}
                    nTicks={nTicks}
                    scale={yScale}
                    name={yAxisTitle}
                />
            {/if}
            <g class="chart">
                {#each $tweenedPoint as d}
                    <Bubble 
                        cx={xScale(d.xValue)}
                        cy={yScale(d.yValue)}
                        r={d.r}
                        fill={color}
                        value={showValue ? d.displayedValue.toFixed(1) : ""}
                    />
                {/each}
            </g>
        {/if}
    </g>
</svg>
