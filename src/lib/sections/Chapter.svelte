<!-- 
    @component

    This component represents the chapter page of a section, it introduces the chapter and offers to navigate to others.
 -->
<script lang=ts>
    import { viewport } from "$lib/store";
    import { onMount } from "svelte";
    import { Icon } from "$lib/components";
    import { content, chaptersData } from "$lib/assests/content/chapter";

    /**
     * The name of the chapter 
     */
    export let currentChapterName: string;
    /**
     * Chapters name linked to this chapter.
     */
    export let links: string[] = [];

    /**Main wrapper of the section*/
    let container: HTMLElement;
    /**List of chapters do display*/
    let chapters: {
        [key: string] : {
            link: string;
        }
    } = {}

    /**Starting angle. Do not use number < 0.*/
    let angle = 270;
    let iconWidth = 20;
    let iconHeight = 20;
    /**Default max size of the chapter section. (for viewport adaptation)*/
    let maxWidth = 240;

    for (const { displayedName, linkName } of Object.values(chaptersData)) {
        chapters[displayedName] = {
            link : `#${linkName}`
        }
    }

    /**Angle delta between each icon*/
    const dangle = 360 / Object.keys(chapters).length;

    viewport.subscribe((value) => {
        switch (value) {
            case "desktop" :
                maxWidth = 630;
                iconWidth = 25;
                iconHeight = 25;
                break;
            case "tablet" :
                maxWidth = 500;
                iconWidth = 20;
                iconHeight = 20;
                break;
            case "mobile":
                maxWidth = 240;
                iconWidth = 20;
                iconHeight = 20;
                break;
        }
    })

    onMount(() => {
        updateText();
    })

    /**
     * Function to modify the spans element to contain custom text from the content file.
     * NOTE: Work directly on the DOM, so it is probably not the best way. 
     */
    function updateText() {
        if (container) {
            container.getElementsByClassName('currentChapterName')[0].innerHTML = currentChapterName;
        }
    }
</script>

<section id={$$props.id} bind:this={container}>
    <div class="chapter">
        <div class="circles" style={`width: ${maxWidth}px; height: ${maxWidth}px;`}>
            {#each Object.entries(chapters) as [name, data], i}
                <a href={data.link} >
                    <div class={`${links.includes(name) ? 'linked ': ''}chapter-circle`} style={`transform: rotate(${angle + dangle * i}deg) translate(${maxWidth / 2}px) rotate(-${angle + dangle * i}deg)`}>
                        <Icon 
                            width={iconWidth}
                            height={iconHeight} 
                            {name}
                            colored={links.includes(name)}
                            class="chapter-section-icon"
                            style={`${name === currentChapterName ? "opacity: 0.1;" : ""}`}
                        />
                    </div>
                </a>
                {#if links.includes(name)}
                    <div class="line" style={`transform: rotate(${angle + dangle * i}deg) translate(50%)`}/>
                {/if}
            {/each}
        </div>
        <div class="current-chapter-wrapper" style={`width: ${maxWidth * 0.4}px; height: ${maxWidth * 0.4}px;`}>
            <div class="current-chapter">
                <Icon width={maxWidth * 0.1} height={maxWidth * 0.1} name={currentChapterName} colored={true} class="chapter-main-icon"/>
                <h2>{currentChapterName.charAt(0).toUpperCase()}{currentChapterName.slice(1)}</h2>
            </div>
        </div>
    </div>
    {@html content.footnote}
</section>

<style>
    section {
        background: var(--primaryBackground);
        position: relative;
    }

    .chapter {
        position: relative;
    }

    .circles {
        position: relative;
        margin: calc(100px / 2 + 0px);
    }

    .chapter-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: calc(-40px / 2);
        z-index: 10;
        transition: all 0.12s ease;
    }

    .chapter-circle:hover {
        background-color: #acacac;
        outline: 2px solid black;
        transition: all 0.05s ease;
    }

    :global(.linked) {
        background-color: #404040;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
    }

    :global(.chapter-section-icon){
        position: relative;
        display: block;
        transform: translate(30%, 30%);
    }

    .current-chapter-wrapper {
        text-align: center;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 34%;
        left: 34%;
        border-radius: 50%;
        background-color: #c0c0c0;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
    }

    .current-chapter h2 {
        padding: 25px 0;
    }

    .line {
        position: absolute;
        width: 50%;
        top: 50%;
        left: 25%;
        z-index: 0;
        border: 1px dashed black;
    }

    @media (max-width: 1024px) {
        .current-chapter h2 {
            padding: 10px 0;
            font-size: 0.7rem
        }
        .chapter-circle {
            width: 33px;
            height: 33px;
        }
        .line{
            left: 23.5%;
        }
    }
</style>