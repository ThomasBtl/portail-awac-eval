<script lang="ts">
    import { updateContent } from '$lib/utils';
    import { content } from '$lib/assests/content/flood';
    import { Filler } from '$lib/components';
    import FloodMap  from './FloodMap.svelte';
    import houseD from '$lib/assests/misc/house.path';
    import retailD from '$lib/assests/misc/retail.path';
    import factoryD from '$lib/assests/misc/factory.path';
    import type { Municipality } from '$lib/types/municipality.type';
    import { selectedMunicipality } from '$lib/store';
    import { afterUpdate, onMount } from 'svelte';
    import { graph } from '$lib/assests/colors/colors';

    /** Main wrapper of the section */
    let container: HTMLDivElement;
    /** Sections name for this page*/
    let sections = Object.keys(content);
    /** Menu section*/
    let adaptationMenues = content.mesure as {
        intro: string;
        menu: string[];
        texts: string[];
    }
    /** Selected municipality*/
    let municipality: Municipality;
    /** Percentage of residential, retail and factory buildings at risk*/
    let pctFillerValues = [0, 0, 0];
    /** Svg path for the residential, retail and factory icon*/
    let d: string[][] = [
        houseD,
        retailD,
        factoryD
    ];
    /** Color to used to fill the icon for residential, retail and industry*/
    let fillerColors = [graph.residential, graph.retail, graph.industry]
    /** Index of the selected menu in the adaptation mesure section*/
    let activeMenu: number = 0;

    let rerenderFiller: boolean = true;

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;
            pctFillerValues[0] = municipality.flood.pctResidencesAtRisk;
            pctFillerValues[1] = municipality.flood.pctRetailOfficesServicesAtRisk;
            pctFillerValues[2] = municipality.flood.pctIndustryCraftsAtRisk;
            updateContent(container, municipality.name, municipality.flood);
            rerender()
        }
    })

    function rerender() {
        rerenderFiller = false;
        setTimeout(() => {
            rerenderFiller = true;
        }, 0)
    }

    onMount(() => {
        updateContent(container, municipality.name, municipality.flood);
    })

    afterUpdate(() => {
        updateContent(container, municipality.name, municipality.flood);
    })

</script>

<div bind:this={container}>
    {#each sections as sectionName, i}
        <div class:background-secondary={i%2 === 1}>
            {#if sectionName === "mesure"}
                <section>
                    <div class="content">
                        <div class="card">
                            {@html adaptationMenues.intro}
                            <div class="menu-wrapper">
                                {#each adaptationMenues.menu as title, i}
                                    <button 
                                        style={`width: ${100 / adaptationMenues.menu.length}%;border-radius:${(i === 0 ? 5 : 0)}px ${(i === adaptationMenues.menu.length - 1? 5 : 0)}px 0 0;`} 
                                        class="menu-button"
                                        class:active="{i === activeMenu}"
                                        on:click={() => activeMenu = i}
                                    >{@html title}</button>
                                {/each}
                            </div>
                            <p>{@html adaptationMenues.texts[activeMenu]}</p>
                        </div>
                    </div>
                </section>
            {:else if sectionName === "floodMap"}
                <FloodMap />
            {:else if sectionName === "filler"}
                {#each Object.values(content[sectionName]) as cardContent, i}
                    <section>
                        <div class="content">
                            <div class="card">
                                <div class="filler-wrapper">
                                    <div class="filler-left">
                                        {@html cardContent}
                                    </div>
                                    <div class="filler-right">
                                        {#if rerenderFiller}
                                            <Filler 
                                                width={150}
                                                height={150}
                                                fillPct={pctFillerValues[i] / 100}
                                                paths={d[i]}
                                                color={fillerColors[i]}
                                                style={"display: block; margin: 0 auto;"}
                                            />
                                        {/if}
                                        <p>{(pctFillerValues[i]).toFixed(2)}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/each}
            {:else if sectionName === "people"}
                <section>
                    <div class="content">
                        {#each Object.values(content[sectionName]) as cardContent}
                            <div class="card">
                                {@html cardContent}
                                <div class="sub-card-wrapper">
                                    {#each [{name: "maison de repos", value:municipality.flood.nbNursingHomeAtRisk}, {name: "Hopitaux", value: municipality.flood.nbHospitalAtRisk}, {name: "crèches et gardien·ne·s", value: municipality.flood.nbNurseryAtRisk}] as { name, value }}
                                        {#if value}
                                            <div class="sub-card">
                                                <h2>{value}</h2>
                                                <p>{name}</p>
                                            </div>
                                        {/if}
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>
            {:else}
                {#each Object.values(content[sectionName]) as cardContent}
                    <section>
                        <div class="content">
                            <div class="card">
                                {@html cardContent}
                            </div>
                        </div>
                    </section>
                {/each}
            {/if}
        </div>
    {/each}
</div>

<style>
    .filler-wrapper {
        display: flex;
        column-gap: 150px;
        flex-wrap: wrap;
        align-items: center;
    }

    .filler-left {
        width: 50%;
    }

    .filler-right {
        width: 30%;
        margin: 0 auto;
    }

    .filler-right p {
        text-align: center;
        margin: 0;
    }
</style>