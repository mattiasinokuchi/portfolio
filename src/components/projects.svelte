<script>
	let projects = [
		{ id: 'J---aiyznGQ', name: '😀 Multiplication driller' },
		{ id: 'z_AbfPXTKms', name: '😀 Japanese speaking memory game' },
		{ id: 'OUtn3pvWmpg', name: '🙂 Seeding machine calculator' }
	];
</script>

<header>
    <h2>Web projects from past to present</h2>
</header>

<ul>
	{#each projects as { id, name }}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
		    {name}
		</a></li>
	{/each}
</ul>
