<section>
    <h2 id="contact">Get in touch with me!</h2>
    <form name="contact" method="POST" data-netlify="true">
        <!--Hidden input field needed for form handling in Netlify-->
        <input type="hidden" name="form-name" value="contact" />
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
            <textarea
                id="message"
                name="message"
                placeholder="
        _      
      >(')____,
       (` =~~/
    ~^~^`---'~^~^~^"
            />
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
    button {
        text-align: center;
        font-size: 3vw;
    }

    input,
    textarea {
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
        h2 {
            font-size: 7vw;
            margin-top: 20vw;
        }

        input,
        textarea,
        button {
            font-size: 5vw;
        }

        input,
        textarea {
            width: 80vw;
            height: 10vh;
        }

        textarea {
            height: 20vh;
        }
    }
</style>
