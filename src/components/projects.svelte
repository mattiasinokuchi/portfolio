<script>

    import { bookStore } from './stores.js';
    
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
        margin-bottom: 5vw;
    }

    @media (max-width: 800px) {

        li {
            width: 80vw;
            height: 80vw;
            margin-bottom: 1vw;
            border-radius: 80vw;
            box-shadow: inset -0.2vw -0.2vw 0.4vw 0.4vw grey, inset 0 0 1vw 2vw white, inset 4vw 4vw 1vw 1vw grey, inset 0 0 4vw 4vw grey, 2vw 2vw 2vw 2vw rgb(0, 0, 0, 0.7);

        }

        div {
            width: 90vw;
            margin-bottom: 10vw;
        }

        img {
            width: 50vw;
            margin-top: 22vw;
        }

    }

</style>

<h2 id="projects">Web projects from past to present</h2>

<ul>
    {#each $bookStore as book}
        <li>
            <a target="_blank" href={book.href}>
                <img alt={book.alt} src={book.src}>
		    </a>
        </li>
        <div>
            <h3>{book.name}</h3>
            <p>{book.description}</p>    
        </div>
    {/each} 
</ul>
