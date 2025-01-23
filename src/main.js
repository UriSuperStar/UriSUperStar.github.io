let meContainer = document.querySelector(".me");
let counter = 0;

let comingSoonText = document.querySelector(".container p");

let view = document.querySelector(".container");
let scoreElement = document.querySelector(".score");

meContainer.addEventListener("click", () => {
  counter++;
  if(counter >= 3) {
    document.querySelector(".me a").href = "#";
    document.querySelector(".me a").target = "_self";

    meContainer.style = `transform: scale(${counter});`;
    comingSoonText.innerText = "EITA!!";

    document.title = "EITA!";
  }

  if(counter >= 20) {
    comingSoonText.innerText = "CHEGA!!";
    meContainer.style = `transform: scale(1);`;
    meContainer.style = ` top: ${Math.floor(Math.random() * view.offsetHeight ) - 50}px;
    left: ${Math.floor(Math.random() * view.offsetWidth )- 50}px`;

    document.title = "CHEGA!";
  }

  if(counter >= 30) {
    comingSoonText.innerText = ">:c";
    scoreElement.classList.add("score-appear");
    scoreElement.innerHTML = `SCORE: ${counter}`;

    document.title = ">:c";
  }

  if(counter === 69) {
    comingSoonText.innerText = "EITA BIXO";
    document.title = "EITA BIXO";
  }

  if(counter >= 70) {
    comingSoonText.innerText = "URI CLICKER!!";
    document.title = "URI CLICKER!!";
  }

  if(counter >= 100) {
    comingSoonText.innerText = "🎉Parabéens!🥳";
    document.title = "Parabéens!";
  }

  console.log(counter);
});