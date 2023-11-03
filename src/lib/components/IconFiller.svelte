<script lang="ts">
    export let width: number = 120;
    export let height: number = 120;
    export let pct: number;
    export let sizeX: number = 60;
    export let sizeY: number = 60;

    const cx = sizeX / 2;
    const cy = sizeY / 2;

    const rx = sizeX / 2;
    const ry = sizeY / 2;

    let x: number;
    let y: number;
    let angle: number;

    $: {
        angle = (360 * pct) * (Math.PI/180);
        x = rx * (Math.cos(angle) + 1);
        y = ry * (Math.sin(angle) + 1)
    }

</script>

<svg {width} {height} viewBox={`0 0 ${sizeX} ${sizeY}`} fill="none" xmlns="http://www.w3.org/2000/svg" class={$$props.class}>
    <slot></slot>
    <path d={`M${cx} ${cy} L${sizeX} ${cy} A ${rx + 5} ${ry + 5} 0 1 0 ${x} ${y}`} fill="white"></path>
</svg>