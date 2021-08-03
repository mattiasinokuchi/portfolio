<script>
    import { projects } from "./stores.js";
</script>

<h2 id="projects">Projects</h2>
<h3>from past to present</h3>
<br />
<ul>
    {#each $projects as project}
        <img id="fork" alt="fork" src="fork.svg" />
        <li>
            <a target="_blank" href={project.href}>
                <img alt={project.alt} src={project.src} />
            </a>
        </li>
        <img id="knife" alt="knife" src="knife.svg" />
        <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    {/each}
</ul>

<style>
    h2 {
        font-size: 4vw;
        text-align: center;
        padding-top: 20vh;
    }

    h3 {
        font-size: 3vw;
        text-align: center;
    }

    p {
        font-size: 2vw;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        list-style-type: none;
        text-align: center;
        padding-left: 0;
    }

    li {
        margin-bottom: 10vw;
        border-radius: 35vw;
        box-shadow: inset -0.1vw -0.1vw 0.2vw 0.2vw grey,
            inset 0 0 0.5vw 1vw white, inset 2vw 2vw 0.5vw 0.5vw grey,
            inset 0 0 2vw 2vw grey, 1vw 1vw 1vw 1vw rgb(0, 0, 0, 0.7);
        width: 35vw;
        height: 35vw;
        background: white;
        top: 50%;
    }

    a {
        text-decoration: none;
        font-size: 3vw;
        color: black;
    }

    img {
        width: 20vw;
        margin-top: 11vw;
    }

    #fork,
    #knife {
        fill: blue;
        height: 25vw;
        width: 5vw;
    }

    div {
        width: 40vw;
        margin: 5vw;
        margin-bottom: 20vw;
    }

    @media (max-width: 800px) {
        h2 {
            font-size: 8vw;
        }

        h3 {
            font-size: 5vw;
        }

        p {
            font-size: 5vw;
        }

        li {
            width: 70vw;
            height: 70vw;
            margin-bottom: 1vw;
            border-radius: 70vw;
            box-shadow: inset -0.2vw -0.2vw 0.4vw 0.4vw grey,
                inset 0 0 1vw 2vw white, inset 4vw 4vw 1vw 1vw grey,
                inset 0 0 4vw 4vw grey, 2vw 2vw 2vw 2vw rgb(0, 0, 0, 0.7);
        }

        div {
            width: 90vw;
            margin-bottom: 20vw;
        }

        img {
            width: 40vw;
            margin-top: 22vw;
        }

        #fork,
        #knife {
            height: 50vw;
            width: 10vw;
        }
    }
</style>
