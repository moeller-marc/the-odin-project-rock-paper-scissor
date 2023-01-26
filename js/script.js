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

function play() {
  let scoreYou = 0;
  let scoreComputer = 0;
  let val = 0;
  while (scoreYou < 5 || scoreComputer < 5) {
    val = playOneRound();
    if (val == 2) {
      ++scoreComputer;
      console.log("you loose");
    }
    if (val == 1) {
      ++scoreYou;
      console.log("you win");
    }
    if (val == 0) {
      console.log("draw");
    }
    if (scoreYou == 5) {
      console.log("you won");
    }
    if (scoreComputer == 5) {
      console.log("you lost");
    }
  }
  return "thanks for playing";
}
