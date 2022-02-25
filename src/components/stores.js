import { readable } from 'svelte/store';

export let projects = readable([
    {
        name: 'Multiplication driller',
        description: 'My first web app written in a text editor. Rediscovering coding was fun! My app could be seen and used by anybody! Amazing (unintentional) things happened using CSS!',
        href: 'https://mattiasinokuchi.github.io/multiplication/',
        alt: 'screenshot showing eight times nine is equal to seventy-two',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/multiplication/master/screenshot.png'
    },
    {
        name: 'Seeding machine calculator',
        description: 'An app for my brother-in-law saving him from headache when farming. Keeping the view in the browser in sync (DOM) was a challenge with vanilla Javascript.',
        href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
        alt: 'screenshot showing a calculator',
        src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
    },
    {
        name: 'Make long links shorter',
        description: 'My first back-end challenge at freeCodeCamp was as exciting as my first app. Something out there responded to me! Later on I discovered how to avoid sleeping servers at no cost using serverless functions.',
        href: 'https://re-url.vercel.app',
        alt: 'screenshot of an app which shortens a URL',
        src: 'https://github.com/mattiasinokuchi/serverless-url-shortener/raw/master/screenshot.png'
    },
    {
        name: 'Sudoku solver',
        description: 'I still get tears in my eyes when I talk about the moment this freeCodeCamp project started to work. I thought it deserved a better user interface and the 81 number inputs encouraged me to use the Svelte framework.',
        href: 'https://su-do-ku.netlify.app',
        alt: 'screenshot of an app which solves sudoku',
        src: 'https://github.com/mattiasinokuchi/svelte-sudoku-solver/raw/master/Screenshot.png'
    },
    {
        name: 'Small Farm ERP',
        description: 'My brother-in-law gave me a reason to pick up SvelteKit and PostgreSQL to help him keeping track of the business. Since SvelteKit is fresh and lacks major support I had to put together the authentication and session management with Auth0 and Redis APIs.',
        href: 'https://my-gapp.herokuapp.com',
        alt: 'screenshot showing a delivery',
        src: 'https://github.com/mattiasinokuchi/veggies/raw/master/screenshot.png'
    }
]);
