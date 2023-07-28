// A function for the computer's choice that randomly returns
// rock, paper, or scissors.

const rockPaperScissors = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    }


// A function that plays a single round of rock, paper, scissors with
// a human player against the computer. Outputs a winner at the end.

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) {
      playerScore = playerScore + 1
      return "playerWins"
    } else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")) {
      computerScore = computerScore + 1
      return "computerWins"
    } else {
       return "draw"
    }
}
const playerSelection = "PaPEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// A function that plays the above function five times. Keeping score 
// after each round. After five rounds it displays the winner.



function game() 
 
   
   console.log(playerScore);
   console.log(computerScore);


