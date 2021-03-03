<style>
    input, textarea, button {
        font-size: 3vw;
    }

    input, textarea {
        width: 40vw;
        height: 10vh;
    }

    textarea {
        height: 20vh;
    }

    label {
        display: block;
    }

    @media (max-width: 800px) {
        
        input, textarea, button {
            font-size: 6vw;
        }

        input, textarea {
            width: 80vw;
            height: 10vh;
        }

        textarea {
            height: 20vh;
        }

    }

</style>

<h2>Get in touch with me!</h2>
<form name="contact" method="POST" data-netlify="true">
    <p>
        <label for="Name">Name</label>
        <input type="text" id="name" name="name" />
    </p>
    <p>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
    </p>
    <p>
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
    </p>
    <p>
        <button type="submit">Send</button>
    </p>
</form>