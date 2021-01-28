// variables
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const startGame = document.querySelector(".startGame");
const newGame = document.querySelector(".newGame");
const pPlayer = document.querySelector(".pPlayer");
const pComputer = document.querySelector(".pComputer");
let finalResult = document.querySelector(".finalResult");
let iPElement = document.createElement("i");
let iCElement = document.createElement("i");
let computerChooses;
let playerChooses;
let choose;
startGame.addEventListener("click", (e) => {
  e.preventDefault();
  while (choose !== "ROCK" && choose !== "PAPER" && choose !== "SCISSORS") {
    choose = prompt(
      `Please choose between Rock, paper, scissors`
    ).toUpperCase();
  }
  if (choose === "ROCK") {
    playerChooses = "ROCK";
    iPElement.classList.add("far", "fa-hand-rock");
    pPlayer.appendChild(iPElement);
    computerRandom();
    if (computerChooses === "ROCK") {
      iCElement.classList.add("far", "fa-hand-rock");
      pAppend();
      gDraw();
    } else if (computerChooses === "PAPER") {
      gCom();
      iCElement.classList.add("far", "fa-hand-paper");
      pAppend();
    } else {
      iCElement.classList.add("far", "fa-hand-scissors");
      pAppend();
      gPla();
    }
  } else if (choose === "PAPER") {
    playerChooses = "PAPER";
    iPElement.classList.add("far", "fa-hand-paper");
    pPlayer.appendChild(iPElement);
    computerRandom();
    if (computerChooses === "PAPER") {
      iCElement.classList.add("far", "fa-hand-paper");
      pAppend();
      gDraw();
    } else if (computerChooses === "SCISSORS") {
      iCElement.classList.add("far", "fa-hand-scissors");
      pAppend();
      gCom();
    } else {
      iCElement.classList.add("far", "fa-hand-rock");
      pAppend();
      gPla();
    }
  } else if (choose === "SCISSORS") {
    playerChooses = "SCISSORS";
    iPElement.classList.add("far", "fa-hand-scissors");
    pPlayer.appendChild(iPElement);
    computerRandom();
    if (computerChooses === "SCISSORS") {
      iCElement.classList.add("far", "fa-hand-scissors");
      pAppend();
      gDraw();
    } else if (computerChooses === "ROCK") {
      iCElement.classList.add("far", "fa-hand-rock");
      pAppend();
      gCom();
    } else {
      iCElement.classList.add("far", "fa-hand-paper");
      pAppend();
      gPla();
    }
  }

  function computerRandom() {
    const computerChoose = Math.random();
    if (computerChoose < 0.34) {
      computerChooses = "ROCK";
      console.log(computerChooses);
      return computerChooses;
    } else if (computerChoose < 0.68) {
      computerChooses = "PAPER";
      console.log(computerChooses);
      return computerChooses;
    } else if (computerChoose < 1) {
      computerChooses = "SCISSORS";
      console.log(computerChooses);
      return computerChooses;
    }
  }
  startGame.setAttribute("disabled", true);
});
function gDraw() {
  finalResult.innerHTML = `We have a draw`;
}
function gCom() {
  finalResult.innerHTML = `Computer wins`;
}
function gPla() {
  finalResult.innerHTML = `Player wins`;
}
function pAppend() {
  pComputer.appendChild(iCElement);
}
newGame.addEventListener("click", () => {
  location.reload();
});
