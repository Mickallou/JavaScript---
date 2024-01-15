let arrRound = [];
let gameCounter;
let userCounter;

//Function (A)
// Reste the game and ready to play
//This does NOT start the game, you need to press a button to start button
function initGame() {
    // console.clear();
    gameCounter = userCounter = 0;
    arrRound = [];
    console.log('Initiating game...');
}

//Function (B)
function playRound(){
    //1: Create step
    const newStep = createStep();
    arrRound.push(newStep);
    console.log(newStep);

    // Determine that computer's turn finished, and waiti for user input
    //??
    userTurn();

}

function userTurn(){
    // Get input from user
    const inputUser = prompt("Please enter your guess:")

    // Compare user input with computer's input
    if (+inputUser === arrRound[0]){
        console.log('You guessed correctly!');
        initGame();
        // gameCounter++;
    } else {
        alert('You lose, Game Over!')
        initGame();
    }
}

//Function (C)
//1: Creates a random number from 1 to 4
//2: returns the result and/or the color
function createStep() {
return Math.floor(Math.random() * 4) + 1;
}

initGame();
document.getElementById('btnStart').addEventListener('click', playRound);