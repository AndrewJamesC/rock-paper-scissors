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




// A function that plays the above function five times. Keeping score 
// after each round. After five rounds it displays the winner.

  function game() {
   // Round 1
   let playerSelection1 = "PaPEr"
   let computerSelection1 = getComputerChoice();
   let result1 = playRound(playerSelection1, computerSelection1);
   console.log("player chose " + playerSelection1);
   console.log("computer chose " + computerSelection1);
   console.log("Result " + result1);
   console.log("PLayer score " + playerScore)
   console.log("Computer score " + computerScore);

  }

  game();