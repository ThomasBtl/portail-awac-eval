<script lang=ts>
    import type { ScaleBand } from "d3";
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
    /**The scale function to use to place the Ticks*/
    export let scale: ScaleBand<string>;
    /**The title of the axis*/
    export let name: string;
    /**The set of categories' name*/
    export let categories: string[] = [];

    let formatPadding = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };
    let step: number;

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
        step = (scale.step() * scale.padding()) + (scale.bandwidth() / 2) + formatPadding.left
    })
</script>

<g class="axis">
    {#if direction === 'horizontal'}
        <text 
            x="83%"
            y="88%"
            style="font-size: 0.7rem;"
            stroke="black"
        >{name}</text>
        <line 
            x1={formatPadding.left}
            x2={width - (formatPadding.right)}
            y1={height - (formatPadding.bottom)}
            y2={height - (formatPadding.bottom)}
            stroke="black"
        />
        {#each categories as category, i}
            {#if step}
                <Tick 
                    x={(scale.step() * i) + step}
                    y={height - formatPadding.bottom}
                    value={category}
                    direction={"vertical"}
                />
            {/if}
        {/each}
    {:else}
        <text 
            y="20px" 
            style="font-size: 0.7rem;"
            stroke="black"
        >{name}</text>
        <line 
            x1={formatPadding.left}
            x2={formatPadding.left}
            y1={formatPadding.top}
            y2={height - formatPadding.bottom}
            stroke="black"
        />
        {#each categories as category, i}
            {#if step}
                <Tick 
                    x={formatPadding.left}
                    y={(scale.step() * i) + step}
                    value={category}
                    direction={"horizontal"}
                />
            {/if}
        {/each}
    {/if}
</g>