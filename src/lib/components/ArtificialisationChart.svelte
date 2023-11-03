<!-- 
    @component

    This component display a svg corresponding to an artificialisation chart.

    Warning: This component is not reusable outside of the scope of this project.
 -->
<script lang="ts">
    //@ts-nocheck
    import { scaleBand, extent, scaleLinear } from "d3";
    import { afterUpdate } from "svelte";
    import Axis from "./ChartElements/Axis.svelte";
    import CategoricalAxis from "./ChartElements/CategoricalAxis.svelte";
    import { quadIn } from "svelte/easing";
    import { fade } from "svelte/transition";
    import { tweened } from "svelte/motion";
    import { graph } from "$lib/assests/colors/colors";

    import type { ScaleBand, ScaleLinear } from "d3";
    import type { Element } from "$lib/types/chart.type";

    /**Width of the graph*/
    export let width: number;
    /**Height of the graph*/
    export let height: number;
    /**Padding to add to the graph*/
    export let paddings: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    } = { top: 50, bottom: 50, left: 70, right: 50 };
    /**The base data for the artificialisation chart [MUST be two elements]*/
    export let baseElements: Element[];
    /**
     * The proportion of range that should be dedicated to the padding between the bars. Should be between 0 and 1.
     * Check https://github.com/d3/d3-scale/blob/v4.0.2/README.md#band_padding for more info.
    */
    export let barPadding: number = 0.4;
    export let residentialShare: number = 0;
    export let increasePct: number;
    export let increase: number;
    export let title: string;

    interface AnimationParam {
        delay: number;
        easing?: (t:number) => number;
        duration?: number;
        options? : {
            value?: number;
            excess?: boolean;
            base?: boolean;
            height?: number;
            out?: boolean;
            i?: number;
        };
    }

    let pct = tweened(0, {
                duration: 400,
                easing: quadIn
            });

    let bandScale: ScaleBand<string> | undefined;
    let linearScale: ScaleLinear<number, number, never> | undefined;
    let yMin: number | undefined;
    let yMax: number | undefined;

    const DEFAULT_WIDTH = 600;

    $: {
        $pct = (residentialShare*100) || increasePct;
    }

    afterUpdate(() => {
        [yMin, yMax] = extent(baseElements.reduce((acc: Element[], currentValue) => acc.concat(currentValue), []), (d) => d.value);

        if (yMin && yMax) {
            // Only compute the scales if both scale can be define
            bandScale = scaleBand()
                .range([paddings.left, width - paddings.right])
                .padding(barPadding)
                .domain(baseElements.map((d) => d.key.toString()));

            linearScale = scaleLinear()
                .range([height - paddings.bottom, paddings.top])
                .domain([0, yMax]) // yMin should never be < 0
        }
    })

    function slideInLine(node: SVGLineElement, params: AnimationParam) {
        return {
            delay: params.delay || 0,
            duration: params.duration || 1000,
            easing: params.easing || quadIn,
            css: (t: number) => {
                return `
                    transform : scale(${t});
                    -moz-transform : scale(${t});
                `
            }
        }
    }

    
    function slideResidential(node: SVGRectElement, params: AnimationParam) {
        const options = params.options;

        if (!options || !options.height) {
            throw new Error('This animation requiere a set height');
        }

        return {
            delay: params.delay,
            duration: params.duration,
            css: (t: number, u: number) => {
                return `
                    height: ${options!.height! * t}px;
                    transform: translate(0, ${options!.height! * u}px);
                `
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
    >{@html title}</text>
    {#if bandScale && linearScale}
        <Axis 
            paddings={paddings}
            {width}
            {height}
            direction={"vertical"}
            nTicks={10}
            scale={linearScale}
            name={"hectares"}
            formatFunction={(n) => n.toString() + ' ha'}
        />
        <CategoricalAxis
            paddings={paddings}
            {width}
            {height}
            direction={"horizontal"}
            scale={bandScale}
            name={"années"}
            categories={baseElements.map((d) => d.key.toString())}
        />
        <g class="chart">
            {#each baseElements as {key, value}, i}
                <rect 
                    x={bandScale(key.toString())}
                    y={linearScale(value)}
                    width={bandScale.bandwidth()} 
                    height={height - paddings.bottom - linearScale(value)}
                    fill={graph.artificialisation} 
                    opacity={i > 0 ? 0.5 : 1}
                />
            {/each}
            <rect 
                x={bandScale(baseElements[1].key.toString())}
                y={linearScale(baseElements[0].value)}
                width={bandScale.bandwidth()} 
                height={height - paddings.bottom - linearScale(baseElements[0].value)}
                fill={graph.artificialisation} 
            />
            {#if residentialShare !== 0}
                <g>
                    <rect
                        x={bandScale(baseElements[1].key.toString())}
                        y={height - linearScale(increase * (1 - residentialShare))}
                        width={bandScale.bandwidth()}
                        height={-height + linearScale(increase - (increase * residentialShare)) + linearScale(baseElements[0].value)}
                        fill={graph.residential}
                        in:slideResidential={{delay: 0, duration: 400, options:{height: -height + linearScale(increase - (increase * residentialShare)) + linearScale(baseElements[0].value)}}}
                    ></rect>
                </g>
            {/if}
            <!-- Append text indicating the increase pourcentage of artificialisation between 2002 and 2020 -->
            <!-- I don't understand the warning for xScale(year) Object is possibly 'undefined' -->
            <text 
                x={bandScale.bandwidth()/2 + bandScale(baseElements[1].key.toString())}
                y={height - linearScale(increase/2)}
                text-anchor="middle"
                font-size="0.7em"
                stroke="#000"
            >{$pct.toFixed(2)}%</text>
        </g>
        <g transform={`translate(${paddings.left}, ${linearScale(baseElements[0].value)})`}>
            <line
                x1={0}
                x2={width - paddings.left - paddings.right - (bandScale.step() * bandScale.paddingOuter())}
                stroke-dasharray="3"
                stroke="#A8A8A8"
                in:slideInLine={{delay: 400, duration: 1500}} 
            ></line>
            <text
                x={width - paddings.left - paddings.right - (bandScale.step() * bandScale.paddingOuter()) + 20}
                y="0.35em"
                font-size="0.7em"
                in:fade={{delay: 2000, duration: 400}}
                fill="#454545"
            >{baseElements[0].value.toFixed(2) + ' ha'}</text>
        </g>
        <g transform={`translate(${paddings.left}, ${linearScale(baseElements[1].value)})`}>
            <line
                x1={0}
                x2={width - paddings.left - paddings.right - (bandScale.step() * bandScale.paddingOuter())}
                stroke-dasharray="3"
                stroke="#A8A8A8"
                in:slideInLine={{delay: 400, duration: 1500}} 
            ></line>
            <text
                x={width - paddings.left - paddings.right - (bandScale.step() * bandScale.paddingOuter()) + 20}
                y="0.35em"
                font-size="0.7em"
                in:fade={{delay: 2000, duration: 400}}
                fill="#454545"
            >{baseElements[1].value.toFixed(2) + ' ha'}</text>
        </g>
    {/if}
</svg>
