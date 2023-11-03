<script lang=ts>
    import { content } from '$lib/assests/content/nav'
    import { chaptersData } from '$lib/assests/content/chapter';
    import { Icon } from '$lib/components';

    /** Main wrapper of the section */
    let container: HTMLElement;
    /** Hovered icon name */
    let hoveredChapterTitle: string = "";

    /**
     * Handler that change the current hovered chapter icon name.
     * Called from hovering an icon.
     * 
     * @param title {string} - The name of the chapter.
     * @modifies {hoveredChapterTitle}
     * */
    function onChapterHover (title:string) {
        hoveredChapterTitle = title.charAt(0).toUpperCase() + title.slice(1);
    }

    /**
     * Handler that remove any selection of chapter.
     * Called from leaving an icon.
     * 
     * @modifies {hoveredChapterTitle}
     * */
    function onChapterLeave () {
        hoveredChapterTitle = ""
    }

    /**
     * Handler that redirect scroll to the end of the container.
     * Called from clicking the continue icon.
     * */
    function onGuidedClick() {
        const { bottom, height } = container.getBoundingClientRect();
        window.scrollTo({
            top: bottom + height,
            behavior: 'smooth'
        })
    }
</script>

<section bind:this={container}>
    <div 
        class="nav" 
    >
        <div class="content">
            <div class="card">
                <div>
                    <h1>{@html content.title}</h1>
                    <span class="line"></span>
                </div>
                <div>
                    {#each content.sections as section}
                        {#if section === "[NAV]"}
                            <div class="icon-wrapper">
                                <div class="chapter-icon">
                                    {#each Object.values(chaptersData) as {displayedName, linkName}}
                                        <a href={`#${linkName}`}>
                                            <div
                                                class="discover"
                                                on:mouseenter={() => onChapterHover(displayedName)}
                                                on:mouseleave={onChapterLeave}
                                            >
                                                <Icon name={displayedName} class="discover-icon" />
                                            </div>
                                        </a>
                                    {/each}
                                </div>
                                <div class="chapter-title-wrapper">
                                    <h4>{hoveredChapterTitle}</h4>
                                </div>
                            </div>
                        {:else if section === "[CONTINUE]"}
                            <a href="#template">
                                <div 
                                    class="discover"
                                    on:click={onGuidedClick}
                                    on:keydown={() => {}}
                                >
                                    <Icon name='chevron-down' class="discover-icon"/>
                                </div>
                            </a>
                        {:else}
                            <h3>{@html section.title}</h3>
                            {@html section.content}
                        {/if}
                    {/each} 
                </div> 
            </div>
        </div>
    </div>
</section>

<style>
    h1, h3 {
        text-align: center;
        padding: 20px 0;
    }
    
    .line {
        display: block;
        height: 2.2px;
        border-radius: 10px;
        background-color: black;
        width: 100%;
        margin: 20px 0;
    }

    .chapter-title-wrapper {
        text-align: center;
        margin-top: 10px;
        height: 25px;
    }

    .chapter-icon {
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        justify-content: center;
    }

    .discover {
        position: relative;
        border: 0;
        border-radius: 50%;
        box-shadow: none;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background-color: transparent;
        transition: background-color 1s ease;
    }

    .discover:hover {
        cursor: pointer;
        background-color: var(--secondaryBackground);
        transition: background-color 0.5s ease;
    }

    :global(.discover-icon){
        position: relative;
        display: block;
        width: 25px;
        height: 25px;
        transform: translate(50%, 50%);
    }

    .discover::before {
        border: 2px solid transparent;
    }

    .discover::after {
        border: 0 solid transparent;
    }

    .discover::before,
    .discover::after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
    }

    .discover:hover::before {
        border-top-color: var(--primaryBackgroundNolinear);
        border-right-color: var(--primaryBackgroundNolinear);
        border-bottom-color: var(--primaryBackgroundNolinear);
        transition: border-top-color 0.25s ease, border-right-color 0.15s ease 0.05s, border-bottom-color 0.15s ease 0.15s;
    }

    .discover:hover::after {
        border-top: 2px solid var(--primaryBackgroundNolinear);
        border-left-width: 2px;
        border-right-width: 2px;
        transform: rotate(270deg);
        transition: transform 0.4s ease 0s, border-left-width 0s ease 0.35s, -webkit-transform 0.4s ease 0s;
    }
</style>