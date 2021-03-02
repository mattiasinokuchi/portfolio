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
