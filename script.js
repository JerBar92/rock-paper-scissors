function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper or scissors: ");
  return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
