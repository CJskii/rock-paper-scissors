const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 
const computerSelection = computerPlay();
let winner = 0;
let point = 0;


function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playerPrint(){ // function to print player selection in document
    let player = playerSelection
    const output = document.querySelector('#output') // target output div
    if (document.getElementById('#player') != null){
        document.getElementById('#player').remove();
    }    
    const playerPrint = document.createElement('p')
    playerPrint.setAttribute('id', '#player')
    playerPrint.setAttribute('class', 'h5 p-1')
    playerPrint.setAttribute('data-aos', 'fade-left')
    console.log(this.output)
    playerPrint.textContent = `Your choice: ${player}`
    output.appendChild(playerPrint);
    return player;
}

function computerPrint(){ // function to print computer selection in document
    let computer = computerPlay()
    const output = document.querySelector('#output')
    if (document.getElementById('#computer') != null){
        document.getElementById('#computer').remove();
    }    
    const computerPrint = document.createElement('p')
    computerPrint.setAttribute('id', '#computer')
    computerPrint.setAttribute('class', 'h5 p-1')
    computerPrint.setAttribute('data-aos', 'fade-right')
    computerPrint.setAttribute('data-aos-delay', '300')
    computerPrint.textContent = `Computer choice: ${computer}`
    output.appendChild(computerPrint);
    return computer;
}

function winnerPrint(){ // function to print winner outcome in document
    const output = document.querySelector('#output')
    const winnerPrint = document.createElement('p')
    if (document.getElementById('#outcome') != null){
        document.getElementById('#outcome').remove()
    }
    winnerPrint.setAttribute('id', '#outcome')
    winnerPrint.setAttribute('class', 'h4 p-1')
    winnerPrint.setAttribute('data-aos', 'fade-up')
    winnerPrint.setAttribute('data-aos-delay', '600')
    winnerPrint.textContent = `${winner}`
    output.appendChild(winnerPrint)
    return winner;
}


function playRound(playerSelection, computerSelection){
    
    player = playerPrint();
    computer = computerPrint();

    console.log("*Your choice: " + player) // prints in the console
    console.log("**Computer choice: " + computer); // prints in the console
    if (player == "Rock" && computer == "Scissors"){
        winner = "You won! Rock beats Scissors"
        winnerPrint()
        return winner;
    } else if (player == "Paper" && computer == "Rock"){
        winner = "You won! Paper beats Scissors"
        winnerPrint()
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        winner = "You won! Scissors beats Paper"
        winnerPrint()
        return winner;
    } else if (player === computer){
        winner = "Draw. Try again"
        winnerPrint()
        return winner;
    } else {
        winner = "You lose! Better luck next time"
        winnerPrint()
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