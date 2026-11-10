function findings() {
  let reply = document.querySelector("p");
  let thinking = document.querySelector("h2");
  let outputArea = document.querySelector("#output");

  setTimeout(() => {
    thinking.textContent = "Here's some cool information about dogs!";
    outputArea.style.height = "200px";
  }, 2000);

  setTimeout(() => {
    reply.textContent =
      " A dog's sense of smell is up to 100,000 to 1 million times more sensitive than a human's, and they have up to 300 million scent receptors compared to our 6 million.";
  }, 2200);
}

function funFact(event) {
  event.preventDefault();

  let thinking = document.querySelector("h2");
  let temporaryH3 = document.querySelector("h3");

  temporaryH3.innerText = "";
  thinking.innerText = "Searching...";
  findings();
}

let favouriteAnimal = document.querySelector("#favouriteAnimal");
favouriteAnimal.addEventListener("submit", funFact);
