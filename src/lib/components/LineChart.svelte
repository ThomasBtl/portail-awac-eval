<script lang=ts>
    import {scaleLinear, extent} from 'd3';
    import Axis from './ChartElements/Axis.svelte';
    import type { Element } from "$lib/types/chart.type";
    import type { ScaleLinear } from 'd3';

    export let width: number = 900;
    export let height: number = 400;
    export let data: Element[][] = []; // We can draw multiple dataset on the graph
    export let colors: string[];
    export let yAxisTitle: string;
    export let xAxisTitle: string;
    export let title: string;

    const paddings = {
        top: 50,
        bottom: 50,
        left: 70,
        right: 50
    };

    const DEFAULT_WIDTH = 600;

    let xScale: ScaleLinear<number, number, never> | undefined;
    let yScale: ScaleLinear<number, number, never> | undefined;
    let yGrid: number[] | undefined;
    let xGrid: number[] | undefined;

    let xMin: number | undefined; 
    let xMax: number | undefined;
    let yMin: number | undefined;
    let yMax: number | undefined;

    let hoveredYears: number[]= [];

    $: {
        // Get the minimun and maximum year value in the data array. Used to define the domain of the chart.
        [xMin, xMax] = extent(data.reduce((acc: Element[], currentValue) => acc.concat(currentValue), []), (d) => Number(d.key));
        [yMin, yMax] = extent(data.reduce((acc: Element[], currentValue) => acc.concat(currentValue), []), (d) => d.value);

        if (xMin !== undefined && xMax !== undefined && yMin !== undefined && yMax !== undefined) {
            xScale = scaleLinear()
                .range([paddings.left, width - paddings.right])
                .domain([xMin, xMax]);

            yScale = scaleLinear()
                .range([height - paddings.bottom, paddings.top])
                .domain([yMin < 0 ? yMin*1.2 : 0, yMax*1.2]);


            xGrid = xScale.ticks(10);
            yGrid = yScale.ticks(10);

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
    {#if xScale && yScale && xGrid && yGrid}
        <g class="container">
            <Axis 
                paddings={paddings}
                {width}
                {height}
                direction={"horizontal"}
                nTicks={10}
                scale={xScale}
                name={xAxisTitle}
            />
            <Axis 
                paddings={paddings}
                {width}
                {height}
                direction={"vertical"}
                nTicks={10}
                scale={yScale}
                name={yAxisTitle}
            />
            <g class="background">
                <!-- 20? I don't remember why I did it that way but it is clearly not the right way -->
                {#each Array(20) as _, i}
                    <rect
                        x={xScale(2002 + i)}
                        y={paddings.top}
                        width={width/22}
                        height={height - paddings.bottom*2}
                        fill="transparent"
                        on:mouseenter={(e) => {
                            e.currentTarget.style.fill = "#eee";
                            hoveredYears = [2002 + i, 2002 + i + 1]
                        }}
                        on:mouseleave={(e) => {
                            e.currentTarget.style.fill = "transparent";
                            hoveredYears = []
                        }}
                    ></rect>
                    <line
                        x1={xScale((Number(xMin) || 0) + i + 1)}
                        x2={xScale((Number(xMin) + 1 || 1) + i + 1)}
                        stroke="transparent"
                    />
                    <line 
                        x1={xScale((Number(xMin) || 0) + i + 1)}
                        x2={xScale((Number(xMin) || 0) + i + 1)}
                        y1={yScale((yMin && yMin < 0) ? (yMin * 1.2)  || 0 : 0)}
                        y2=10%
                        stroke="lightgrey"
                        stroke-width=1
                        stroke-dasharray=2
                    />
                {/each}
            </g>
            <g class="chart">
                {#each data as chartData, i}
                    <g class={`chart-${i}`}>
                        {#each chartData as element, k}
                            <circle
                                cx={xScale(Number(element.key))}
                                cy={yScale(element.value)}
                                r={3.5}
                                fill={colors[i] || "black"}
                            />
                            {#if k !== chartData.length - 1}
                                <line 
                                    x1={xScale(Number(element.key))}
                                    x2={xScale(Number(chartData[k + 1].key))}
                                    y1={yScale(element.value)}
                                    y2={yScale(chartData[k + 1].value)}
                                    stroke-width=2.5
                                    stroke={colors[i] || "black"}
                                />
                            {/if}
                        {/each}
                    </g>
                {/each}
            </g>
        </g>
    {/if}
</svg>

<style>
</style>