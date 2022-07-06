const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 //window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
//playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = computerPlay();
let winner = 0;
let point = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

//alert("Your selection is " + playerSelection);



function playRound(playerSelection, computerSelection){
    let player = playerSelection
        player = window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
        player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    let computer = myArray[Math.floor(Math.random() * myArray.length)]
    console.log("*Your choice: " + player) // prints in the console
    console.log("**Computer choice: " + computer); // prints in the console
    if (player == "Rock" && computer == "Scissors"){
        console.log("***You won! Rock beats Scissors")
        let winner = "Won"
        //console.log(winner);
        return winner;
    } else if (player == "Paper" && computer == "Rock"){
        console.log("***You won! Paper beats Scissors"); // prints in the console
        let winner = "Won"
        //console.log(winner);
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        console.log("***You won! Scissors beats Paper"); // prints in the console
        let winner = "Won"
        //console.log(winner);
        return winner;
    } else if (player === computer){
        console.log("***Draw. Try again"); // prints in the console
        let winner = "Draw"
        //console.log(winner);
        return winner;
    } else {
        console.log("***You lose! Better luck next time"); // prints in the console
        let winner = "Lost"
        //console.log(winner);
        return winner;
    }
}


//winner = playRound();
//console.log(winner)

//playRound(playerSelection, computerSelection); // plays game and prints output to console



 function game(){
    let point = 0;
    for (let i = 0; i < 5; i++ ){
        let winner = playRound();
        //let player = window.prompt("Input Rock, Paper or Scissors: "); // prompts user for input
        //player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
        //console.log("*Your choice: " + winner) // prints in the console
        //console.log("**Computer choice: " + computer); // prints in the console
        if (winner == "Won"){
            //output = playRound(playerSelection, computerSelection)
            //console.log("***You won! Congratulations"); // prints in the console
            //console.log(output);
            point++
            //console.log(point)
        } else if (winner == "Lost"){
            //output = playRound(playerSelection, computerSelection)
            //console.log("***You lose! Better luck next time"); // prints in the console
            //console.log(output)
            point--
            //console.log(point)
        } else if (winner == "Draw") {
            //output = playRound(playerSelection, computerSelection)
            //console.log("***Draw. Try again"); // prints in the console
            //console.log(output)
            point
            //console.log(point)
        }
    }   //console.log(point);
    let outcome
    if (point > 0){
        outcome = "Winner"
        console.log("Final outcome of 5 games: " + outcome);
    } else if (point < 0){
        outcome = "Loser"
        console.log("Final outcome of 5 games: " + outcome);
    } else {
        outcome = "Drawwwww"
        console.log("Final outcome of 5 games: " + outcome);
    } 
}

game(); 

//playRound()



/* Player Inputs a String 
Player click "play"
Computer play returns random array
Function to compare inputs
Print Rock beats scissors etc.
*/



//console.log(computerPlay("Paper"));