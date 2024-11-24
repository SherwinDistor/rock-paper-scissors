// Set player and computer score
let humanScore = 0;
let computerScore = 0;

// Get random computer choice
let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "Rock"
    } else if (computerChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice());

// Get player choice
let getHumanChoice = prompt("Rock, Paper, or Scissors?");

console.log(getHumanChoice);

// Evaluate who the winner is
//     increase score count
