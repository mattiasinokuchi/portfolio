<nav id="navbar">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#links">Links</a>
    <a href="#contact">Contact</a>
</nav>

<style>
    nav {
        position: fixed;
        top: 1vw;
        left: 0;
        z-index: 1;
        background: rgb(200, 150, 150, 1);
        width: 100%;
        height: 5vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 3vw;
    }

    @media (max-width: 800px) {
        nav {
            height: 10vw;
            font-size: 5vw;
        }
    }
</style>
