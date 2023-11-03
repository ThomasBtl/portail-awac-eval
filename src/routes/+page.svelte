<script lang="ts">
    import { css } from "$lib/assests/colors/colors.js";
    import '../style.css';
    import Loading from "$lib/components/Loading.svelte";
    import { viewport, alertMessage } from "$lib/store";
    import { onMount } from "svelte";
    import { 
        MunicipalitySelection,
        Chapter,
        Artificialisation,
        Flood,
        Heat,
        Water,
        Agriculture,
        Health,
        Biodiversity,
        Misc,
        Header,
        Nav,
        NeedToAdapt 
    } from "$lib/sections";
    import Energy from "$lib/sections/Energy.svelte";

    let message = "";
    let isLoading = true;
    let alertTimeoutId: NodeJS.Timeout | undefined;

    function setViewportMq() {
        if (window.innerWidth >= 1250) {
            viewport.update(() =>  "desktop");
        } else {
            if (window.innerWidth >= 550) {
                viewport.update(() => "tablet");
            } else {
                viewport.update(() => "mobile");
            }
        }
    }

    alertMessage.subscribe((value) => {
        if (value) {
            if (alertTimeoutId) {
                clearTimeout(alertTimeoutId);
            }

            message = value;
            alertTimeoutId = setTimeout(() => {
                alertMessage.update(() => "");
                message = "";
            }, 3500)
        }
    })

    onMount(() => {
        if (typeof window !== undefined) {
            window.addEventListener("rezise", setViewportMq);
            setViewportMq();
            for (const [ name, color ] of Object.entries(css)) {
                document.documentElement.style.setProperty(`--${name}`, color)
            }
            isLoading = false
        }
    });
</script>

<div id="main-page">
    {#if isLoading} 
        <Loading />
    {:else}
        {#if message}
            <div class="alert">
                {@html message}
            </div>
        {/if}
        <Header />
        <Nav />
        <NeedToAdapt />
        <MunicipalitySelection />
            <Chapter 
            currentChapterName="artificialisation"
            links={["inondation", "chaleur", "eau", "biodiversité", "agriculture"]}
            id="artificialisation"
        />
        <Artificialisation />
        <Chapter 
            currentChapterName="inondation"
            links={["artificialisation", "eau", "agriculture"]}
            id="flood"
        />
        <Flood />
        <Chapter 
            currentChapterName="chaleur"
            links={["artificialisation", "eau", "santé"]}
            id="heat"
        />
        <Heat />
        <!-- <Chapter 
            currentChapterName="eau"
            links={["artificialisation", "inondation", "chaleur", "biodiversité", "agriculture", "énergie"]}
            id="water"
        />
        <Water /> -->
        <!-- <Chapter 
            currentChapterName="biodiversité"
            links={["eau", "artificialisation"]}
            id="biodiversity"
        />
        <Biodiversity />
        <Chapter 
            currentChapterName="agriculture"
            links={["inondation", "eau", "artificialisation"]}
            id="farming"
        />
        <Agriculture />
        <Chapter 
            currentChapterName="santé"
            links={["chaleur"]}
            id="health"
        />
        <Health />
        <Chapter 
            currentChapterName="énergie"
            links={[]}
            id="energy"
        />
        <Energy /> -->
        <!-- <Chapter 
            currentChapterName="résilience systémique"
            links={[]}
            id="misc"
        />
        <Misc /> -->
    {/if}
</div>

<style>
    :global(svelte-scroller-background-container){
        pointer-events: all !important;
    }

    :global(svelte-scroller-foreground) {
        z-index: 0 !important;
    }

    @media (max-width: 1024px) {
        :global(.card) {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            padding: 25px 5px;
        }

        :global(.card p, .card h2) {
            padding: 0 2rem !important;
        }

        :global(svelte-scroller-background-container){
            pointer-events: all !important;
        }

        :global(svelte-scroller-foreground) {
            z-index: 1 !important;
        }
    }
</style>

