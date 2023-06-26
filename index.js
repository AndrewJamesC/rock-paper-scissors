function getComputerChoice(arr){

let randomIndex = Math.floor(Math.random() * arr.length);
let computerChoice = arr[randomIndex];
return computerChoice;
}
let array = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(array));