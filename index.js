let realdata = ""
        let quatesData = ""
        let getNewQuotes = () => {
            let randomeNumber = Math.floor(Math.random() * 1643);
            quatesData = document.getElementById("quotes").innerText = realData[randomeNumber].text;
            document.getElementById("author").innerText = "by: " + realData[randomeNumber].author;
        }


        let tweetnow = () => {
            let tweetPost = `https://twitter.com/intent/tweet?text=${quatesData}`;
            window.open(tweetPost)
        }

        const getQuotes = async () => {
            let api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes()
            } catch (error) {

            }
        }
        document.getElementById("btn").addEventListener("click", getNewQuotes)
        getQuotes();
        document.getElementById("tweetme").addEventListener("click", tweetnow)
        document.getElementById("img").addEventListener('click',tweetnow)
