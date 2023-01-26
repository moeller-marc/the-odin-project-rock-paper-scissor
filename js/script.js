// define starter score
let scoreYou = 0;
let scoreComputer = 0;

function getUserInput() {
  let userChoice = prompt("what do you chose");
  if (userChoice.toLowerCase() == "rock") {
    let userChoice = 0;
    return userChoice;
  }
  if (userChoice.toLowerCase() == "paper") {
    let userChoice = 1;
    return userChoice;
  }
  if (userChoice.toLowerCase() == "scissors") {
    let userChoice = 2;
    return userChoice;
  }
  return userChoice;
}

function playOneRound() {
  let userChoice = getUserInput();
  let computerChoice = Math.floor(Math.random() * 3);

  // define win and loos conditions
  if (userChoice == 0 && computerChoice == 0) {
    out = 0;
    return out;
  }
  if (userChoice == 0 && computerChoice == 1) {
    out = 1;
    return out;
  }
  if (userChoice == 0 && computerChoice == 2) {
    out = 2;
    return out;
  }

  if (userChoice == 1 && computerChoice == 0) {
    out = 2;
    return out;
  }
  if (userChoice == 1 && computerChoice == 1) {
    out = 0;
    return out;
  }
  if (userChoice == 1 && computerChoice == 2) {
    out = 1;
    return out;
  }

  if (userChoice == 2 && computerChoice == 0) {
    out = 1;
    return out;
  }
  if (userChoice == 2 && computerChoice == 1) {
    out = 2;
    return out;
  }
  if (userChoice == 2 && computerChoice == 2) {
    out = 0;
    return out;
  }
  return out;
}
