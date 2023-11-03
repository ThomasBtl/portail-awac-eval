<script lang=ts>
    import type { Feature } from "$lib/types/geojson.type";
    import AutocompleteElement from "./AutocompleteElement.svelte";

    // elements : is an array of string specifying all the possible elements that can be encoded.
    export let elements: Feature<any>[] = [];
    // The value of the input field.
    export let value: string | null = null;
    /** filteredElement : is an array of string specifying all the elements that start with a user encoded value. */
    export let filteredElements: Feature<any>[] = [];
    /** Parent function to call to validate the selection of the municipality */
    export let selectHandler: (d: Feature<any>) => void

    let selectedIndex: number = -1;
    let selected: boolean = false;

    /**
     * Function that find a subset of string elements that begins by a certain string.
     * @param startWith The beginning of the elements to find.
     * @modfies {filteredElement} Replace the filteredElements array by another array produce by the new startWith parameter.
     */
    function autocomplete(startWith: string) {
        if (startWith === "") {
            // Let reset the fileteredElement in order the not have the complete list of elements inside our autocompletion box.
            filteredElements = [];
        } else {
            const regex = new RegExp(`^${startWith}`, "gi");
            filteredElements = elements.filter((el) => {
                const name = el.properties.name;
                if (name) {
                    return name.match(regex);
                }
                return false;
            }); // Only keep elements that start with the given parameter.
        }
    }

    function onInputHandler(
        e: KeyboardEvent & {
            currentTarget: HTMLInputElement;
        }
    ) {
        // A11y control.
        switch (e.key) {
            case 'ArrowDown':
                if (selectedIndex >= filteredElements.length - 1) {
                    selectedIndex = 0;
                } else {
                    selectedIndex += 1;
                }
                value=filteredElements[selectedIndex].properties.name;
                break;
            case 'ArrowUp':
                if (selectedIndex <= 0) {
                    selectedIndex = filteredElements.length - 1;
                } else {
                    selectedIndex -= 1;
                }
                value=filteredElements[selectedIndex].properties.name;
                break;
            default:
                const { currentTarget } = e;
                selected = false;
                autocomplete(currentTarget.value);
                break;
        }
    }

    function onClickHandler(id: number, newValue: string) {
        selectedIndex = id;
        value = newValue;
        selected = true
        filteredElements = [filteredElements[id]];
        selectHandler(filteredElements[0]);
    }

</script>

<div class="autocomplete">
    <input
        class="autocomplete-input"
        {value}
        type="text"
        placeholder="Votre commune"
        on:keyup={onInputHandler}
    />
    <!-- Cannot use <datalist> here because it is not well supported on all broswer, notably Edge and some version of Firefox -->
    {#if filteredElements.length > 0 && !selected}
        <div class="filtered-wrapper">
            {#each filteredElements as element, k}
                <AutocompleteElement id={k} isSelected={selectedIndex === k} text={element.properties.name} onClick={onClickHandler}/>
            {/each}
        </div>
    {/if}
</div>

<style>
    .autocomplete {
        max-width: 400px;
        width: 80%;
        position: relative;
        /* display: flex; */
        justify-content: center;
    }

    .filtered-wrapper {
        position: absolute;
        width: 100%;
        max-height: 11vh;
        border: 1px solid black;
        overflow: hidden;
        background-color: #fff;
        border-radius: 5px;
        margin-top: 5px;
        z-index: 10;
    }

    .filtered-wrapper:hover {
        overflow: auto;
    }

    input {
        width: 100%;
        height: 50px;
        font-size: 1.2rem;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        border-color: black;
        border-image: initial;
        border-radius: 5px;
    }

    input:focus {
        outline: none;
    }
</style>
