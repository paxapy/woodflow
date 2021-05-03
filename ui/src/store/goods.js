import { writable } from 'svelte/store';

export const allGoods = writable([]);
export const allCategories = writable([]);
export const currentGood = writable();
export const currentCategory = writable();
