import municipalitiesData from '$lib/assests/data/municipalities.json';
import heatData from '$lib/assests/data/heatHistory.json';
import geojson from "$lib/assests/data/wallonia.json";
import { writable } from "svelte/store";
import type { GeoJsonWallonia } from "./types/geojson.type";
import type { Municipality } from "./types/municipality.type";
import type { HeatHistory } from "./types/heatHistory.type";

export const viewport = writable<"mobile" | "tablet" | "desktop">("mobile");
export const walloniaGeojson = writable<GeoJsonWallonia>(geojson);
export const municipalities = writable<Municipality[]>(municipalitiesData);
export const selectedMunicipality = writable<Municipality | null>(municipalitiesData.find((municipality) => municipality.ins === "3000"));
export const heatHistory = writable<HeatHistory[]>(heatData);
export const alertMessage = writable<string>("");