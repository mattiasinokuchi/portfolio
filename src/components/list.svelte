<script>
    import {projects} from './components/projects.svelte'
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
