const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 //window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
//playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

//alert("Your selection is " + playerSelection);



function playRound(playerSelection, computerSelection){
    let player = playerSelection
        player = window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
        player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    let computer = myArray[Math.floor(Math.random() * myArray.length)]
    console.log("Your choice: " + player)
    console.log("Computer choice: " + computer);
    if (player == "Rock" && computer == "Scissors"){
        console.log("You won! Rock beats Scissors")
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (player == "Paper" && computer == "Scissors"){
        console.log("You won! Paper beats Scissors");
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        console.log("You won! Scissors beats Paper");
        let winner = "Won"
        alert("Game " + winner);
        return winner;
    } else if (player === computer){
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


//playRound(playerSelection, computerSelection); // plays game and prints output to console

 function game(){
    for (let i = 0; i < 5; i++ ){
        playRound(playerSelection, computerSelection);
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