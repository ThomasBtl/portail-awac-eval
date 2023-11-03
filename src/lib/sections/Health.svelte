<script lang="ts">
    import { content } from '$lib/assests/content/health';
    import { selectedMunicipality } from '$lib/store';
    import { onMount, afterUpdate } from 'svelte';
    import { updateContent } from '$lib/utils';

    import type { Municipality } from '$lib/types/municipality.type';

    /** Main wrapper of the section */
    let container: HTMLDivElement;
    /** Selected municipality*/
    let municipality: Municipality;
    /** Sections name for this page*/
    let sections = Object.keys(content);

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;
            updateContent(container, municipality.name, municipality.health)
        }
    })

    onMount(() => {
        updateContent(container, municipality.name, municipality.health)
    })

    afterUpdate (() => {
        updateContent(container, municipality.name, municipality.health)
    })
</script>

<div class="health" bind:this={container}>
    {#each sections as sectionName, i}
        <div class:background-secondary={i%2 === 1}>
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
    {/each}
</div>