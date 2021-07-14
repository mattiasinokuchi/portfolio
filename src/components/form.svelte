<section>
    <h2 id="contact">How can I help You?</h2>
    <form name="contact" method="POST" data-netlify="true">
        <!--Hidden input field needed for form handling in Netlify-->
        <input type="hidden" name="form-name" value="contact" />
        <p>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
        </p>
        <p>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
        </p>
        <p>
            <label for="message">Message</label>
            <textarea id="message" name="message" />
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
</section>

<style>
    section {
        height: 100vh;
    }

    h2 {
        font-size: 4vw;
        text-align: center;
        padding-top: 20vh;
    }

    form,
    input,
    button,
    textarea {
        text-align: center;
        font-size: 2vw;
    }

    input,
    textarea {
        width: 40vw;
        height: 5vh;
    }

    label {
        width: 10vw;
        display: inline-block;
        text-align: right;
    }

    input {
        width: 40vw;
        height: 5vh;
    }

    textarea {
        height: 20vh;
        width: 41vw;
    }

    @media (max-width: 800px) {
        label {
            display: block;
            margin: 0 auto;
            text-align: center;
        }

        h2 {
            font-size: 7vw;
            margin-top: 20vw;
        }

        label,
        input,
        textarea,
        button {
            font-size: 5vw;
        }

        label,
        input {
            width: 80vw;
        }

        input {
            height: 5vh;
        }

        textarea {
            height: 20vh;
        }

        textarea {
            width: 83vw;
        }
    }
</style>
