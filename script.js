const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = window.prompt("Input Rock, Paper or Scissors: ");
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = computerPlay();

alert("Your selection is " + playerSelection);

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}



console.log(computerSelection);

/*

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "Peper beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beats Paper";
    }
  }

console.log(playRound(Rock, Scissors));

function game(){

}

/* Player Inputs a String 
Player click "play"
Computer play returns random array
Function to compare inputs
Print Rock beats scissors etc.
*/



//console.log(computerPlay("Paper"));