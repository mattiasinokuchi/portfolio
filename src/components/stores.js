import { readable } from 'svelte/store';

export let bookStore = readable([
 {name:"Hamlet",author:"William Shakespeare"},
 {name:"The Great Gatsby",author:"F. Scott Fitzgerald"}
]);