//PREP

//Parameters - 
//Return - return message of who won based on configurations in the game
//Examples - 
//Pseudo - click on a cell, then X or O appears, click on another cell, then the other variable appears
//
//place all of the boxes in one variable
const boxes = document.querySelectorAll('div')
//player variable
let playerOne = 'X'
//variable for button selection
const restarBtn = document.querySelector('#resetGame')
//variable for message
const messageMachine = document.querySelector('#resultOfWinner')

const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameOptions = ['', '', '', '', '', '', '', '', '']
let gamePlay = false;

startGame()

//make a loop for array to add an event listener to each array item

// for (let i=0; i<boxes.length;i++){
//     //put listener on array, then repeat
//     boxes[i].addEventListener('click', addAValue)
// }
//event object (whatever the event was gives us an object of info)
//this will add a variable to empty cell
// function addAValue(e) {
//     e.target.innerText = playerOneOption
//     // e.target.innerText = playerTwoOption
// }


//adds an event listener for each input element
// inputs.forEach(element => {
//     element.addEventListener('click', giveMeVariable)   
// });

// function giveMeVariable(){
//     document.querySelectorAll('input').value = 'X'
//     console.log('hey')
// }
startGame();
//function to start the game
function startGame() {
    //add an event listener to all elements in array
    boxes.forEach(el => el.addEventListener('click', cellClicked))
    //add event listener to restart button
    restarBtn.addEventListener('click', restartGame)
    //add a message for next player to play
    messageMachine.textContent = `${playerOne}'s turn!`
    //set the game to true so that it can be played
    gamePlay = true;
}


//fuction for when a cell is clicked
function cellClicked() {
    //create a variable for every individual cell
    const cellIndex = this.getAttribute('cellIndex')
    //if cell is full or game is not on, nothing will happen
    if (gameOptions[cellIndex] != "" || !gamePlay) {
        return;
    }

    //
    updateCell(this, cellIndex);
    checkWinner();

}
//function for updating a cell after it is clicked
function updateCell(cell, index) {
    gameOptions[index] = playerOne
    cell.textContent = playerOne

}
//function for changing player after previous player played
function changePlayer() {
    //conditional created to switch between players
    if (playerOne == 'X') {
        playerOne = 'O'
    } else {
        playerOne = 'X'
    }
    messageMachine.textContent = `${playerOne}'s turn!`
}
//function to check if there is a winner or a tie
function checkWinner() {
    //variable created to switch winner
    let winner = false;
    //want to iterate over all of the winning conditions
    for (let i = 0; i < winOptions.length; i++) {
        const condition = winOptions[i]
        const cellA = gameOptions[condition[0]];
        const cellB = gameOptions[condition[1]];
        const cellC = gameOptions[condition[2]];
        //create a conditional for if there is still any blank space
        if (cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        //create a conditional for winning combo
        if (cellA == cellB && cellB == cellC) {
            winner = true;
            break;
        }
    }
    //if running variable is set to true, message will display
    if (winner) {
        messageMachine.textContent = `${playerOne}'s wins!`
        running = false;
    } // if its a tie, make a message
    else if (!gameOptions.includes("")) {
        messageMachine.textContent = `Draw!`
        running = false;
    } //if still going, change player
    else {
        changePlayer()
    }

}
//function to put everything back to original screen once button is clicked
function restartGame() {
    playerOne = 'X';
    gameOptions = ['', '', '', '', '', '', '', '', ''];
    messageMachine.textContent = `${playerOne}'s turn!`
    boxes.forEach(boxes => boxes.textContent = '')
    running = true;
}