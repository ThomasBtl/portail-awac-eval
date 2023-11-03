<script lang="ts">
    //@ts-nocheck
    import { content } from '$lib/assests/content/misc';

    let sections = Object.keys(content);

</script>

<div class="health">
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