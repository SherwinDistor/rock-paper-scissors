// Declare variables from DOM
const btnChoice = document.querySelector("#btn-container");


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
let getHumanChoice = '';


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

// Game logic for playing 5 rounds
function playGame() {
        console.log(playRound(getHumanChoice, getComputerChoice()))
        console.log(humanScore)
        console.log(computerScore)

    if (humanScore === 5) {
        console.log(`Player wins with a score of ${humanScore}`)
    } else if (computerScore === 5) {
        console.log(`Computer wins with a score of ${computerScore}`)
    } else {
        console.log(`Keep playing until someone reaches 5 points!`)
    }
}

// Calling the playGame function
// playGame()


// Add event listener to btn-container
btnChoice.addEventListener('click', e => {
    if (e.target.matches("#rock")) {
        getHumanChoice = "rock";
    } else if (e.target.matches("paper")) {
        getHumanChoice = "paper";
    } else {
        getHumanChoice = "scissors";
    }

    playGame();
});

// User clicks button either rock paper or scissor
// Selection is recorded in a variable
// Play round is triggered