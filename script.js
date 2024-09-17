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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
  }
}

function displayPlayersChoice(playerSelection, computerSelection) {
  human.textContent = "You: " + playerSelection;
  computer.textContent = "Computer: " + computerSelection;
}

function displayPlayersResults() {
  coScore.textContent = "Computer Score: " + computerScore;
  yoScore.textContent = "Your Score: " + humanScore;
}

function finalResults() {
  if (humanScore === 5) {
    finalResult.textContent = "You Win!";
    results?.appendChild(finalResult);
  } else if (computerScore === 5) {
    finalResult.textContent = "You Lose!";
    results?.appendChild(finalResult);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  displayPlayersResults();
  displayPlayersChoice("", "");
  results?.removeChild(finalResult);
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const coScore = document.querySelector(".computerScore");
const yoScore = document.querySelector(".yourScore");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const results = document.querySelector(".finalMsg");
const newGame = document.querySelector(".newGame");
const finalResult = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

rock?.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  displayPlayersChoice("rock", computerSelection);
  displayPlayersResults();
  finalResults();
});
paper?.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
  displayPlayersChoice("paper", computerSelection);
  displayPlayersResults();
  finalResults();
});
scissors?.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
  displayPlayersChoice("scissors", computerSelection);
  displayPlayersResults();
  finalResults();
});

newGame?.addEventListener("click", resetGame);
