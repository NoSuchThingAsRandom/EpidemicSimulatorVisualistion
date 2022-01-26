import {Writable, writable} from "svelte/store";

export class Config {
    constructor(public name: Writable<string> = writable("")) {
    }
}

export interface StatisticsEntry {
    time_step: number
    susceptible: number;
    exposed: number;
    infected: number;
    recovered: number;
    vaccinated: number;
}

export class Data {
    id: string;
    data: { [area: string]: [StatisticsEntry] };

    constructor(id: string, data: { [area: string]: [StatisticsEntry] }) {
        this.id = id;
        this.data = data;
    }
}

export const config_store: Writable<[Config]> = writable([new Config()]);
export const data_store: Writable<Data> = writable();

export async function buildData() {
    let json =await fetch("v1.0.1-test.json").then(res => res.json());
    console.log(Object.keys(json));
    let all_data: [StatisticsEntry] = json["All"];
    let output_area_data: [StatisticsEntry] = json["OutputArea"];
    console.log(all_data);
    data_store.set(new Data("V1.0.1", {"All": all_data,"OutputArea":output_area_data}));
}
