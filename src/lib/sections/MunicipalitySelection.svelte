<!-- 
    @component

    This component represents the section for the selection of a municipality by the user.
 -->
<script lang=ts>
    import { viewport, selectedMunicipality, municipalities, alertMessage, walloniaGeojson } from "$lib/store";
    import { Map, Autocomplete } from "$lib/components";
    import { content } from "$lib/assests/content/MunicipalitySelection";
    import { fly } from "svelte/transition";
    import { graph } from "$lib/assests/colors/colors";

    import type { Feature } from "$lib/types/geojson.type";

    /**
     * Map size by viewport type.
     */
    const MAP_SIZE = {
        desktop : {
            width: 900,
            height: 600,
        },
        tablet : {
            width: 600,
            height: 400,
        },
        mobile : {
            width: 300,
            height: 300,
        },
    }

    /**
     * Geojson feature of every municiaplities of wallonia. 
     */
     const municipalitiesFeature: Feature<any>[] = $walloniaGeojson.features;
    /**
     * Geojson feature filtered by what the user has encoded in the input box
     */ 
    let filteredElements: Feature<any>[] = [];
    /**
     * Data concerning the selected municiaplities
     */
    let municipality: {
        name: string | null;
        ins?: string;
    } = {
        name: null,
        ins: undefined,
    };

    /**
     * Function that updates the alertMessage store to display a confirmation of the selected municipality
     */
    function updateAlert(municipalityName: string) {
        alertMessage.update(() => `Découvrez les vulnérabilités au travers de <span class="emphase">${municipalityName}<span>`);
    }

    /**
     * Handler called on click on one of the municipality of the map. 
     * @param d {Feature<any>} The geosjon feature corresponding to the clicked municipality
     * @modifies {municipality}
     * @modifies {filteredElements}
     */
    function onClickHandler(d: Feature<any>){
        // Set the selected municipality
        municipality.name = d.properties.name;
        municipality.ins = d.properties.nsi;

        // Keep only the selected municipality in the filtered list
        filteredElements = [d];

        // Update store
        selectedMunicipality.set($municipalities.find((municipality) => municipality.ins === d.properties.nsi) || null);
        console.log($municipalities)

        updateAlert(municipality.name);
    }

    /**
     * Handler called on click on the remove icon.
     * @modifies {municipality}
     * @modifies {filteredElements}
    */
    function removeMunicipality() {
        if (municipality.name) {
            // Remove the selected municipality
            municipality.name = "";
            municipality.ins = undefined;

            // Reset the filtered elements list
            filteredElements = [];

            // Set the selected municipality store back to wallonia.
            selectedMunicipality.set($municipalities.find((municipality) => municipality.ins === "3000") || null)

            updateAlert("Wallonie");
        }
    }
</script>

<section>
    <div class="left-side">
        <div class="card">
            {@html content.living}
        </div>
    </div>
    <div class="right-side">
        <div class="municipality-selection-content">
            <Autocomplete
                elements={municipalitiesFeature}
                bind:value={municipality.name}
                bind:filteredElements
                selectHandler={onClickHandler}
            />
            
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="tooltip"
                style={`
                    cursor: ${municipality.name ? "pointer" : "auto"};
                    pointer-events: ${municipality.name ? "auto" : "none"};
                `}
                on:click={removeMunicipality}
            >
                <span>Revenir à la wallonie</span>
                <div style="width: 35px;">
                    {#if municipality.name}
                        <svg
                            width="16"
                            height="16"
                            class="check-icon"
                            viewBox="0 0 16 16"
                            on:click={removeMunicipality}
                            transition:fly="{{duration: 500, y: 10}}"
                        >
                                <circle 
                                    cx=8
                                    cy=8
                                    r=8
                                />
                                <line
                                    x1=8
                                    x2=8
                                    y1=11
                                    y2=5
                                    stroke="#fff"
                                    stroke-width=1.5
                                    stroke-linecap="round"
                                    class="left-line"
                                />
                                <line
                                    x1=8
                                    x2=8
                                    y1=11
                                    y2=5
                                    stroke="#fff"
                                    stroke-width=1.5
                                    stroke-linecap="round"
                                    class="right-line"
                                />                
                        </svg>
                    {/if}
                </div>
            </div>
        </div>
        <Map 
            width={MAP_SIZE[$viewport].width}
            height={MAP_SIZE[$viewport].height}
            hightlight={filteredElements.map((municipality) => municipality.properties.nsi)}
            onClick={onClickHandler}
            colors={graph.mapHover}
        />
    </div>
</section>

<style>
    .left-side {
        width: 30%;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip:hover {
        cursor: pointer;
    }

    .tooltip:hover span {
        visibility: visible;
        opacity: 1;
    }

    .tooltip span {
        pointer-events: none;
        visibility: hidden;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 5px;
        position: absolute;
        z-index: 1;
        bottom: 0;
        width: 120px;
        left: 130%;
        opacity: 0;
        transition: opacity 0.3;
    }

    @media (max-width: 1300px) {
        .left-side {
            width: 95%;
        }
    }


    @media (max-width: 1024px) {
        .left-side {
            width: 100%;
        }

        .tooltip span {
            display: none;
        }
    }

    .tooltip span::after {
        content: "";
        position: absolute;
        top: 40%;
        right: 100%;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #555 transparent transparent;
    }

    .check-icon {
        width: 35px;
        height: 35px;
    } 

    .check-icon circle {
        fill: var(--success);
        transition: all 0.12s ease;
    }

    .check-icon .left-line {
        transform: scale(1, 0.6) rotate(-25deg) translate(-8.3px, 7.9px);
        transition: all 0.12s ease;
    }

    .check-icon .right-line {
        transform: rotate(30deg) translate(3.8px, -6.4px);
        transition: all 0.12s ease;
    }

    .check-icon:hover circle{
        fill: var(--delete);
        transition: all 0.12s ease;
    }

    .check-icon:hover .left-line {
        transform: rotate(-45deg) translate(-8.1px, 3.5px);
        transition: all 0.12s ease;
    }

    .check-icon:hover .right-line {
        transform: rotate(45deg) translate(3.5px, -8.1px);
        transition: all 0.12s ease;
    }

    .municipality-selection-content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 15px;
    }
</style>