const score = document.querySelector("#score");
const outcomeField = document.querySelector("#outcomeField");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const scorePlayerInHtml = document.createElement("p");
const scoreComputerInHtml = document.createElement("p");
const gameStatus = document.createElement("p");
const winsPlayer = document.createElement("p");
const winsComputer = document.createElement("p");

winsPlayer.textContent = "wins player: 0";
winsComputer.textContent = "wins computer: 0";

score.appendChild(winsPlayer);
score.appendChild(winsComputer);

let winsOfPlayer = 0;
let winsOfComputer = 0;

let scorePlayer = 0;
let scoreComputer = 0;

function winUpdate(winner) {
  if (winner == "play") {
    winsOfPlayer++;
  }
  if (winner == "comp") {
    winsOfComputer++;
  }
  winsPlayer.textContent = "wins player: " + winsOfPlayer;
  winsComputer.textContent = "wins computer: " + winsOfComputer;

  score.appendChild(winsPlayer);
  score.appendChild(winsComputer);
}

function scoreReset() {
  scorePlayerInHtml.textContent = "Points player: 0";
  scoreComputerInHtml.textContent = "Points computer: 0";
  gameStatus.textContent = "no active game";

  score.appendChild(scorePlayerInHtml);
  score.appendChild(scoreComputerInHtml);
  score.appendChild(gameStatus);
  scoreComputer = 0;
  scorePlayer = 0;
}
scoreReset();

function scoreUpdate(scorePlayer, scoreComputer, outcome) {
  scorePlayerInHtml.textContent = "Points Player: " + scorePlayer;
  scoreComputerInHtml.textContent = "Points computer: " + scoreComputer;
  gameStatus.textContent = outcome;

  score.appendChild(scorePlayerInHtml);
  score.appendChild(scoreComputerInHtml);
  score.appendChild(gameStatus);
}

function outcomeMessage(out) {
  if (out == 0) {
    outcome = "draw";
  }
  if (out == 1) {
    outcome = "You win";
    scorePlayer++;
  }
  if (out == 2) {
    outcome = "You loose";
    scoreComputer++;
  }
  return outcome;
}

function endGame(scorePlayer, scoreComputer) {
  if (scorePlayer == 5) {
    walose = "You won the game";
    winUpdate("play");
    scoreReset();
  }
  if (scoreComputer == 5) {
    walose = "You lost the game";
    winUpdate("comp");
    scoreReset();
  } else {
    walose = "a game is ongoing";
  }
  return walose;
}

function playOneRound(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 3);

  // define win and loos conditions
  if (playerChoice == 0 && computerChoice == 0) {
    out = 0;
  }
  if (playerChoice == 0 && computerChoice == 1) {
    out = 1;
  }
  if (playerChoice == 0 && computerChoice == 2) {
    out = 2;
  }

  if (playerChoice == 1 && computerChoice == 0) {
    out = 2;
  }
  if (playerChoice == 1 && computerChoice == 1) {
    out = 0;
  }
  if (playerChoice == 1 && computerChoice == 2) {
    out = 1;
  }

  if (playerChoice == 2 && computerChoice == 0) {
    out = 1;
  }
  if (playerChoice == 2 && computerChoice == 1) {
    out = 2;
  }
  if (playerChoice == 2 && computerChoice == 2) {
    out = 0;
  }
  return out;
}

function play(playerChoice) {
  out = playOneRound(playerChoice);
  outcome = outcomeMessage(out);
  scoreUpdate(scorePlayer, scoreComputer, outcome);
  walose = endGame(scorePlayer, scoreComputer);
}

buttonRock.addEventListener("click", () => {
  play(0);
});

buttonPaper.addEventListener("click", () => {
  play(1);
});

buttonScissors.addEventListener("click", () => {
  play(2);
});
