<script lang="ts">
    import { content } from '$lib/assests/content/artificialisation'
    import { selectedMunicipality, viewport, municipalities } from '$lib/store';
    import { updateContent } from '$lib/utils';
    import { onMount } from 'svelte';
    import { ArtificialisationChart, BeeswarmChart, LineChart } from '$lib/components';
    // @ts-ignore
    import Scroller from '@sveltejs/svelte-scroller';
    import { graph } from '$lib/assests/colors/colors';

    import type { Municipality } from '$lib/types/municipality.type';
    import type { BeeswarmElement, Element } from '$lib/types/chart.type';

    /** Main wrapper of the section */
    let container: HTMLDivElement;
    /** Sections name for this page*/
    let sections = Object.keys(content);
    /** Selected municipality*/
    let municipality: Municipality;

    /** Scroller index for artificialisation*/
    let artificialisationIndex: number;
    let artificialisationChartTitles: string[] = [
        `Part du résidentiel dans l'artificialisation`,
        `Artificialisation du territoire entre 2002 et 2020`,
    ]

    /** Scroller index for comparison*/
    let comparisonIndex: number;
    let allLocalitiesIncrease: BeeswarmElement[] = [];
    let highlights: number[][] = []

    /** Scroller index for population*/
    let populationIndex: number;
    let lineData: Element[][][] = [[]];
    const axisTitles: string[] = ["Population", "Nombre de personnes par ménage", "Nombre d'habitations nécessaires"]; 
    const titles: string[] = ["Évolution de la population entre 2002 et 2020", "Évolution du nombre de peronnes par ménage entre 2002 et 2020", "Évolution du nombre d'habitations nécessaires entre 2002 et 2020"];

    const ARTIFICIALISATION_CHART_SIZE = {
        "mobile": {
            width: 330,
            height: 400,
        },
        "tablet": {
            width: 600,
            height: 600,
        },
        "desktop": {
            width: 600,
            height: 500,
        },
    }

    const COMPARISON_CHART_SIZE = {
        "mobile": {
            width: 350,
            height: 200,
        },
        "tablet": {
            width: 650,
            height: 450,
        },
        "desktop": {
            width: 740,
            height: 500,
        },
    }

    const POPULATION_CHART_SIZE = {
        "mobile": {
            width: 350,
            height: 300,
        },
        "tablet": {
            width: 700,
            height: 500,
        },
        "desktop": {
            width: 700,
            height: 600,
        },
    }

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;

            // Artificialisation
            artificialisationChartTitles = [
                `Part du résidentiel dans l'artificialisation de ${municipality.name}`,
                `Artificialisation du territoire de ${municipality.name} pour 2002 et 2020`
            ]

            // Comparison
            highlights = [
                municipality.ins !== "3000" ? [Number(municipality.ins)] : [],
                [53053, 63089],
                $municipalities
                    .filter((municipality) => municipality.artificialisation.pctResidentialShareInArtificialisation === 100)
                    .map((municipality) => Number(municipality.ins))
            ]

            // Population
            lineData = [
                [municipality.population],
                [municipality.householdSize],
                [municipality.nbHouses]
            ]
            updateContent(container, municipality.name, municipality.artificialisation);
        }
    })

    municipalities.subscribe((values) => {
        values.forEach((municipality) => {
            allLocalitiesIncrease.push({
                i: Number(municipality.ins),
                value: municipality.artificialisation.pctArtificialisationIncrease,
                key: municipality.name,
                color: "green",
                radius: (municipality.artificialisation.pctResidentialShareInArtificialisation / 100) * 5.4,
                params: {
                    name: municipality.name,
                    residentialShare: municipality.artificialisation.pctResidentialShareInArtificialisation
                }
            })  
        })
    })

    viewport.subscribe((value) => {
        if (value === "mobile") {
            for (let i = 0; i < allLocalitiesIncrease.length; i++) {
                allLocalitiesIncrease[i].radius /= 1;
            }
        } else {
            for (let i = 0; i < allLocalitiesIncrease.length; i++) {
                allLocalitiesIncrease[i].radius *= 2;
            }
        }
    })

    onMount(() => {
        updateContent(container, municipality.name, municipality.artificialisation);
    })
</script>

<div class="artificialisation" bind:this={container}>
    {#each sections as sectionName, i}
        <div class:background-secondary={i%2 === 1}>
            {#if sectionName === "artificialisation"}
                {#if $viewport === "desktop"}
                    <Scroller bind:index={artificialisationIndex}>
                        <div slot="foreground" class="scroller-left">
                            {#each Object.values(content[sectionName]) as cardContent}
                                <section>
                                    <div class="content">
                                        <div class="card">
                                            {@html cardContent}
                                        </div>
                                    </div>
                                </section>
                            {/each}
                        </div>
                        <div slot="background" class="scroller-right">
                            <section>
                                <ArtificialisationChart 
                                    width={ARTIFICIALISATION_CHART_SIZE[$viewport].width}
                                    height={ARTIFICIALISATION_CHART_SIZE[$viewport].height}
                                    baseElements={municipality.artificialisation.territory}
                                    residentialShare={artificialisationIndex === 1 ? municipality.artificialisation.pctResidentialShareInArtificialisation / 100 : 0}
                                    increase={municipality.artificialisation.artificialisationIncrease}
                                    increasePct={municipality.artificialisation.pctArtificialisationIncrease}
                                    title={artificialisationChartTitles[artificialisationIndex]}
                                />
                            </section>
                        </div>
                    </Scroller>
                {:else}
                    {#each Object.values(content[sectionName]) as cardContent, i}
                        <section>
                            <div class="content">
                                <div class="card">
                                    {@html cardContent}
                                </div>
                            </div>
                            <ArtificialisationChart 
                                width={ARTIFICIALISATION_CHART_SIZE[$viewport].width}
                                height={ARTIFICIALISATION_CHART_SIZE[$viewport].height}
                                baseElements={municipality.artificialisation.territory}
                                residentialShare={i === 1 ? municipality.artificialisation.pctResidentialShareInArtificialisation / 100 : 0}
                                increase={municipality.artificialisation.artificialisationIncrease}
                                increasePct={municipality.artificialisation.pctArtificialisationIncrease}
                                title={artificialisationChartTitles[i]}
                            />
                        </section>
                    {/each}
                {/if}
            {:else if sectionName === "comparison"}
                {#if $viewport === "desktop"}
                    <Scroller bind:index={comparisonIndex}>
                        <div slot="foreground" class="scroller-left">
                            {#each Object.values(content[sectionName]) as cardContent}
                                <section>
                                    <div class="content">
                                        <div class="card">
                                            {@html cardContent}
                                        </div>
                                    </div>
                                </section>
                            {/each}
                        </div>
                        <div slot="background" class="scroller-right">
                            <section>
                                <BeeswarmChart 
                                    width={COMPARISON_CHART_SIZE[$viewport].width}
                                    height={COMPARISON_CHART_SIZE[$viewport].height}
                                    data={allLocalitiesIncrease}
                                    avgValue={$municipalities.find((locality) => locality.ins === "3000")?.artificialisation.pctArtificialisationIncrease}
                                    highlighted={highlights[comparisonIndex]}
                                    title="Évolution de l'artificialisation entre 2002 et 2020 par communes"
                                />
                            </section>
                        </div>
                    </Scroller>
                {:else}
                    {#each Object.values(content[sectionName]) as cardContent, i}
                        <section>
                            <div class="content">
                                <div class="card">
                                    {@html cardContent}
                                </div>
                            </div>
                            <BeeswarmChart 
                                width={COMPARISON_CHART_SIZE[$viewport].width}
                                height={COMPARISON_CHART_SIZE[$viewport].height}
                                data={allLocalitiesIncrease}
                                avgValue={$municipalities.find((locality) => locality.ins === "3000")?.artificialisation.pctArtificialisationIncrease}
                                highlighted={highlights[i]}
                                strength={1}
                                title="Évolution de l'artificialisation entre 2002 et 2020 par communes"
                            />
                        </section>
                    {/each}
                {/if}
            {:else if sectionName === "population"}
                {#if $viewport === "desktop"}
                    <Scroller bind:index={populationIndex}>
                        <div slot="foreground" class="scroller-left">
                            {#each Object.values(content[sectionName]) as cardContent}
                                <section>
                                    <div class="content">
                                        <div class="card">
                                            {@html cardContent}
                                        </div>
                                    </div>
                                </section>
                            {/each}
                        </div>
                        <div slot="background" class="scroller-right">
                            <section>
                                <LineChart 
                                    width={POPULATION_CHART_SIZE[$viewport].width}
                                    height={POPULATION_CHART_SIZE[$viewport].height}
                                    data={lineData[populationIndex]}
                                    colors={[graph.population]}
                                    yAxisTitle={axisTitles[populationIndex]}
                                    xAxisTitle="années"
                                    title={titles[populationIndex]}
                                />
                            </section>
                        </div>
                    </Scroller>
                {:else}
                    {#each Object.values(content[sectionName]) as cardContent, i}
                        <section>
                            <div class="content">
                                <div class="card">
                                    {@html cardContent}
                                </div>
                            </div>
                            <LineChart 
                                width={POPULATION_CHART_SIZE[$viewport].width}
                                height={POPULATION_CHART_SIZE[$viewport].height}
                                data={lineData[i]}
                                colors={[graph.population]}
                                yAxisTitle={axisTitles[i]}
                                xAxisTitle="années"
                                title={titles[i]}
                            />
                        </section>
                    {/each}
                {/if}
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
    :global(.scroller-left) {
        width: 33%;
        margin-left: 110px;
    }

    :global(.scroller-right) {
        position: relative;
        left: 40%;
        width: 60%;
    }
</style>