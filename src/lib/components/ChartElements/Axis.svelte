<!-- 
    @component

    This component create a SVGGEelement that correspond to an axis of a chart. The axis can be set either at the bottom of the graph or on the left.
    This component will only create linear axis.
 -->
 <script lang=ts>
    import type { ScaleContinuousNumeric } from "d3";
    import { afterUpdate } from "svelte";
    import Tick from "./Tick.svelte";

    /**The paddings to apply to the chart. Can either be a number, in that case all padding direction will be the same. Or an object specifiying a padding for every direction.*/
    export let paddings: number | {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    /**The width of the chart*/
    export let width: number;
    /**The height of the chart*/
    export let height: number;
    /**The axis direction can either be "horizontal, to have the axis at the bottom, or "vertical" to have the axis on the left"*/
    export let direction: string;
    /**The number of tick to present on the axis*/
    export let nTicks: number;
    /**The scale function to use to place the Ticks*/
    export let scale: ScaleContinuousNumeric<number,number,never>;
    /**The title of the axis*/
    export let name: string;
    /**Function to use to format the axis ticks' value. As this axis only accept numerical value, this function should take a number as argument*/
    export let formatFunction: (n: number) => string = (n: number) => n.toString();

    let formatPadding = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };
    let grid: number[] = [];

    afterUpdate(() => {
        if (typeof paddings === 'number') {
            formatPadding =  {
                top: paddings,
                bottom: paddings,
                left: paddings,
                right: paddings
            }
        } else {
            formatPadding = paddings
        }
        grid = scale.ticks(nTicks)
    })
</script>

<g class="axis">
    {#if direction === 'horizontal'}
        <text 
            y={height - formatPadding.bottom - 7}
            x={width - formatPadding.right} 
            text-anchor="end"
            stroke='black'
            font-size=0.7rem
        >{name}</text>
        <line 
            x1={formatPadding.left}
            x2={width - (formatPadding.right)}
            y1={height - (formatPadding.bottom)}
            y2={height - (formatPadding.bottom)}
            stroke="black"
        />
        {#each grid as gridLine}
            <Tick 
                x={scale(gridLine)}
                y={height - formatPadding.bottom}
                value={formatFunction(gridLine)}
                direction={"vertical"}
            />
        {/each}
    {:else}
        <text
            x="50px"
            y="40px"
            font-size=0.7rem
            text-anchor="start"
            stroke='black'
        >{name}</text>
        <line 
            x1={formatPadding.left}
            x2={formatPadding.left}
            y1={formatPadding.top}
            y2={height - formatPadding.bottom}
            stroke="black"
        />
        {#each grid.slice(1) as gridLine}
            <Tick 
                x={formatPadding.left}
                y={scale(gridLine)}
                value={formatFunction(gridLine)}
                direction={"horizontal"}
            />
        {/each}
    {/if}
</g>