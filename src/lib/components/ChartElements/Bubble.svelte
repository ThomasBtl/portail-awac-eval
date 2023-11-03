<script lang="ts">
    export let cx: number;
    export let cy : number;
    export let r : number;
    export let fill : string;
    export let value: string;
</script>

<circle {cx} {cy} {r} {fill}>
</circle>
<!-- <text x={cx - 10} y={cy + 3.5} font-size=0.7em>{value}</text> -->


<style>
    circle {
        stroke: #000;
    }
</style>