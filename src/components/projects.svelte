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
            description: 'My first idea was to build web applications for people near me. There is a risk my brother in law is the only one using this one (but I think he is worth that).',
            href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
            alt: 'screenshot showing a calculator',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
        },
        {
            name: '😀 URL Shortener Microservice',
            description: 'Started freeCodeCamp (nonprofit organization whichs helps people learn to code). Never started on any of the projects in the curriculum for front-end frameworks (tools for writing more complex websites). I felt the mayor framework (React) was difficult and might be outdated before I could make use of it. Headed on with the curriculum and had my first back-end challenge with Node.js and MongoDB (server programming and database). Sense of wonder. Suddenly I felt in control of a invisible force.',
            href: 'https://url-shortener.mattiasinokuchi.repl.co',
            alt: 'screenshot of an app which has shortened a URL',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/url-shortener/gomix/screenshot.png'
        },
        {
            name: '🙂 The little census</h3',
            description: "Pandemia came. My Sister needed to count visitors on a event. Took some time off from freeCodeCamp to practice authorization (login/logout) localization (web page in your prefered language automatically) and a template engine (each user can have it's own content on a web page). Felt very mature when finished (but my Sisters event was gone long ago).",
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
            description: 'freeCodeCamp dipped my feets deeper in MongoDB and I felt like using rubber boots like Mongoose (a set of programming functions to help using the MongoDB database).',
            href: 'https://issue-tracker.mattiasinokuchi.repl.co/" target="_blank" class="project-tile',
            alt: 'screenshot of an app for keeping track of issues',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/issue-tracker/gomix/screenshot.png'
        },
        {
            name: '😂 Sudoku solver</h3',
            description: 'Likely to be a memory for the rest of my life from freeCodeCamp. I still get tears in my eyes when I tell people about the moment a soduku solution popped out on the screen.',
            href: 'https://sudoku-solver.mattiasinokuchi.repl.co/" target="_blank" class="project-tile',
            alt: 'screenshot of an app which solves sudoku',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/sudoku-solver/master/screenshot.png'
        },
        {
            name: '🙂 American / British English Translator',
            description: 'Regular expressions is a good old concept dating back to the 1950s for writing programs that finds characters, words or sentences. I would never gone near things like "(?&lt!\\w|-)" without this gentle kick on my but from freeCodeCamp.',
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
    }

</style>

<h2>Web projects from past to present</h2>

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
