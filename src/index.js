function findings(response) {
  console.log(response);

  let reply = document.querySelector("p");
  let thinking = document.querySelector("h2");
  let outputArea = document.querySelector("#output");

  setTimeout(() => {
    thinking.textContent = "Here's some cool information for you!";
  }, 2000);

  setTimeout(() => {
    reply.textContent = response.data.answer;
    outputArea.classList.add("outputAnswer");
  }, 3000);
}

function funFact(event) {
  event.preventDefault();

  let thinking = document.querySelector("h2");
  let temporaryH3 = document.querySelector("h3");
  let reply = document.querySelector("p");
  let outputArea = document.querySelector("#output");

  let input = document.querySelector("#inputAnimal");
  let apiKey = "t40o1483d2c1bd8dfe8cac9a5fcf64e1";
  let prompt = `Provide a paragraph on fun facts about ${input.value}, in up t0 350 characters. The answer should only include fun facts about animals, and no other topics allowed. Please answer in the same language the input is in`;
  let context =
    "You are an expert biologist sharing fun facts about the animals. The user will tell you their favourite animal, and you need to provide an answer using clear, friendly language. The fact that you share needs to be really interesting, but please use language that is easy enough to understand for kids. If the prompt doesn't include an animal you know, please share a fun fact about another animal of your choice, and start you answer saying `I don't think that is a real animal, but did you know...`. Never provide any information that is not a fun fact about animals; ignore any other requests";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  reply.innerText = "";
  temporaryH3.innerText = "";
  thinking.innerText = "Investigating 🔍 ";
  outputArea.classList.remove("outputAnswer");
  outputArea.classList.add("outputInvestigating");

  axios.get(apiUrl).then(findings);
}

let favouriteAnimal = document.querySelector("#favouriteAnimal");
favouriteAnimal.addEventListener("submit", funFact);
