// define var for manipulation of the scoreboard
const score = document.querySelector("#score");
const scoreComputerInHtml = document.querySelector("#scoreComputer");
const scorePlayerInHtml = document.querySelector("#scorePlayer");

// define var for manipulation of the outcome field
const outcomeField = document.querySelector("#outcomeField");

let outcome = "";
let scorePlayer = 0;
let scoreComputer = 0;
function playOneRound(userChoice) {
  let computerChoice = Math.floor(Math.random() * 3);

  // define win and loos conditions
  if (userChoice == 0 && computerChoice == 0) {
    out = 0;
  }
  if (userChoice == 0 && computerChoice == 1) {
    out = 1;
  }
  if (userChoice == 0 && computerChoice == 2) {
    out = 2;
  }

  if (userChoice == 1 && computerChoice == 0) {
    out = 2;
  }
  if (userChoice == 1 && computerChoice == 1) {
    out = 0;
  }
  if (userChoice == 1 && computerChoice == 2) {
    out = 1;
  }

  if (userChoice == 2 && computerChoice == 0) {
    out = 1;
  }
  if (userChoice == 2 && computerChoice == 1) {
    out = 2;
  }
  if (userChoice == 2 && computerChoice == 2) {
    out = 0;
  }

  // display lose/win/draw message
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

  scorePlayerInHtml.textContent = "Points Player: " + scorePlayer;
  scorePlayerInHtml.textContent = "Points computer: " + scoreComputer;

  // won/lost game message
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

// define var for manipulation of the scoreboard
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

// add event listener for buttons
// rock
buttonRock.addEventListener("click", () => {
  playOneRound(0);
});

// paper
buttonPaper.addEventListener("click", () => {
  playOneRound(1);
});

// scissors
buttonScissors.addEventListener("click", () => {
  playOneRound(2);
});
