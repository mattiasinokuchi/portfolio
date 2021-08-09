<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let showText;

    onMount(async () => {
        await show("Hi! I'm Mattias.");
        await show("Your Junior Web Developer!");
        await show("Welcome to my portfolio!");
    });

    async function show(message) {
        showText = false;
        await delay(1000);
        showText = message;
        await delay(3000);
    }

    function delay(delayInms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delayInms);
        });
    }
</script>

<header>
    <img
        src="https://raw.githubusercontent.com/mattiasinokuchi/portfolio/main/public/me.jpeg"
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
        margin-top: 10vh;
    }

    h1 {
        font-size: 5vw;
        width: 40vh;
        margin-left: 5vw;
        margin-top: 20vh;
        text-align: center;
    }

    img {
        height: 60vh;
        margin-top: 10vh;
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
            height: 35vh;
        }
    }
</style>
