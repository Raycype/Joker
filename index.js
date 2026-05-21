// "https://official-joke-api.appspot.com/random_joke"

let id = document.getElementById("id");
let wise = document.getElementById("wise");
let button = document.getElementById("btn");

async function getJoke() {
  try {
    let resin = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    //console.log(resin);
    let xavier = await resin.json();
    console.log(xavier);
    id.textContent = `joke # ${xavier.id}`;
    wise.textContent = `${xavier.setup} Answer: ${xavier.punchline}`;
  } catch (error) {
    wise.textContent =
      "Something is wrong somewhere! It's totally our fault, we'll fix it and get back to you.";
  }
}

getJoke();

button.addEventListener("click", getJoke);
