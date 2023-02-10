const score = document.querySelector("#score");
const scoreComputerInHtml = document.querySelector("#scoreComputer");
const scorePlayerInHtml = document.querySelector("#scorePlayer");
const outcomeField = document.querySelector("#outcomeField");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

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
}

function endGame(scorePlayer, scoreComputer) {
  if (scorePlayer == 5) {
    console.log("You won the game");
    scorePlayer = 0;
    scoreComputer = 0;
  }
  if (scoreComputer == 5) {
    console.log("You lost the game");
    scorePlayer = 0;
    scoreComputer = 0;
  }
}
