<!-- 
    @component

    This component will display a certain svg icon given the name passed as props.
    check out iconData file to see which icon can be used.
 -->
<script lang="ts">
    import { icons, defaultIcon } from "./iconData";

    /**
     * The name of the icon to display.
     */
    export let name: string;
    export let width: number = 16;
    export let height: number = 16;
    /**
     * Should the icon be colored?
     */
    export let colored: boolean = false;

    /**
     * The icon corresponding the the name props.
     */
    let currentIcon:{
        name: string;
        fill: string[];
        d: string[];
        g?: string[];
        viewBox?: string;
    } = defaultIcon

    for (const icon of Object.values(icons)) {
        if ( icon.name === name ) {
            currentIcon = icon;
            break;
        }
    }
</script>

<svg
    {width}
    {height}
    viewBox={currentIcon?.viewBox || "0 0 16 16"}
    class={$$props.class}
    style={$$props.style}
>
    {#if currentIcon.g}
        {#each currentIcon.g as g}
            <g transform={g}>
                {#each currentIcon.d as d, i}
                    <path
                        fill={colored ? currentIcon.fill[i] : "#000"}
                        {d}
                    />
                {/each} 
            </g>
        {/each}
    {:else}
        {#each currentIcon.d as d, i}
            <path
                fill={colored ? currentIcon.fill[i] : "#000"}
                {d}
            />
        {/each}
    {/if}
</svg>
