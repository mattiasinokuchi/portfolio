import { readable } from 'svelte/store';

export let projects = readable([
    {
        name: 'Multiplication driller',
        description: 'My first web app written in a text editor. Rediscovering coding was fun! My app could be seen and used by anybody! I quickly discovered styling and CSS was most time consuming and that amazing things could happen by mistake.',
        href: 'https://mattiasinokuchi.github.io/multiplication/',
        alt: 'screenshot showing eight times nine is equal to seventy-two',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/multiplication/master/screenshot.png'
    },
    {
        name: 'Seeding machine calculator',
        description: 'An app for my brother-in-law saving him from headache when farming. Keeping the DOM (a model for the browser) in sync with the state of my app was a pain (using plain Javascript).',
        href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
        alt: 'screenshot showing a calculator',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
    },
    {
        name: 'Online visitor counter',
        description: 'My Sister needed to count visitors due to the Pandemia. I took the chance to practice authentication, localization, server-side rendering (free and slowly awakening).',
        href: 'https://gentle-plains-21871.herokuapp.com/',
        alt: 'screenshot of an app which counts people',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/little-census/main/screenshot.png'
    },
    {
        name: 'Make long links shorter',
        description: 'My first back-end challenge at freeCodeCamp was as exciting as my first app. Something out there responded to me! Later on I discovered how to avoid sleeping servers at no cost using serverless functions.',
        href: 'https://re-url.vercel.app',
        alt: 'screenshot of an app which shortens a URL',
        src: 'https://github.com/mattiasinokuchi/serverless-url-shortener/blob/master/screenshot.png?raw=true'
    },
    {
        name: 'Sudoku solver',
        description: 'I still get tears in my eyes when I talk about the moment this freeCodeCamp project started to work. I thought it deserved a remake with better front. A user interface with 9x9 inputs left me with Svelte as the only framework.',
        href: 'https://su-do-ku.netlify.app',
        alt: 'screenshot of an app which solves sudoku',
        src: 'https://github.com/mattiasinokuchi/svelte-sudoku-solver/raw/master/Screenshot.png'
    },
    {
        name: 'Your online private list',
        description: 'Magic Link is the easiest (safe) way of authenticate users I have tried. And the best things is...no passwords to forget, change or steal!!!',
        href: 'https://magic-svelte.netlify.app',
        alt: 'screenshot of an app which lists personal things',
        src: 'https://github.com/mattiasinokuchi/magic-svelte/raw/master/Screenshot.png'
    },
    {
        name: 'Small Farm ERP (under construction)',
        description: 'My new bold project. Thanks to my brother-in-law I found a reason to pick up SvelteKit (still in beta version) and PostgreSQL to help him keeping track of the business.',
        href: 'https://boss-farm.herokuapp.com',
        alt: 'screenshot showing a delivery',
        src: 'https://github.com/mattiasinokuchi/veggies/raw/master/Screenshot.png'
    }
]);
