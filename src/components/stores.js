import { readable } from 'svelte/store';

export let projects = readable([
    {
        name: 'Multiplication driller',
        description: 'My first web app written in a text editor. Rediscovering coding was very fun! My app could be seen and used by anybody! I quickly discovered styling with CSS to be the most time consuming part...often amazing things happened by mistake.',
        href: 'https://mattiasinokuchi.github.io/multiplication/',
        alt: 'screenshot showing eight times nine is equal to seventy-two',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/multiplication/master/screenshot.png'
    },
    {
        name: 'Seeding machine calculator',
        description: 'An app for my brother-in-law saving him from headache when farming vegetables. Keeping the DOM (a model and bridge between the browser and programmer) in sync with the state of my app was tricky using vanilla Javascript.',
        href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
        alt: 'screenshot showing a calculator',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
    },
    {
        name: 'Online visitor counter',
        description: 'My Sister needed to count visitors due to the Pandemia. I took the chance to practice authentication, localization and server rendering. Serverless would have made it a lot faster.',
        href: 'http://little-census.se/',
        alt: 'screenshot of an app which counts people',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/little-census/main/screenshot.png'
    },
    {
        name: 'American / British English Translator',
        description: 'A freeCodeCamp project. I learned (and forgot) regular expressions. "(?&lt!\\w|-)" still looks a lot like swearing to me',
        href: 'https://american-british-english-translator.mattiasinokuchi.repl.co/',
        alt: 'screenshot of an app which translates between american and brittish english',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/american-british-english-translator/master/screenshot.png'
    },
    {
        name: 'Make long links shorter',
        description: 'My first back-end challenge at freeCodeCamp was as exciting as my first app. Something out there responded to me! Later on I discovered how to make my backend projects working a lot faster at no cost using serverless functions.',
        href: 'https://re-url.vercel.app',
        alt: 'screenshot of an app which shortens a URL',
        src: 'https://github.com/mattiasinokuchi/serverless-url-shortener/blob/master/screenshot.png?raw=true'
    },
    {
        name: 'Sudoku solver',
        description: 'I still get tears in my eyes when I talk about the moment this freeCodeCamp project started working. I thought it deserved a remake with better front. Using Svelte was my only option here.',
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
    }
]);
