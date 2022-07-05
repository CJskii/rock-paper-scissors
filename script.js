const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 //window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
//playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = computerPlay();
let winner = 0;
function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

//alert("Your selection is " + playerSelection);



function playRound(playerSelection, computerSelection){
    let player = playerSelection
        player = window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
        player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    let computer = myArray[Math.floor(Math.random() * myArray.length)]
    //console.log("*Your choice: " + player) // prints in the console
    //console.log("**Computer choice: " + computer); // prints in the console
    if (player == "Rock" && computer == "Scissors"){
        console.log("***You won! Rock beats Scissors")
        let winner = "Won"
        //("Game " + winner);
        return winner;
    } else if (player == "Paper" && computer == "Scissors"){
        console.log("***You won! Paper beats Scissors"); // prints in the console
        let winner = "Won"
        //("Game " + winner);
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        console.log("***You won! Scissors beats Paper"); // prints in the console
        let winner = "Won"
        //("Game " + winner);
        return winner;
    } else if (player === computer){
        console.log("***Draw. Try again"); // prints in the console
        let winner = "Draw"
        //("Game " + winner);
        return winner;
    } else {
        console.log("***You lose! Better luck next time"); // prints in the console
        let winner = "Lost"
        //("Game " + winner);
        return winner;
    }
}


winner = playRound(playerSelection, computerSelection);
//console.log(winner)

//playRound(playerSelection, computerSelection); // plays game and prints output to console



 function game(){
    let output = playRound(playerSelection, computerSelection)
    for (let i = 0; i < 2; i++ ){
        if (winner == "Won"){
            output = playRound(playerSelection, computerSelection)
            console.log(output);
        } else if (winner = "Lost"){
            output = playRound(playerSelection, computerSelection)
            console.log(output)
        } else {
            output = playRound(playerSelection, computerSelection)
            console.log(output)
        }
    } 
}

game(); 



/* Player Inputs a String 
Player click "play"
Computer play returns random array
Function to compare inputs
Print Rock beats scissors etc.
*/



//console.log(computerPlay("Paper"));