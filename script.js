const myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}


console.log(computerPlay(myArray));