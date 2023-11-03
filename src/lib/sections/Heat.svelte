<script lang="ts">
    import { content } from '$lib/assests/content/heat';
    import { onMount, afterUpdate } from 'svelte';
    import { heatHistory, selectedMunicipality, viewport } from '$lib/store';
    import { BubbleChart } from '$lib/components';
    import { graph } from '$lib/assests/colors/colors';
    import { updateContent } from '$lib/utils';
    // @ts-ignore
    import Scroller from '@sveltejs/svelte-scroller';

    import type { Municipality } from '$lib/types/municipality.type';
    import type { Point } from '$lib/types/chart.type';

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
    /** Index of the selected menu in the adaptation mesure section*/
    let activeMenu = 0;

    /** For scroller, index of the section in view*/
    let expositionIndex: number;
    /** For scroller, data to display on the graph based on the*/
    let expositionData: Point[]

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;
        }
    })

    afterUpdate(() => {
        updateContent(container, municipality.name, municipality.heat);
    })

    onMount(() => {
        updateContent(container, municipality.name, municipality.heat);
    })

    $: {
        if (expositionIndex === 0) {
            let occ: {[key: number]: number} = {}
            expositionData = $heatHistory.map((element) => {
                if (!occ[element.year]) {
                    occ[element.year] = 1
                } else {
                    occ[element.year]++;
                }
                const y = occ[element.year];
                const obj: Point = {
                    xValue : element.year,
                    yValue : y,
                    r: $viewport === "mobile" ? 4 : 6,
                    displayedValue: 0
                }
                return obj;
            });
        } else if (expositionIndex === 1) {
            expositionData = $heatHistory.map((element) => {
                const obj: Point = {
                    xValue : element.year,
                    yValue : element.duration,
                    r: $viewport === "mobile" ? 4 : 6,
                    displayedValue: 0
                }
                return obj;
            });
        } else {
            expositionData = $heatHistory.map((element) => {
                const obj: Point = {
                    xValue : element.year,
                    yValue : element.duration,
                    r: $viewport === "mobile" ? element.intensity : element.intensity * 6,
                    displayedValue : element.intensity
                }
                return obj;
            });
        }
    }

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
            {:else if sectionName === "exposition"}
                <Scroller bind:index={expositionIndex}>
                    <div slot="foreground" class={`${$viewport === "desktop" ? "scroller-left" : "mobile-background-graph-text"}`}>
                        {#each Object.values(content[sectionName]) as cardContent}
                            <section>
                                <div class="card">
                                    {@html cardContent}
                                </div>
                            </section>
                        {/each}
                        {#if $viewport !== "desktop"}
                            <section class="half-section"></section>
                        {/if}
                    </div>
                    <div slot="background" class={`${$viewport === "desktop" ? "scroller-right" : "mobile-background-graph"}`}>
                        <section>
                            <BubbleChart 
                                width={$viewport === "mobile" ? 320 : 650}
                                height={$viewport === "mobile" ? 250 : 500}
                                title={"Comparaison des vagues de chaleur entre 1900 et 2022"}
                                xAxisTitle={"années"}
                                yAxisTitle={"durée en jour"}
                                data={expositionData}
                                showYAxis={expositionIndex !== 0}
                                showValue={expositionIndex === 2}
                                threshold={[1990]}
                                nTicks={$viewport === "mobile" ? 5 : 10}
                                color={graph.heat}
                            />
                        </section>
                    </div>
                </Scroller>
            {:else if sectionName === "impact_2"}
                <section>
                    <div class="content">
                        {#each Object.values(content[sectionName]) as cardContent}
                            <div class="card">
                                {@html cardContent}
                                <div class="sub-card-wrapper">
                                    {#each [{name: "maison de repos", value:municipality.heat.nbNursingHomeAtRisk}, {name: "Hopitaux", value: municipality.heat.nbHospitalAtRisk}, {name: "crèches et gardien·ne·s", value: municipality.heat.nbNurseryAtRisk}] as { name, value }}
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
    .half-section {
        min-height: 50vh !important;
    }
</style>