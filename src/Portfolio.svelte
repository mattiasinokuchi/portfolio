<!-- This the main component-->

<script>
import Navbar from './components/navbar.svelte';
import Header from './components/header.svelte';
</script>

<style>
	:global(body){
    	background-image:
			repeating-linear-gradient(90deg,rgb(150, 0, 0, 0.5),rgb(150, 0, 0, 0.5) 5vw, rgb(256, 256, 256, 0.5) 5vw, rgb(256, 256, 256, 0.5) 10vw),
			repeating-linear-gradient(180deg, rgb(150, 0, 0, 0.5),rgb(150, 0, 0, 0.5) 5vw, rgb(256, 256, 256, 0.5) 5vw, rgb(256, 256, 256, 0.5) 10vw);
    }
</style>

<Navbar/>
<Header/>