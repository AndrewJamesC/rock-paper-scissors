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


  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => [
   button.addEventListener("click", function (e) {
      console.log(e.target.id);
      let playerSelection = (e.target.id);
      function game() {
         let computerSelection = getComputerChoice();
         let result = playRound(playerSelection, computerSelection);
         console.log("player chose " + playerSelection);
         console.log("computer chose " + computerSelection);
         console.log("Result " + result);
         console.log("PLayer score " + playerScore);
         console.log("Computer score " + computerScore);
        };
        game();
   })
  ]);

  

   /*
   // Round 2
   let playerSelection2 = prompt("Type ROCK, PAPER or SCISSORS");
   let computerSelection2 = getComputerChoice();
   let result2 = playRound(playerSelection2, computerSelection2);
   console.log("player chose " + playerSelection2);
   console.log("computer chose " + computerSelection2);
   console.log("Result " + result2);
   console.log("PLayer score " + playerScore);
   console.log("Computer score " + computerScore);
  

  // Round 3
   let playerSelection3 = prompt("Type ROCK, PAPER or SCISSORS");
   let computerSelection3 = getComputerChoice();
   let result3 = playRound(playerSelection3, computerSelection3);
   console.log("player chose " + playerSelection3);
   console.log("computer chose " + computerSelection3);
   console.log("Result " + result3);
   console.log("PLayer score " + playerScore);
   console.log("Computer score " + computerScore);

   // Round 4
   let playerSelection4 = prompt("Type ROCK, PAPER or SCISSORS");
   let computerSelection4 = getComputerChoice();
   let result4 = playRound(playerSelection4, computerSelection4);
   console.log("player chose " + playerSelection4);
   console.log("computer chose " + computerSelection4);
   console.log("Result " + result4);
   console.log("Player score " + playerScore);
   console.log("Computer score " + computerScore);
  
   //Round 5
   let playerSelection5 = prompt("Type ROCK, PAPER or SCISSORS");
   let computerSelection5 = getComputerChoice();
   let result5 = playRound(playerSelection5, computerSelection5);
   console.log("player chose " + playerSelection5);
   console.log("computer chose " + computerSelection5);
   console.log("Result " + result5);
   console.log("Player score " + playerScore);
   console.log("Computer score " + computerScore);

   if (playerScore > computerScore) {
      console.log ("Player wins!")
   }
   else if (computerScore > playerScore){
      console.log("Computer wins!")
   }
   else {
      console.log("It's a draw!")
   }
  } */

