import {Writable, writable} from "svelte/store";
export class Config {
    constructor(public name: Writable<string> = writable("")) {
    }
}

export const configs: Writable<[Config]> = writable([new Config()]);
export const data = writable(0);

export function buildData() {
    data.set(1);
}
