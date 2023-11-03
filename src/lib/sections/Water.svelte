<script lang="ts">
    import { content } from '$lib/assests/content/water';
    import { selectedMunicipality } from '$lib/store';
    import type { Municipality } from '$lib/types/municipality.type';
    import { onMount } from 'svelte';
    import { updateContent } from '$lib/utils';

    /** Main wrapper of the section */
    let container: HTMLDivElement;
    /** Index of the selected menu in the adaptation mesure section*/
    let activeMenu: number = 0;
    /** Selected municipality*/
    let municipality: Municipality;
    /** Sections name for this page*/
    let sections = Object.keys(content);
    /** Menu section*/
    let adaptationMenues = content.mesure as {
        intro: string;
        menu: string[];
        texts: string[];
    }

    onMount(() => {
        updateContent(container, municipality.name, municipality.water);
    })

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;
            updateContent(container, municipality.name, municipality.water);
        }
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
