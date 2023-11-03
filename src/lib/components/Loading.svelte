<!-- 
    @component

    Component to displa while loading the data.
 -->
<script lang>
    import { onDestroy } from "svelte";

    let tick = 0;

    const intervalId = setInterval(() => {
        if (tick === 11) {
            tick = 0
        } else {
            tick++;
        }
    }, 210)

    onDestroy(() => {
        clearInterval(intervalId);
    })
</script>

<section>
    <div class="loading">
        <svg xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="535.934pt"
            height="614.924pt"
            viewBox="0 0 535.934 614.924"
        >
            <defs>
                <linearGradient id="gradient0" gradientUnits="objectBoundingBox" x1="0.42970852969814" y1="0.08956258294345" x2="0.0800186994926311" y2="1.11760456153666" spreadMethod="pad">
                    <stop stop-color="#b85230" offset="0" stop-opacity="1"/>
                    <stop stop-color="#db5c2c" offset="0.1925999969244" stop-opacity="1"/>
                    <stop stop-color="#ef8132" offset="1" stop-opacity="1"/>
                </linearGradient>
                <linearGradient id="gradient1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1" spreadMethod="pad">
                    <stop stop-color="#00b6a7" offset="0" stop-opacity="1"/>
                    <stop stop-color="#00a287" offset="0.807399988174438" stop-opacity="1"/>
                    <stop stop-color="#00a186" offset="1" stop-opacity="1"/>
                </linearGradient>
            </defs>
            <g id="group0" fill="none">
                <!-- <path class:active="{tick >= 6}" id="shape0" transform="translate(0, 88.0047690407662)" fill="#f08b4b" fill-rule="evenodd" d="M0 232.94L0.0312476 66.0075L115.001 0L259.952 84.9739L0 232.94" />
                <path class:active="{tick < 1 || tick >= 7}" id="shape1" transform="translate(122.984826150795, 0)" fill="#d19cc5" fill-rule="evenodd" d="M257.953 232.956L257.953 66.0231L142.967 0L0 83.974L257.953 232.956" />
                <path class:active="{tick < 2 || tick >= 8}" id="shape0" transform="matrix(0.999999956566982 0 0 0.999999956566982 387.214788103253 67.9501457143317)" fill="url(#gradient0)" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0.937437 0L0 298.854C48.6607 271.581 91.8276 247.222 145.982 217.036C135.721 119.427 87.3725 47.0822 0.937437 0Z"/>
                <path class:active="{tick < 3 || tick >= 9}" id="shape02" transform="matrix(0.999999946858969 0 0 0.999999946858969 272.30436434078 292.862534726826)" fill="url(#gradient1)" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0 148.729L262.085 0C263.656 98.9978 224.987 177.309 146.078 234.935C93.0888 203.533 127.669 224.925 0 148.729Z"/>
                <path class:active="{tick < 4 || tick >= 10}" id="shape01" transform="matrix(0.999999988836224 0 0 0.999999988836224 152.814869863663 379.261733032004)" fill="#76b93f" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0.0312275 0L258.952 151.95L115.954 234.924L0.984261 169.901L0 169.26Z"/>
                <path class:active="{tick < 5 || tick >= 11}" id="shape03" transform="matrix(0.999999956822412 0 0 0.999999956822412 0.529443695361024 245.297436700668)" fill="#0ba1dd" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M146.978 0L0.0120469 82.9429L0 216.911L145.932 300.869C145.932 300.869 146.28 200.579 146.978 0Z"/> -->
                <path class="active" id="shape0" transform="translate(0, 88.0047690407662)" fill="#f08b4b" fill-rule="evenodd" d="M0 232.94L0.0312476 66.0075L115.001 0L259.952 84.9739L0 232.94" />
                <path class="active" id="shape1" transform="translate(122.984826150795, 0)" fill="#d19cc5" fill-rule="evenodd" d="M257.953 232.956L257.953 66.0231L142.967 0L0 83.974L257.953 232.956" />
                <path class="active" id="shape0" transform="matrix(0.999999956566982 0 0 0.999999956566982 387.214788103253 67.9501457143317)" fill="url(#gradient0)" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0.937437 0L0 298.854C48.6607 271.581 91.8276 247.222 145.982 217.036C135.721 119.427 87.3725 47.0822 0.937437 0Z"/>
                <path class="active" id="shape02" transform="matrix(0.999999946858969 0 0 0.999999946858969 272.30436434078 292.862534726826)" fill="url(#gradient1)" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0 148.729L262.085 0C263.656 98.9978 224.987 177.309 146.078 234.935C93.0888 203.533 127.669 224.925 0 148.729Z"/>
                <path class="active" id="shape01" transform="matrix(0.999999988836224 0 0 0.999999988836224 152.814869863663 379.261733032004)" fill="#76b93f" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M0.0312275 0L258.952 151.95L115.954 234.924L0.984261 169.901L0 169.26Z"/>
                <path class="active" id="shape03" transform="matrix(0.999999956822412 0 0 0.999999956822412 0.529443695361024 245.297436700668)" fill="#0ba1dd" fill-rule="evenodd" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M146.978 0L0.0120469 82.9429L0 216.911L145.932 300.869C145.932 300.869 146.28 200.579 146.978 0Z"/>
            </g>
        </svg>
        <h2>Chargement...</h2>
    </div>
</section>

<style>
    section {
        background: var(--secondary-background);
    }

    h2 {
        text-align: center;
        width: auto;
        margin: 50px 0;
    }

    svg {
        width: 100px;
        height: auto;
    }

    svg path {
        opacity: 0;
        transition: opacity 0.25s ease-out;
    }

    .loading {
        text-align: center;
    }

    .active {
        opacity: 1;
        transition: opacity 0.25s ease-out;
    }
</style>