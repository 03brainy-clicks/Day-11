// global
let jokes = document.getElementById("joke");
// global

// function for getting data
async function joke() {
  let joke = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await joke.json();
  jokes.innerText = data.value;
}
joke();
// function for getting data
