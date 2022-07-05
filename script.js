const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = computerPlay();



function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

alert("Your selection is " + playerSelection);

//console.log(computerSelection);


function playRound(playerSelection, computerSelection){
    console.log("Your choice: " + playerSelection)
    console.log("Computer choice: " + computerSelection);
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You won! Rock beats Scissors")
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You won! Paper beats Scissors");
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You won! Scissors beats Paper");
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (playerSelection === computerSelection){
        console.log("Draw. Try again");
        let winner = "Draw"
        alert("Game " + winner);
        return winner;
    } else {
        console.log("You lose! Better luck next time");
        let winner = "Lost"
        alert("Game " + winner);
        return winner;
    }
}


playRound(playerSelection, computerSelection); // plays game and prints output to console


/*

console.log(playRound(playerSelection, computerSelection));

 function game(){

}

/* Player Inputs a String 
Player click "play"
Computer play returns random array
Function to compare inputs
Print Rock beats scissors etc.
*/



//console.log(computerPlay("Paper"));