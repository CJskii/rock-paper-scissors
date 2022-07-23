const myArray = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 0 
let winner = 0;
let playerPoint = 0;
let computerPoint = 0;

const buttons = document.querySelectorAll('button'); 
//button listener
buttons.forEach(button => button.addEventListener('click', logText, {
    capture:true
}))

function logText(e){
    playerSelection = this.textContent;
    return playRound(playerSelection); // calls playRound()
}

function playRound(playerSelection){  // function to play one round
    removeText(); 
    player = playerPrint(); 
    computer = computerPrint();
    if (player == "Rock" && computer == "Scissors"){
        winner = "You won! Rock beats Scissors"
        playerPoint++
        winnerPrint()        
        fiveRounds()
        return winner;
    } else if (player == "Paper" && computer == "Rock"){
        winner = "You won! Paper beats Scissors"
        playerPoint++
        winnerPrint()
        fiveRounds()
        return winner;
    } else if (player == "Scissors" && computer == "Paper"){
        winner = "You won! Scissors beats Paper"
        playerPoint++
        winnerPrint()
        fiveRounds()
        return winner;
    } else if (player === computer){
        winner = "Draw. Try again"
        winnerPrint()
        fiveRounds()
        return winner;
    } else {
        winner = "You lost! Better luck next time"
        computerPoint++
        winnerPrint()
        fiveRounds()
        return winner;
    }
}

function removeText(){ // function loop through paragraphs and remove 
    const paragraphs = document.querySelectorAll('p')
        paragraphs.forEach(function(paragraph){
        if (paragraph.textContent) { // remove if paragraph has text content
        paragraph.remove()
    }
        });
        const headers = document.querySelectorAll('h1, h2')
        headers.forEach(function(header){
        if (header.textContent) { // remove if paragraph has text content
        header.remove()
    }
        });
}

function playerPrint(){ // function to print player selection in document
    let player = playerSelection
    const output = document.querySelector('#output') 
    const playerPrint = document.createElement('p')
    playerPrint.setAttribute('id', '#player')
    playerPrint.setAttribute('class', 'h5 p-1')
    playerPrint.setAttribute('data-aos', 'fade-left')
    playerPrint.textContent = `Your choice: ${player}`
    output.appendChild(playerPrint);
    return player;
}

function computerPrint(){ // function to print computer selection in document
    let computer = computerPlay()
    const output = document.querySelector('#output')
    const computerPrint = document.createElement('p')
    computerPrint.setAttribute('id', '#computer')
    computerPrint.setAttribute('class', 'h5 p-1')
    computerPrint.setAttribute('data-aos', 'fade-right')
    computerPrint.setAttribute('data-aos-delay', '300')
    computerPrint.textContent = `Computer choice: ${computer}`
    output.appendChild(computerPrint);
    return computer;
}

function computerPlay() { // function for computerSelection
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function winnerPrint(){ // function to print winner outcome in document
    const output = document.querySelector('#output')
    const winnerPrint = document.createElement('p')
    winnerPrint.setAttribute('id', '#outcome')
    winnerPrint.setAttribute('class', 'h4 p-1')
    winnerPrint.setAttribute('data-aos', 'fade-up')
    winnerPrint.setAttribute('data-aos-delay', '600')
    winnerPrint.textContent = `${winner}`
    output.appendChild(winnerPrint)
    return winner;
}

function scorePrint(){
    removeScore()
    const score = document.querySelector('#score')
    const playerScore = document.createElement('h5')
    const computerScore = document.createElement('h5')
    playerScore.setAttribute('class', 'px-3 mx-3')
    playerScore.textContent = `Player: ${playerPoint}`
    score.appendChild(playerScore)
    computerScore.textContent = `Computer: ${computerPoint}`
    computerScore.setAttribute('class', 'px-3 mx-4')
    score.appendChild(computerScore)
}

function removeScore(){
    const headers = document.querySelectorAll('h5')
        headers.forEach(function(header){
        if (header.textContent) { // remove if header has text content
        header.remove()
    }
        });
}

function fiveRounds(){ // function to print winner of five rounds
    scorePrint()
    if (playerPoint == 5){ // points condition
        removeText()
        const output = document.querySelector('#output')
        const fivePrint = document.createElement('p')    
        fivePrint.textContent = "You have won!" 
        fivePrint.setAttribute('id', 'winner-5')
        fivePrint.setAttribute('class', 'h1 text-center p-4')
        output.appendChild(fivePrint)
        playerPoint = 0;
        computerPoint = 0;
        return;
    } else if (computerPoint == 5){ // points condition
        removeText()
        const output = document.querySelector('#output')
        const fivePrint = document.createElement('p')
        fivePrint.textContent = "You have Lost!" 
        fivePrint.setAttribute('id', 'winner-5')
        fivePrint.setAttribute('class', 'h1 text-center p-4')
        output.appendChild(fivePrint);
        computerPoint = 0;
        playerPoint = 0;
        return;
    }
}

