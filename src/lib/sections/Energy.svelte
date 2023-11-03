<script lang="ts">
    import { content } from '$lib/assests/content/energy';
    import { selectedMunicipality } from '$lib/store';
    import { updateContent } from '$lib/utils';
    import { onMount, afterUpdate } from 'svelte';

    import type { Municipality } from '$lib/types/municipality.type';

    /** Main wrapper of the section */
    let container: HTMLDivElement;
    /** Sections name for this page*/
    let sections = Object.keys(content);

    /************************************/
    /**                                **/
    /**    uncomment the following     **/
    /**    lines if some values should **/
    /**    be displayed dynamically in **/
    /**    this section                **/
    /**                                **/
    /************************************/

    // /** Selected municipality*/
    // let municipality: Municipality;

    // selectedMunicipality.subscribe((value) => {
    //     if (value) {
    //         municipality = value;
    //         updateContent(container, municipality.name, municipality.energy)
    //     }
    // })

    // onMount(() => {
    //     updateContent(container, municipality.name, municipality.energy);
    // })

    // afterUpdate(() => {
    //     updateContent(container, municipality.name, municipality.energy);
    // })
</script>

<div class="energy" bind:this={container}>
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