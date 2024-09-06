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
  let choice = prompt("Choose rock, paper or scissors: ");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie!");
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
      } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie!");
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
      } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie!");
      }
      console.log(`Human score is ${humanScore}`);
      console.log(`Computer score is ${computerScore}`);
    }
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You win the game");
  } else if (humanScore < computerScore) {
    console.log("Computer win the game");
  } else {
    console.log("The game is a tie");
  }
}

playGame();
