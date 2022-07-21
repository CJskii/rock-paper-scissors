const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 
const computerSelection = computerPlay();
let winner = 0;
let point = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playerPrint(){
    let player = playerSelection
    const output = document.querySelector('#output') // target output div
    const playerPrint = document.createElement('p')
    console.log(this.output)
    playerPrint.textContent = `Your choice: ${player}`
    output.appendChild(playerPrint);
    return player;
}

function computerPrint(){
    let computer = computerPlay()
    const output = document.querySelector('#output')
    const computerPrint = document.createElement('p')
    computerPrint.setAttribute('id', '#computer')
    computerPrint.textContent = `Computer choice: ${computer}`
    output.appendChild(computerPrint);
    return computer;
}


function clearPrint(){
    const output = document.querySelector('#output')
    const computer = document.querySelector('#computer')
    const player = document.querySelector('#player')
}

function playRound(playerSelection, computerSelection){
    player = playerPrint();
    computer = computerPrint();

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





function logText(e){
    console.log(this.textContent)
    playerSelection = this.textContent;
    return playRound(playerSelection);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', logText, {
    capture:true
}))





//game(); 

//playRound()


/*function game(){
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
        outcome = "You won!"
        console.log("Final outcome of 5 games: " + outcome);
    } else if (point < 0){
        outcome = "You lost!"
        console.log("Final outcome of 5 games: " + outcome);
    } else {
        outcome = "Draw. Try again!"
        console.log("Final outcome of 5 games: " + outcome);
    } 
}*/