import { readable } from 'svelte/store';

export let projects = readable([
    {
        name: '😀 Multiplication driller',
        description: 'Made my first web app and discovered it was hard to stop styling things with CSS.',
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
        description: "My Sister needed a visitor counter due to the Pandemia. Authentication, localization and server rendering...the event was gone long before I learned it :-)",
        href: 'http://little-census.se/',
        alt: 'screenshot of an app which counts people',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/little-census/main/screenshot.png'
    },
    {
        name: '🙂 Metric-Imperial Converter',
        description: 'Back to school at freeCodeCamp. Discovered the ease of having a program testing a program.',
        href: 'https://metric-imp-converter.mattiasinokuchi.repl.co',
        alt: 'screenshot of an app which converts between metic and imperial units',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/metric-imp-converter/gomix/screenshot.png'
    },
    {
        name: '🙂 Issue Tracker',
        description: 'freeCodeCamp dipped me deeper in back-end programming with Node.js, Express and Mongoose.',
        href: 'https://issue-tracker.mattiasinokuchi.repl.co/',
        alt: 'screenshot of an app for keeping track of issues',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/issue-tracker/gomix/screenshot.png'
    },
    {
        name: '😂 Sudoku solver',
        description: 'Likely to be a memory for the rest of my life from freeCodeCamp. I still get tears in my eyes when I tell people about the moment a soduku solution popped out on the screen.',
        href: 'https://sudoku-solver.mattiasinokuchi.repl.co',
        alt: 'screenshot of an app which solves sudoku',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/sudoku-solver/master/screenshot.png'
    },
    {
        name: '🙂 American / British English Translator',
        description: 'freeCodeCamp challenge. I wonder if I will remember regular expressions like "(?&lt!\\w|-)".',
        href: 'https://american-british-english-translator.mattiasinokuchi.repl.co/',
        alt: 'screenshot of an app which translates between american and brittish english',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/american-british-english-translator/master/screenshot.png'
    },
    {
        name: '😀 URL Shortener',
        description: 'A faster version of my first back-end challenge from freeCodeCamp using Svelte, serverless functions and MongoDB.',
        href: 'https://re-url.vercel.app',
        alt: 'screenshot of an app which shortens a URL',
        src: 'https://github.com/mattiasinokuchi/serverless-url-shortener/blob/master/screenshot.png?raw=true'
    },
    {
        name: '🙂 Public Doodle',
        description: 'Classical app I made to learn more Svelte, serverless functions and try FaunaDB.',
        href: 'https://doo-dle.netlify.app',
        alt: 'screenshot of an app for doodle',
        src: 'https://github.com/mattiasinokuchi/svelte-netlify-faunadb/raw/master/Screenshot.png'
    }
]);
