<script>
	let projects = [
		{
            name: '😀 Multiplication driller',
            description: 'Made my first web app and discovered it was hard to stop styling things with CSS.',
            href: 'https://mattiasinokuchi.github.io/multiplication/',
            alt: 'screenshot showing 8x9=72',
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
            description: 'My first idea was to build web applications for people near me. My brother-in-law might be the only one using this one (but he is worth that).',
            href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
            alt: 'screenshot showing a calculator',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
        },
        {
            name: '😀 URL Shortener Microservice',
            description: 'My first back-end challenge from freeCodeCamp with Node.js and a database. Sense of wonder and magic power.',
            href: 'https://url-shortener.mattiasinokuchi.repl.co',
            alt: 'screenshot of an app which has shortened a URL',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/url-shortener/gomix/screenshot.png'
        },
        {
            name: '🙂 The little census',
            description: "My Sister needed a visitor counter due to the Pandemia. Practiced authentication, localization and server rendering. The event was gone long before I finished.",
            href: 'http://little-census.se/" target="_blank" class="project-tile',
            alt: 'screenshot of an app which counts people',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/little-census/main/screenshot.png'
        },
        {
            name: '🙂 Metric-Imperial Converter',
            description: 'Back to school at freeCodeCamp. Discovered the ease of having a program testing a program.',
            href: 'https://metric-imp-converter.mattiasinokuchi.repl.co" target="_blank" class="project-tile',
            alt: 'screenshot of an app which converts between metic and imperial units',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/metric-imp-converter/gomix/screenshot.png'
        },
        {
            name: '🙂 Issue Tracker',
            description: 'freeCodeCamp dipped me deeper in back-end programming with Node.js, Express and Mongoose.',
            href: 'https://issue-tracker.mattiasinokuchi.repl.co/" target="_blank" class="project-tile',
            alt: 'screenshot of an app for keeping track of issues',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/issue-tracker/gomix/screenshot.png'
        },
        {
            name: '😂 Sudoku solver',
            description: 'Likely to be a memory for the rest of my life from freeCodeCamp. I still get tears in my eyes when I tell people about the moment a soduku solution popped out on the screen.',
            href: 'https://sudoku-solver.mattiasinokuchi.repl.co/" target="_blank" class="project-tile',
            alt: 'screenshot of an app which solves sudoku',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/sudoku-solver/master/screenshot.png'
        },
        {
            name: '🙂 American / British English Translator',
            description: 'freeCodeCamp challenge. I wonder if I will remember regular expressions like "(?&lt!\\w|-)".',
            href: 'https://american-british-english-translator.mattiasinokuchi.repl.co/" target="_blank" class="project-tile',
            alt: 'screenshot of an app which translates between american and brittish english',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/american-british-english-translator/master/screenshot.png'
        }
	];
</script>

<style>

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        list-style-type: none;
    }

    li {
        margin-bottom: 10vw;
        border-radius: 40vw;
        box-shadow: inset -0.1vw -0.1vw 0.2vw 0.2vw grey, inset 0 0 0.5vw 1vw white, inset 2vw 2vw 0.5vw 0.5vw grey, inset 0 0 2vw 2vw grey, 1vw 1vw 1vw 1vw rgb(0, 0, 0, 0.7);
        width: 40vw;
        height: 40vw;
        background: white;
        top: 50%;
    }

    a {
        text-decoration: none;
        font-size: 3vw;
        color: black;
    }

    img {
        width: 25vw;
        margin-top: 11vw;
    }

    div {
        width: 40vw;
        margin-bottom: 5vw;
    }

    @media (max-width: 800px) {

        li {
            width: 80vw;
            height: 80vw;
            margin-bottom: 1vw;
            border-radius: 80vw;
            box-shadow: inset -0.2vw -0.2vw 0.4vw 0.4vw grey, inset 0 0 1vw 2vw white, inset 4vw 4vw 1vw 1vw grey, inset 0 0 4vw 4vw grey, 2vw 2vw 2vw 2vw rgb(0, 0, 0, 0.7);

        }

        div {
            width: 90vw;
            margin-bottom: 10vw;
        }

        img {
            width: 50vw;
            margin-top: 22vw;
        }

    }

</style>

<h2 id="projects">Web projects from past to present</h2>

<ul>
	{#each projects as { name, description, href, alt, src }}
		<li>
            <a target="_blank" href={href}>
                <img alt={alt} src={src}>
		    </a>
        </li>
        <div>
            <h3>{name}</h3>
            <p>{description}</p>    
        </div>
{/each}
</ul>
