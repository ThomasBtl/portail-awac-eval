<script lang=ts>
    import { quantize, interpolateHcl, forceCollide, forceManyBody, forceSimulation, forceX, forceY, max, scaleLinear } from "d3";
    import type { BeeswarmElement } from "$lib/types/chart.type";
    import Axis from "./ChartElements/Axis.svelte";
    import { graph } from "$lib/assests/colors/colors";

    export let width: number;
    export let height: number;
    export let data: BeeswarmElement[];
    export let avgValue: number | undefined;
    export let highlighted: number[] = []; 
    export let strength: number = -10;
    export let title: string;

    let xGrid: number[];
    let note: HTMLDivElement;
    let container: HTMLDivElement;
    let current: BeeswarmElement;

    const NB_TICKS = 10;
    const NUMBER_OF_ITERATION = 100;
    const DEFAULT_WIDTH = 800;

    const margin = {
        top: 70,
        right: 20,
        bottom: 30,
        left: 20,
    }

    // Sorting data
    const colors = quantize(interpolateHcl(graph.compareBegin, graph.compareEnd), data.length)
    data.sort((a, b) => a.value - b.value)
    data.forEach((d, i) => {
        d.color = colors[i]
    })

    const xScale = scaleLinear()
        .domain([0, max(data.map(d => d.value)) as number + 7]) // 7 is an arbriraty value that can be modify and is only usefull to add a bit of margin.
        .range([margin.left, width - margin.right])

    xGrid = xScale.ticks(NB_TICKS)
    const nodes = data.map((d) => {
        return {
            i: d.i,
            fx: xScale(d.value),
            y: height / 2 + Math.random(),
            size: d.radius
        }
    }); // Copying data into nodes


    $: simulation = forceSimulation(nodes)
        .force('charge', forceManyBody().strength(strength))
        .force('x', forceX((d) => d.fx))
        .force('y', forceY((d) => d.y))
        .force('collide', forceCollide((d) => d.size))
        .stop();

    $ : {
        simulation.tick(NUMBER_OF_ITERATION);
        simulation.stop();
    }

    function onCircleHover(element: SVGCircleElement, d: BeeswarmElement) {
        const {
            top: elementTop,
            left: elementLeft
        } = element.getBoundingClientRect(); // Path position.
        
        const {
            top: containerTop,
            left: containerLeft
        } = container.getBoundingClientRect(); // Parent container position.

        // Compute annotation position.
        const offsetLeft = elementLeft - containerLeft + 30; // Add 75px to the left so the note is not directly on the locality.
        const offsetTop = elementTop - containerTop;

        // Assemble annotation
        current = d;
        note.style.top = offsetTop + 'px';
        note.style.left = offsetLeft + 'px';
        note.classList.remove('hidden');
    }

    function onCircleOut() {
        note.classList.add('hidden');
    }

    function formatAxis(value: number) {
        return value.toString() + "%"
    }

</script>

<div bind:this={container} class="beeswarm-chart">
    <div bind:this={note} class="note hidden">
        {#if current && current.params}
            <h4>{current.params.name}</h4>
            <h5>Artificialisation : {current.value.toFixed(2)}%</h5>
            <h5>Part du résidentiel : {current.params.residentialShare.toFixed(2)}%</h5>
        {/if}
    </div>
    <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} viewBox={`0 0 ${width} ${height}`}>
        <text
            y={-20}
            x={(width - margin.left - margin.right)/2}
            stroke="#000"
            stroke-width=0.7
            font-size={`${width/DEFAULT_WIDTH}em`}
            text-anchor="middle"
        >{title}</text>
        <Axis 
            paddings={margin}
            {width}
            {height}
            direction="horizontal"
            nTicks={NB_TICKS}
            scale={xScale}
            name="Augmentation en %age"
            formatFunction={formatAxis}
        />
        <g class="background">
            {#each xGrid as value}
                <line 
                    x1={xScale(value)}
                    x2={xScale(value)}
                    y1={height - margin.bottom}
                    stroke="#c1c1c1"
                    stroke-width=1
                    stroke-dasharray=2
                />
            {/each}
        </g>
        <g class="chart">
            {#each simulation.nodes() as node, i}
                <circle 
                    fill={data[i].color}
                    cx={node.fx}
                    cy={node.y}
                    stroke="rgba(0,0,0,0.3)"
                    opacity={highlighted.length > 0 && !highlighted.includes(node.i) ? 0.2 : 1}
                    r={data[i].radius}
                    on:mouseenter={(e) => onCircleHover(e.currentTarget, data[i])}
                    on:mouseleave={onCircleOut}    
                    style={"transition: opacity 0.5s ease;"}
                />
            {/each}
        </g>
        <g class="avg">
            {#if avgValue}
                <line 
                    x1={xScale(avgValue)}
                    x2={xScale(avgValue)}
                    y1={height - margin.bottom}
                    stroke={"#ff0000"}
                    stroke-opacity=0.5
                    stroke-width=1.5
                />
                <text 
                    x={xScale(avgValue) + 10}
                    y={height - margin.bottom - 10}
                    fill="#454545"
                    font-size={`${(width/(DEFAULT_WIDTH * 1.5))}em`}
                >Moyenne wallone à {avgValue.toFixed(2)}%</text>
            {/if}
        </g>
    </svg>
</div>

<style>
    .beeswarm-chart {
        position: relative;
    }

    .note {
        position: absolute;
        display: block;
        background-color: #fff;
        border: 2px solid black;
        padding: 10px;
        border-radius: 5px;
    }

    .hidden {
        display: none;
    }
</style>
