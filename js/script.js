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
