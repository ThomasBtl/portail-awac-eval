<script lang="ts">
    import { content } from '$lib/assests/content/agriculture';
    import { 
        AppleIcon,
        BeetrootIcon,
        CornIcon,
        LegumeIcon,
        MeatIcon,
        MilkIcon,
        PotatoIcon,
        SeedIcon
    } from '$lib/components';
    import { selectedMunicipality } from '$lib/store';
    import { onMount, afterUpdate, type ComponentType } from 'svelte';
    import { updateContent } from '$lib/utils';

    import type { Municipality } from '$lib/types/municipality.type';


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
    let activeMenu: number = 0;
    /** Index of the type of food selected in the table */
    let selectedFood: number = 0;
    /** Data regarding the types of food to be represented in the table*/
    let options: {
        name: string;
        classNames: string[];
        component: ComponentType;
        pct?: number;
    }[] = [
        {
            name : "Céréales",
            classNames: [
                'productionCereal',
                'comsumptionCereal',
                'suggestedHealthyConsumptionCereal',
            ],
            component: CornIcon
        },
        // {
        //     name : "Oléagineux",
        //     classNames: [
        //         'productionOilseed',
        //         'comsumptionOilseed',
        //         'suggestedHealthyConsumptionOilseed',
        //     ],
        //     component: SeedIcon
        // },
        {
            name : "Fruits et légumes",
            classNames: [
                'productionFruitAndVegetable',
                'comsumptionFruitAndVegetable',
                'suggestedHealthyConsumptionFruitAndVegetable',
            ],
            component: AppleIcon
        },
        {
            name : "Pomme de terre",
            classNames: [
                'productionPotato',
                'comsumptionPotato',
                'suggestedHealthyConsumptionPotato',
            ],
            component: PotatoIcon
        },
        {
            name : "Sucre",
            classNames: [
                'productionSugar',
                'comsumptionSugar',
                'suggestedHealthyConsumptionSugar',
            ],
            component: BeetrootIcon
        },
        {
            name : "Légumineuse",
            classNames: [
                'productionLegume',
                'comsumptionLegume',
                'suggestedHealthyConsumptionLegume',
            ],
            component: LegumeIcon
        },
        {
            name : "Viande",
            classNames: [
                'productionMeat',
                'comsumptionMeat',
                'suggestedHealthyConsumptionMeat',
            ],
            component: MeatIcon
        },
        {
            name : "Lait",
            classNames: [
                'productionMilk',
                'comsumptionMilk',
                'suggestedHealthyConsumptionMilk',
            ],
            component: MilkIcon
        },
    ]

    selectedMunicipality.subscribe((value) => {
        if (value) {
            municipality = value;
            options.forEach((option) => {
                if (municipality.agriculture[option.classNames[2]] === 0) {
                    option.pct = 0.0001;
                } else {
                    option.pct = municipality.agriculture[option.classNames[0]] / municipality.agriculture[option.classNames[2]]
                }
            })
            updateContent(container, municipality.name, municipality.agriculture);
        }
    })

    onMount(() => {
        updateContent(container, municipality.name, municipality.agriculture);
    })

    afterUpdate (() => {
        updateContent(container, municipality.name, municipality.agriculture);
    })
</script>

<div class="farming" bind:this={container}>
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
                                {#if cardContent === "[CUSTOM_TABLE]"}
                                    <p>La résilience du territoire dans ce secteur s’étudie également sous l’angle de la sécurité alimentaire, soit la capacité du territoire à nourrir sa population</p>
                                    <p>On observe un manque de production locale pour plusieurs catégories de cultures.</p>
                                    <div class="menu-wrapper">
                                        {#each options as option, i}
                                            <button
                                                style={`display: block;width: ${100 / options.length}%;border-radius:${(i === 0 ? 5 : 0)}px ${(i === options.length - 1? 5 : 0)}px 0 0;`} 
                                                class="menu-button"
                                                class:active="{i === selectedFood}"
                                                on:click={() => {selectedFood = i}}
                                            >
                                                {option.name}
                                            </button>
                                        {/each}
                                    </div>
                                    <table>
                                        <tr>
                                            <th></th>
                                            <th>Production (t/an) estimée en <span class="emphase municipality-name"></span></th>
                                            <!-- <th>Consommation (t/an) estimée en <span class="emphase municipality-name"></span></th> -->
                                            <th>Consommation (t/an) saine suggérée</th>
                                        </tr>
                                        <tr>
                                            <td>{options[selectedFood].name}</td>
                                            <td><span class={`emphase ${options[selectedFood].classNames[0]}`}></span></td>
                                            <!-- <td><span class={`emphase ${options[selectedFood].classNames[1]}`}></span></td> -->
                                            <td><span class={`emphase ${options[selectedFood].classNames[2]}`}></span></td>
                                        </tr>
                                    </table>
                                    <p style="text-align: center;">Production par rapport à la consommation saine suggérée</p>
                                    <div class="icon-wrapper">
                                        {#each Array(Math.floor(options[selectedFood].pct || 0)) as _}
                                            <svelte:component width={60} height={60} pct={1} this={options[selectedFood].component}/>
                                        {/each}
                                        <svelte:component width={60} height={60} pct={(options[selectedFood].pct || 0) % 1 + 0.0001} this={options[selectedFood].component}/>
                                    </div> 
                                {:else}
                                    {@html cardContent}
                                {/if}
                            </div>
                        </div>
                    </section>
                {/each}
            {/if}
            </div>
    {/each}
</div>

<style>
    th:not(:first-child) {
        padding: 20px;
        background-color: var(--secondaryBackground);
    }

    td {
        text-align: center;
        padding: 50px 0;
        min-width: 100px;
    }

    .icon-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }


    @media (max-width: 1024px) {
        table {
            max-width: 100%;
        }
        tr {
            font-size: 0.7rem;
        }

        th {
            padding: 0;
        }

        td {
            padding: 50px 0;
            min-width: auto;
        }
    }
</style>