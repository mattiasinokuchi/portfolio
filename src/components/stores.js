import { readable } from 'svelte/store';

export let projects = readable([
    {
        name: '😀 Multiplication driller',
        description: 'My first web app. Written in a text editor. So simple! So fun!',
        href: 'https://mattiasinokuchi.github.io/multiplication/',
        alt: 'screenshot showing eight times nine is equal to seventy-two',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/multiplication/master/screenshot.png'
    },
    {
        name: '😀 Japanese speaking memory game',
        description: 'Next project was clearly over my level but I had fun and learned by poking around with code from more clever people.',
        href: 'https://mattiasinokuchi.github.io/memory/',
        alt: 'screenshot showing memory game with animals',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/memory/master/screenshot.png'
    },
    {
        name: '🙂 Seeding machine calculator',
        description: 'My first idea was to build web applications for people near me. My brother-in-law might be the only one using this one.',
        href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
        alt: 'screenshot showing a calculator',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
    },
    {
        name: '🙂 The little census',
        description: 'My Sister needed a visitor counter due to the Pandemia. Authentication, localization and server rendering. Similar to my last project but a lot slower.',
        href: 'http://little-census.se/',
        alt: 'screenshot of an app which counts people',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/little-census/main/screenshot.png'
    },
    {
        name: '🙂 American / British English Translator',
        description: 'A freeCodeCamp project. I learned (and forgot) regular expressions like "(?&lt!\\w|-)". Looks like swearing to me',
        href: 'https://american-british-english-translator.mattiasinokuchi.repl.co/',
        alt: 'screenshot of an app which translates between american and brittish english',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/american-british-english-translator/master/screenshot.png'
    },
    {
        name: '😀 URL Shortener',
        description: 'A modern version of my first back-end challenge from freeCodeCamp using Svelte, serverless functions and MongoDB.',
        href: 'https://re-url.vercel.app',
        alt: 'screenshot of an app which shortens a URL',
        src: 'https://github.com/mattiasinokuchi/serverless-url-shortener/blob/master/screenshot.png?raw=true'
    },
    {
        name: '😂 Sudoku solver',
        description: 'Remake of a freeCodeCamp project. I still get tears in my eyes when I talk about the moment it worked.',
        href: 'https://su-do-ku.netlify.app',
        alt: 'screenshot of an app which solves sudoku',
        src: 'https://github.com/mattiasinokuchi/svelte-sudoku-solver/raw/master/Screenshot.png'
    },
    {
        name: '🙂 List personal things!',
        description: 'Authentication with Magic Link. So much easier to understand than any other I have tried. Besides, who likes passwords?',
        href: 'https://magic-svelte.netlify.app',
        alt: 'screenshot of an app which lists personal things',
        src: 'https://github.com/mattiasinokuchi/magic-svelte/raw/master/Screenshot.png'
    }
]);
