<script>
	let projects = [
		{
            name: '😀 Multiplication driller',
            href: 'https://mattiasinokuchi.github.io/multiplication/',
            alt: 'screenshot showing 8x9=72',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/multiplication/master/screenshot.png'
        },
		{
            name: '😀 Japanese speaking memory game',
            href: 'https://mattiasinokuchi.github.io/memory/',
            alt: 'screenshot showing memory game with animals',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/memory/master/screenshot.png'
        },
		{
            name: '🙂 Seeding machine calculator',
            href: 'https://mattiasinokuchi.github.io/seedingcalculator/',
            alt: 'screenshot showing a calculator',
            src: 'https://raw.githubusercontent.com/mattiasinokuchi/seedingcalculator/master/screenshot.png'
        }
	];
</script>

<header>
    <h2>Web projects from past to present</h2>
</header>

<ul>
	{#each projects as { name, href, alt, src }}
		<li>
            <a target="_blank" href={href}>
                <img alt={alt} src={src}>
		        {name}
		    </a>
        </li>
	{/each}
</ul>
