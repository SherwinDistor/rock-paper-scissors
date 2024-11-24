// Set player and computer score
let humanScore = 0;
let computerScore = 0;

// Get random computer choice
let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Get player choice
let getHumanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

console.log(getHumanChoice);

// Evaluate who the winner is
function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer wins! Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Computer wins! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Computer wins! Rock beats Scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Player wins! Paper beats Rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Player wins! Scissors beats Paper.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Player wins! Rock beats Scissors."
    } else {
        return "It's a tie!"
    }
}

console.log(playRound(getHumanChoice, getComputerChoice()));

