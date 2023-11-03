<script lang=ts>
    import { quadOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    // @ts-ignore
    import Scroller from '@sveltejs/svelte-scroller';
    import { browser } from "$app/environment";
    import { onDestroy, onMount } from "svelte";
    import type { Map, LatLngTuple, LatLngExpression } from "leaflet";
    import { viewport, walloniaGeojson } from "$lib/store";
    import { content } from '$lib/assests/content/flood';
    import { graph } from "$lib/assests/colors/colors";

    let map: Map;
    let container: HTMLDivElement;
    // @ts-ignore
    let L;
    let cardsContent = content.floodMap as string[];

    let zoom = 9;

    let floodMap: {
        [key: string]: {
            polygons: LatLngTuple[][][];
            centroid?: LatLngTuple;
        };
    } = {
        "1984" : {
            polygons: [],
            centroid: undefined
        },
        "1993" : {
            polygons: [],
            centroid: undefined
        },
        "1995" : {
            polygons: [],
            centroid: undefined
        }
        ,
        "2021" : {
            polygons: [],
            centroid: undefined
        }
    }

    const floodedLocalitiesByYear: {
        [key: string]: string[]
    } = {
        '1984' : ["85007"],
        '1993' : ["84010", "84077", "91143"],
        '1995' : ["84077", "84010", "56005"],
        '2021' : ["63046", "62063", "63079", "61024", "93088", "91034", "93056", "92087", "93022", "83028", "25112", "25023", "56051", "52011", "52074", "52025", "52012", "52012", "56086", "55004", "58001", "63058"]
    }

    let polygon: L.Polygon<any>;

    walloniaGeojson.subscribe((wallonia) => {
        if(wallonia) {
            wallonia.features.forEach((feature) => {
                for (const floodYear of Object.keys(floodedLocalitiesByYear)) {
                    const localitiesIns = floodedLocalitiesByYear[floodYear];
                    if (localitiesIns.includes(feature.properties.nsi)) {
                        let polygon = feature.geometry.coordinates.map((positions) => {
                            return positions.map((latlng) => {
                                return [latlng[1], latlng[0]]
                            })
                        }) as unknown as LatLngTuple[][];

                        floodMap[floodYear].polygons.push(polygon);

                        // Compute centroid
                        let centroid = floodMap[floodYear].centroid
                        if (!centroid) {
                            floodMap[floodYear].centroid = [
                                feature.properties.geo_point_2d.lat,
                                feature.properties.geo_point_2d.lon
                            ]
                        } else {
                            floodMap[floodYear].centroid = [
                                (centroid[0] + feature.properties.geo_point_2d.lat) / 2,
                                (centroid[1] + feature.properties.geo_point_2d.lon) / 2
                            ]
                        }
                    }
                }
            })
        }
    })

    viewport.subscribe((value) => {
        if (value === "mobile") {
            zoom = 7.8;
        } else {
            zoom = 9;
        }
    })

    onMount(async () => {
        if (browser) {
            L = await import('leaflet');

            map = L.map(container).setView([50.31542, 5.00986], 8);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
    })

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    })

    function drawPolygonOnMap(border: LatLngExpression[][] | LatLngExpression[][][]) {
        if (border) {
            // @ts-ignore
            polygon = L.polygon(border, { color: graph.flood}).addTo(map)
        }
    }

    function removePolygonOnMap() {
        if (polygon) {
            polygon.removeFrom(map);
        }
    }

    let index: number = -1;
    let year = tweened(0, {
        duration: 1000,
        easing: quadOut
    })

    $: {
        if (index === 0) {
            $year = 1984;
            const { polygons, centroid } = floodMap['1984'];
            if (map && polygons && centroid) {
                removePolygonOnMap()
                map.flyTo(centroid, zoom, {
                    animate: true,
                    duration: 1
                })
                drawPolygonOnMap(polygons)
            }
        } else if (index === 1){
            $year = 1993;
            const { polygons, centroid } = floodMap['1993'];
            if (map && polygons && centroid) {
                removePolygonOnMap()
                map.flyTo(centroid, zoom, {
                    animate: true,
                    duration: 1
                })
                drawPolygonOnMap(polygons)
            }
        } else if (index === 2){
            $year = 1995;
            const { polygons, centroid } = floodMap['1995'];
            if (map && polygons && centroid) {
                removePolygonOnMap()
                map.flyTo(centroid, zoom, {
                    animate: true,
                    duration: 1
                })
                drawPolygonOnMap(polygons)
            }
        } else if (index === 3){
            $year = 2021;
            const { polygons, centroid } = floodMap['2021'];
            if (map && polygons && centroid) {
                removePolygonOnMap()
                map.flyTo(centroid, zoom, {
                    animate: true,
                    duration: 1
                })
                drawPolygonOnMap(polygons)
            }
        }
    }
</script>

<div>
    <!-- Workaround to have the card over the map and keeping the other scroller foreground section interactive -->
    <div style="position: relative;">
        <div class="content" style={`position: absolute;z-index: 10; left: ${$viewport === "desktop" ? "25%" : 0};`}>
            {#each cardsContent as card}
                <section>
                    <div class="card">
                        <div class="history-breakdown-wrapper">
                            <div class="left-side">
                                <p>{$year.toFixed()}</p>
                            </div>
                            {@html card}
                        </div>
                    </div>
                </section>
            {/each}
            <section class="half-section"></section>
        </div>
        <Scroller bind:index>
            <div slot="foreground" class="foreground-content">
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section class="half-section"></section>
            </div>
            <div slot="background" style="z-index: -100;">
                <div bind:this={container} class="map"></div>
            </div>
        </Scroller>
    </div>
</div>

<style>
    @import 'leaflet/dist/leaflet.css';
    .map {
        top: 0;
        left: 0;
        height: 100vh;
        width: 99vw;
        z-index: -10;
    }

    .history-breakdown-wrapper {
        display: flex;
    }

    .left-side {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 140px;
        text-align: center;
    }

    .left-side  p {
        font-size: 2rem;
    }

    .half-section {
        min-height: 50vh !important;
    }
</style>