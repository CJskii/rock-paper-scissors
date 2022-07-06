const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 
const computerSelection = computerPlay();
let winner = 0;
let point = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

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
        return winner;
    } else if (player == "Paper" && computer == "Rock"){
        console.log("***You won! Paper beats Scissors"); // prints in the console
        let winner = "Won"
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        console.log("***You won! Scissors beats Paper"); // prints in the console
        let winner = "Won"
        return winner;
    } else if (player === computer){
        console.log("***Draw. Try again"); // prints in the console
        let winner = "Draw"
        return winner;
    } else {
        console.log("***You lose! Better luck next time"); // prints in the console
        let winner = "Lost"
        return winner;
    }
}

 function game(){
    let point = 0;
    for (let i = 0; i < 5; i++ ){
        let winner = playRound();
        if (winner == "Won"){
            point++
        } else if (winner == "Lost"){
            point--
        } else if (winner == "Draw") {
            point
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


