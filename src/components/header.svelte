<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let showText;

    onMount(async () => {
        await delay(1000);
        showText = "Hi! I'm Mattias.";
        await delay(2000);
        showText = false;
        await delay(2000);
        showText = "Welcome to my portfolio!";
    });

    function delay(delayInms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
</script>

<header>
    <img
        src="https://raw.githubusercontent.com/mattiasinokuchi/portfolio/main/src/assets/me.jpeg"
        alt="me eating icecream"
    />
    {#if showText}
        <h1 transition:fade>{showText}</h1>
    {/if}
</header>

<style>
    header {
        height: 100vh;
        display: flex;
    }

    h1 {
        font-size: 5vw;
        width: 40vh;
        margin-left: 10vw;
        margin-top: 10vw;
        text-align: center;
    }

    img {
        height: 60vh;
        margin-top: 10vw;
        background: white;
        padding: 2vw;
        border: 1px solid grey;
        box-shadow: 0.5vw 0.5vw 1vw black;
        transform: rotate(5deg);
        margin-left: 5vw;
    }
    @media (max-width: 800px) {
        header {
            display: block;
        }

        h1 {
            font-size: 10vw;
            margin: 0 auto;
        }

        img {
            height: 40vh;
        }
    }
</style>
