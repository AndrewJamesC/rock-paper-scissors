// A function for the computer's choice that randomly returns
// rock, paper, or scissors.

const rockPaperScissors = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    }

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// A function that plays a single round of rock, paper, scissors with
// a human player against the computer. Outputs a winner at the end.



function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) {
        return `You win ${playerSelection} beats ${computerSelection}!`
    } else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")) {
        return `You lose ${computerSelection} beats ${playerSelection}!`
    } else {
        return "It's a draw! Try again."
    }
}
const playerSelection = "PaPEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));