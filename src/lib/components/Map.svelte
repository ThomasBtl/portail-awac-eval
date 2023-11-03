<!-- 
    @component

    This component build a map of Wallonia with highlighted localities.
    Will output a HTMLDivElement with class name = "map".
 -->
 <script lang=ts>
    import { geoMercator, geoPath, select } from "d3";
    import type {GeoPath, GeoPermissibleObjects} from "d3"
    import { viewport, walloniaGeojson } from "$lib/store";
    import type { Feature } from "$lib/types/geojson.type";

    /**The width of the map.*/
    export let width: number;
    /**The height of the map.*/
    export let height: number;
    /**Array of INS code specifying the localities to hightlight. Will change the fill color of the localities.*/
    export let hightlight: string[] = [];
    /**Either an array of colors corresponding to all the colors to attributes to the hightlight elements (must be of same size), or a single color specifying the color to use for all highlight localities.*/
    export let colors: string[] | string = "#0078F8";
    /**On locality click handler*/
    export let onClick: ((d: Feature<any>) => void) | undefined = undefined;
    /**Array of INS code for localities that need to be brings out. Will set stroke-width at 2 and stroke color to black*/
    export let bringsOut: string[] = [];

    const MARGIN = {
        top: 20,
        bottom: 5,
        left: 20,
        right: 20,
    }

    let localities: Feature<any>[] = [];
    let localitiesToBringOut: Feature<any>[] = [];
    let path: GeoPath<any, GeoPermissibleObjects>
    let map: SVGElement;
    let note: HTMLDivElement;
    let wrapper: HTMLDivElement;
    let noteValue: string;
    let svgGContainer: SVGGElement | undefined = undefined;


    // Fetch wallonia geojson
    walloniaGeojson.subscribe((geojson) => {
        if (geojson) {
            localities = geojson.features

            // Setting up the projection.
            const projection = geoMercator().fitSize([width + MARGIN.left + MARGIN.right, height + MARGIN.top + MARGIN.right], {...geojson})
            path = geoPath().projection(projection);
        }
    })

    /**
     * Function that hightlight some localities on the map.
     * @param {string[]} localitiesINS The ins codes of the localities to hightlight.
     */
    function hightlightLocalities(localitiesINS: string[]) {
        if (svgGContainer) {
            const container = select(svgGContainer);

            // Reset color
            resetHightlight()

            localitiesINS.forEach((ins, i) => {
                container.select(`path[data-ins^='${ins}']`)
                    .transition()
                    .duration(200)
                    .attr('fill', typeof colors === 'string' ? colors : colors[i])
            })
        }
    }

    /**
     * Reset all hightlight color on the map.
     */
    function resetHightlight() {
        if (svgGContainer) {
            select(svgGContainer)
                .selectAll('path')
                .transition()
                .duration(300)
                .attr('fill', 'transparent');
        }
    }

    $: {
        // Manage bring out localities
        if (bringsOut.length > 0) {
            localitiesToBringOut = localities.filter((locality) => bringsOut.includes(locality.properties.nsi))
        } else {
            localitiesToBringOut = [];
        }

        // Manage hightlited localities
        if (hightlight.length > 0) {
            hightlightLocalities(hightlight);
        } else {
            resetHightlight()
        }
    }

    /**
     * Function that hightligth a locality on the map with transition.
     * @param {SVGPathElement} element A path element corresponding to the hovered locality.
     * @param {number} [opacity=undefined] The new opacity of the element.
     * @param {string} [fill=undefined] The new color of the element.
     */
    function updateHightlight(element: SVGPathElement, opacity?: number, fill?: string) {
        // Parameters could be rework to accept an attrs object instead of multiple parameters.
        const d3Node = select(element).transition().duration(50);
        
        if (opacity) d3Node.attr('opacity', opacity.toString());
        if (fill) d3Node.attr('fill', fill);
    }

    /**
     * Function that update the annotation when hovering a locality
     * @param {SVGPathElement} locality The locality being hovered.
     * @param {string} value The text of the note to display.
     */
    function updateNote(locality: SVGPathElement, value: string) {
        if ($viewport !== "mobile") {
            const {
                top: elementTop,
                left: elementLeft
            } = locality.getBoundingClientRect(); // Path position.

            const {
                top : containerTop,
                left: containerLeft
            } = wrapper.getBoundingClientRect(); // Note's parent element position.

            // Compute note position.
            const offsetLeft = elementLeft - containerLeft + 75; // Add 75px to the left so the note is not directly on the locality.
            const offsetTop = elementTop - containerTop;

            // show note
            noteValue = value;
            note.style.left = offsetLeft + 'px';
            note.style.top = offsetTop + 'px';
            note.classList.remove('hidden');
        }
    }

    /**
     * On mouse enter handler function that brings out the hovered locality on the map.
     * @param {SVGPathElement} element A path element corresponding to the hovered locality.
     * @param {Feature} d A feature element containing data about the hovered locality.
     */
    function onMouseEnter(element: SVGPathElement, d: Feature<any>) {
        // Is the locality already highlighted?
        if (hightlight.includes(d.properties.nsi)) {
            updateHightlight(element, 0.3)
        } else {
            updateHightlight(element, undefined, typeof colors === "string" ? colors : colors[0]);
        }

        updateNote(element, d.properties.name);
    }

    /**
     * On mouse leave handler function that bring back the hovered locality to normal.
    * @param {SVGPathElement} element A path element corresponding to the hovered locality.
     * @param {Feature} d A feature element containing data about the hovered locality.
     */
    function onMouseOut(element: SVGPathElement, d: Feature<any>) {
        // Is the locality highlighted?
        if (hightlight.includes(d.properties.nsi)) {
            updateHightlight(element, 1)
        } else {
            updateHightlight(element, undefined, "transparent")
        }
        note.classList.add('hidden')
    }
</script>

<div
    class="map"
    bind:this={wrapper}
>
    {#if $viewport !== "mobile"}
        <div
            class="note hidden"
            bind:this={note}
        >
            <h4>{noteValue}</h4>
        </div>
    {/if}
    <svg 
        width={width + MARGIN.left + MARGIN.right} 
        height={height + MARGIN.top + MARGIN.bottom}
        bind:this={map}
    >
        <g class="feature" bind:this={svgGContainer}>
            {#each localities as locality}
                {#if locality.properties.nsi === "3000"}
                    <path
                        fill="transparent"
                        data-ins={locality.properties.nsi}
                        class="locality"
                        d={path(locality.geometry)}
                        stroke="#000"
                        stroke-width=2.5
                        pointer-events=none
                    />
                {:else}
                    <!-- Let's ignore svelte warning about a11y issues with path not being accessible without a mouse. Because this functionality is not mandatory it will not cause any problem for the user. -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <path
                        fill="transparent"
                        data-ins={locality.properties.nsi}
                        class="locality"
                        d={path(locality.geometry)}
                        stroke="rgb(168, 168, 168)"
                        stroke-width=1
                        on:mouseenter={(e) => onMouseEnter(e.currentTarget, locality)}
                        on:mouseleave={(e) => onMouseOut(e.currentTarget, locality)}
                        on:click={() => onClick && onClick(locality)}
                    />
                {/if}
            {/each}
            {#each localitiesToBringOut as locality}
                <path
                    fill="transparent"
                    d={path(locality.geometry)}
                    stroke="black"
                    stroke-width=4
                    pointer-events=none
                />
            {/each}
        </g>
    </svg>
</div>

<style>
    .map {
        position: relative;
    }

    .locality {
        cursor: pointer;
    }

    .note {
        position: absolute;
        display: block;
        background-color: #fff;
        border: 2px solid black;
        padding: 10px;
        border-radius: 5px;
    }

    .hidden {
        display: none;
    }
</style>