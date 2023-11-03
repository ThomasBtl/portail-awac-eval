<!-- 
    @component

    Component that fill a svg path up to a certain percentage.
 -->
 <script lang=ts>
    import { onMount } from "svelte";

    /**The width of the canvas*/
    export let width: number;
    /**The height of the canvas*/
    export let height: number;
    /**The percentage of the area to fill. Value between 0 and 1*/
    export let fillPct: number;
    /**An array of svg path. The first path is the one that will be used to be fill up to a certain percentage. The other are for style puropose. The first path will have a black stroke the other path will be filled with black.*/
    export let paths: string[];
    /**The filling color*/
    export let color: string = "green";

    let canvas: HTMLCanvasElement;
    
    function draw(context: CanvasRenderingContext2D | null) {
        if (context) {
            context.beginPath();
            // We fill the main path with an invisible color.
            // Each pixel containing this color up to fillPct will be replace by the main color.
            // This might not be the most elegant way to do it but it works.
            context.strokeStyle="#000"
            context.lineWidth=2
            context.fillStyle="rgba(255, 0, 0, 0.01)"

            const p = new Path2D(paths[0])
            context.translate(0, 0)
            context.fill(p)
            context.stroke(p)

            context.strokeStyle="#000";
            context.lineWidth=2;
            context.fillStyle="#000"
            for (const path of paths.slice(1)) {
                context.fill(new Path2D(path))
            }

            const nPixels = getPixelInsideImageCount(context);
            fillIconWithPixels(context, nPixels * fillPct, color)
        }
    }

    onMount(() => {
        const context = canvas.getContext('2d', { willReadFrequently: true });
        draw(context);
    })

    $: {
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, width, height);
                draw(context);
            }
        }
    }

    /**
     * This function count the number of pixel composing the main path.
     * @param context The canvas context.
     * @return {number} The number of pixel composing the main path.
     */
    function getPixelInsideImageCount(context: CanvasRenderingContext2D) {
        const imageData = context.getImageData(0, 0, width, height);
        let pixelsCount = 0;
        // Each pixel contains 4 data slot corresponding to { red, green, blue, opacity } each on a scale from 0 to 255.
        for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            if (r > 0 && g === 0 && b === 0) {
                pixelsCount++;
            }
        }
        return pixelsCount;
    }

    /**
     * Function that replace a certain number of the main path pixels by a given color.
     * @param context The canvas context.
     * @param pixelCount The number of pixels to replace.
     * @param color The color to replace the main path pixels' color with.
     */
    function fillIconWithPixels(context: CanvasRenderingContext2D, pixelCount: number, color: string) {
        const imageData = context.getImageData(0, 0, width, height); // Get each pixels of the canvas.
        context.fillStyle = color;

        let filledPixelsCound = 0;
        let endIndex = Infinity;
        // Loop from the bottom to the top of the canvas.
        let i = imageData.data.length;
        let rowCount = height;
        while (i >= 0 && endIndex > i) {
            // Get pixel coordinates on canvas.
            const x = (i / 4) % width;
            const y = ((i / 4) - x) / width;

            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            if (r > 0 && g === 0 && b === 0) {
                context.fillRect(x, y, 1, 1);
                if (endIndex === Infinity && filledPixelsCound > pixelCount) {
                    endIndex =  width*(y + 1);
                } else {
                    filledPixelsCound++;
                }
            }
            i -= 4;
        }
    }
</script>

<canvas style={$$props.style} bind:this={canvas} {width} {height}></canvas>
    