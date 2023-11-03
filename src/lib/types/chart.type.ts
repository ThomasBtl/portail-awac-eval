export interface Element {
    key: number | string;
    value: number;
}

export interface BeeswarmElement extends Element {
    i: number;
    color: string;
    radius: number;
    params?: {
        name: string;
        residentialShare: number;
    };
}

export interface Point {
    xValue: number;
    yValue: number;
    r: number;
    displayedValue: number;
}