import { writable } from "svelte/store";

export let playersStore = writable([])
export let gameStore = writable([])
export let modeStore = writable()