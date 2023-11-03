<script lang=ts>
    export let id: number;
    export let isSelected: boolean;
    export let text: string;
    export let onClick: any;
</script>

<div 
    class={'autocomplete-element ' + (isSelected ? 'selected' : '')}
    on:click={() => onClick(id, text)} 
    on:keypress={(e) => {
        if (e.key === "Enter") onClick(id, text)
    }}
>
    {text}
</div>

<style>
    div {
        padding: 5px;
    }

    .selected {
        background-color: var(--primaryBackgroundNolinear);
    }

    div:hover {
        background-color: var(--primaryBackgroundNolinear);
        opacity: 0.5;
        cursor: pointer;
        color: white;
    }
</style>