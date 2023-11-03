// Full implementation of GoeJson type can be found here : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/geojson/index.d.ts
// based on : https://www.rfc-editor.org/rfc/rfc7946
// Adapted to our current wallonia geojson.

export as namespace GeoJSON

export type GeoJsonWallonia = FeatureCollection;
type GeoJsonTypes = GeoJson['type'];
type BBOx = [number, number, number, number] | [number, number, number, number, number, number]; 
export type WalloniaProperties = { 
    geo_point_2d: {
        lon: number,
        lat: number,
    };
    name: string;
    nsi: string;
};

interface GeoJsonObject {
    type: GeoJsonTypes;
    bbox?: BBOx | undefined
}

export type Position = [number, number]

export interface Polygon {
    type : 'Polygon',
    coordinates: Position[][]
}

export interface MultiPolygon {
    type : 'MultiPolygon';
    coordinates: Position[][][];
}

interface FeatureCollection extends GeoJsonObject{ 
    type : 'FeatureCollection';
    features: Feature<Polygon | MultiPolygon>[];
} 

export interface Feature<G> extends GeoJsonObject {
    type: 'Feature';
    geometry: G;
    id?: string | number;
    properties: WalloniaProperties;
}