// Get random computer choice
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Rock"
    } else if (choice === 2) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

console.log(getComputerChoice())

// Get player choice



// Evaluate who the winner is
//     increase score count
