function playOneRound(userChoice) {
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
  let scorePlayer = 0;
  let scoreComputer = 0;
  let val = 0;
  while (scorePlayer < 5 || scoreComputer < 5) {
    val = playOneRound();
    if (val == 2) {
      ++scoreComputer;
      console.log("You loose");
    }
    if (val == 1) {
      ++scorePlayer;
      console.log("You win");
    }
    if (val == 0) {
      console.log("draw");
    }
    if (scorePlayer == 5) {
      console.log("You won");
    }
    if (scoreComputer == 5) {
      console.log("You lost");
    }
  }
  return "thanks for playing";
}
