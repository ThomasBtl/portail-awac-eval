<script>
    import { content } from '$lib/assests/content/needToAdapt'
</script>

<section>
    <div 
        class="need-to-adapt" 
    >
        <div class="content">
            {#each content.need as card}
                <div class="card">
                    {@html card}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        background-color: #e7e7e7;
    }
</style>