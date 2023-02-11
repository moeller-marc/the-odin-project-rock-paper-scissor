const score = document.querySelector("#score");
const outcomeField = document.querySelector("#outcomeField");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const scorePlayerInHtml = document.createElement("p");
const scoreComputerInHtml = document.createElement("p");

function scoreReset() {
  scorePlayerInHtml.textContent = "Points player: 0";
  scoreComputerInHtml.textContent = "Points computer: 0";

  score.appendChild(scorePlayerInHtml);
  score.appendChild(scoreComputerInHtml);
}
scoreReset();

function scoreUpdate(scorePlayer, scoreComputer) {
  scorePlayerInHtml.textContent = "Points Player: " + scorePlayer;
  scoreComputerInHtml.textContent = "Points computer: " + scoreComputer;

  score.appendChild(scorePlayerInHtml);
  score.appendChild(scoreComputerInHtml);
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
    scorePlayer = 0;
    scoreComputer = 0;
  }
  if (scoreComputer == 5) {
    walose = "You lost the game";
    scorePlayer = 0;
    scoreComputer = 0;
  } else {
    walose = "a game is ongoing";
  }
  return walose;
}
