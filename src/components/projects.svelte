<script>
	let projects = [
		{ name: '😀 Multiplication driller', href: 'https://mattiasinokuchi.github.io/multiplication/' },
		{ name: '😀 Japanese speaking memory game', href: 'https://mattiasinokuchi.github.io/memory/' },
		{ name: '🙂 Seeding machine calculator' , href: 'https://mattiasinokuchi.github.io/seedingcalculator/' }
	];
</script>

<header>
    <h2>Web projects from past to present</h2>
</header>

<ul>
	{#each projects as { name, href }}
		<li>
            <a target="_blank" href={href}>
		        {name}
		    </a>
        </li>
	{/each}
</ul>
