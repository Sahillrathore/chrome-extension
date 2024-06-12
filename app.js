const joke = document.querySelector(".my-p");

const getJoke = async () => {
    try {
        const apiReq = await fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then(data => joke.innerHTML = data.value)
    }
    catch(err) {
        console.log(err);
    }
}

window.addEventListener("load", ()=>{
    getJoke();
})