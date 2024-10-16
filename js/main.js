/*
Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.

0. Determine (or switch) who the player is- "X" and prepare click for "X" display - Conditionals
0. Listen for click- Event Listener
0. Click should trigger game mechanics action

0. Game Mechanaics Action
- Checking if there is a winner (combinations) + draws
- If there is no winning combination, take the current user's click input- store in variable
- Display the player's input in the selected box - input.target.innerText = "X"

REPEAT UNTIL WINNER IS DECLARED


LISTEN FOR CLICK
- Event Listeners

WHO IS WHO
Declare players using objects - name, input (if user clicks on a div innerText with their corresponding letter)
- Only one player can go at a time (If it's one player's turn restrict the opposite player) - Conditionals
- The first click is 'X' then switches to 'O'; switches turns after every 1 click

PLAYING THE GAME
Take in one input at a time from each player - Event Listeners
- If the player of X selects a space it will be filled with a space of X - innerText
- If the player of O selects a space it will be filled with a space of O - innerText

HOW TO WIN
If there are 3 spaces that are filled end the game- for loop?
- Listen for who was the last player to complete the row/column
- Create conditionals for if a row or column is filled

Take the player's name (who entered the last space and completed the row) and display it in the DOM - console.log only
*/

// CLASS- Players 1 and 2
class Game {
    constructor(name, input, click) {
        this.name = name;
        this.input = input;
        this.click = click; // Who can click a cell; whose turn it is
    }

}

// INSTANTIATION- Storing Player 1 and 2 data in variables
let Player1 = new Game('Player 1', "X", true)
let Player2 = new Game('Player 2', "O", false)

// Player1.click = "X"
// Player2.click = "O"


// BOXES- store box
let cell1 = document.getElementById('cell1')
let cell2 = document.getElementById('cell2')
let cell3 = document.getElementById('cell3')

let currentPlayer = Player1.input

function switchPlayer(){
    // currentPlayer = ""

    // VALUE INPUTS- store the box value
let cellOneInput = document.getElementById('cell1').innerText;
let cellTwoInput = document.getElementById('cell2').innerText;
let cellThreeInput = document.getElementById('cell3').innerText;
let cellFourInput = document.getElementById('cell4').innerText;
let cellFiveInput = document.getElementById('cell5').innerText;
let cellSixInput = document.getElementById('cell6').innerText;
let cellSevenInput = document.getElementById('cell7').innerText;
let cellEightInput = document.getElementById('cell8').innerText;
let cellNineInput = document.getElementById('cell9').innerText;

    console.log("switchPlayer function is working")
    console.log(Player1.click)
    console.log(Player2.click)
    console.log(Player1.input)
    console.log(Player2.input)
    console.log(currentPlayer)
    console.log(Player1)
    console.log(Player2)

    if (((cellOneInput == "X") && (cellTwoInput == "X") && (cellThreeInput == "X")) || 
    ((cellFourInput == "X") && (cellFiveInput == "X") && (cellSixInput == "X")) || 
    ((cellSevenInput == "X") && (cellEightInput == "X") && (cellNineInput == "X")) ||
    
    ((cellOneInput == "X") && (cellFourInput == "X") && (cellSevenInput == "X")) || 
    ((cellTwoInput == "X") && (cellFiveInput == "X") && (cellEightInput == "X")) || 
    ((cellThreeInput == "X") && (cellSixInput == "X") && (cellNineInput == "X")) ||

    ((cellOneInput == "X") && (cellFiveInput == "X") && (cellNineInput == "X")) || 
    ((cellThreeInput == "X") && (cellFiveInput == "X") && (cellSevenInput == "X"))

    ){

        // No one goes because there is already a winner
        Player2.click = true; // Opposites = false
        Player1.click = false; // Opposites = false
        console.log("Player 1 Won")

    } else if (((cellOneInput == "O") && (cellTwoInput == "O") && (cellThreeInput == "O")) || 
    ((cellFourInput == "O") && (cellFiveInput == "O") && (cellSixInput == "O")) || 
    ((cellSevenInput == "O") && (cellEightInput == "O") && (cellNineInput == "O")) ||
    
    ((cellOneInput == "O") && (cellFourInput == "O") && (cellSevenInput == "O")) || 
    ((cellTwoInput == "O") && (cellFiveInput == "O") && (cellEightInput == "O")) || 
    ((cellThreeInput == "O") && (cellSixInput == "O") && (cellNineInput == "O")) ||

    ((cellOneInput == "O") && (cellFiveInput == "O") && (cellNineInput == "O")) || 
    ((cellThreeInput == "O") && (cellFiveInput == "O") && (cellSevenInput == "O"))){

        // No one goes because there is already a winner
        Player2.click = true; // Opposites = false
        Player1.click = false; // Opposites = false
        console.log("Player 2 Won")

    } else if (currentPlayer === Player1.input) {
        currentPlayer = Player2.input
        
        Player1.click = false;
        Player2.click = false; // this
        console.log(currentPlayer)
        console.log("Player O Turn")

    } else if (currentPlayer === Player2.input) {
        currentPlayer = Player1.input
        console.log("Player X Turn")

        Player2.click = true; // this
        Player1.click = true;

    } else {
        console.log('error- fix the checkWinning function')
    }

    /*
    else if (currentPlayer === Player1.input) {
        currentPlayer = Player2.input
        
        Player1.click = false;
        Player2.click = false; // this
        console.log(currentPlayer)
    } else {
        currentPlayer = Player1.input

        Player2.click = true; // this
        Player1.click = true;
    } 
    */
}

cell1.addEventListener('click', function(e) {

    let element = e.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell2.addEventListener('click', function(e2) {

    let element2 = e2.target

    console.log("cell 2 click working")

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element2.innerText = "X";

        switchPlayer()
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element2.innerText = "O";
        console.log("This is where the letter 'O' is printed");
        // Player2.click = false;

        switchPlayer()

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }

    // let winner = checkWinning();
})

cell3.addEventListener('click', function(e3) {

    let element3 = e3.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element3.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element3.innerText = "O";
        console.log("This is where the letter 'O' is printed");
        // Player2.click = false;

        switchPlayer()

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell4.addEventListener('click', function(e4) {

    let element4 = e4.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element4.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element4.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell5.addEventListener('click', function(e5) {

    let element5 = e5.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element5.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element5.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})


cell6.addEventListener('click', function(e6) {

    let element6 = e6.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element6.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element6.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell7.addEventListener('click', function(e7) {

    let element7 = e7.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element7.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element7.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell8.addEventListener('click', function(e8) {

    let element8 = e8.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element8.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element8.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})

cell9.addEventListener('click', function(e9) {

    let element9 = e9.target

    console.log("cell 1 click working")

    // let winner = checkWinning();

    // Determine current Player and allowed input
    // Player1.input == "X"
    if ((Player1.click === true) && (currentPlayer === Player1.input)) {
        console.log("This is where the letter 'X' is printed");

        element9.innerText = "X";

        switchPlayer() // When to add a parameter to a function???
        // Player1.click = false;

        // currentPlayer = Player2.input;
        // Player2.click = true;

        // console.log(element)
        // console.log(Player1.click)
        // console.log(Player2.click)

    } else {
        element9.innerText = "O";
        console.log("This is where the letter 'O' is printed");

        switchPlayer()
        // Player2.click = false;

        // currentPlayer = Player1.input;
        // Player1.click = true;
    }
})


// EVENT LISTENERS
// document.getElementById('cell1').addEventListener('click', checkWinning)
// document.getElementById('cell2').addEventListener('click', checkWinning)
// document.getElementById('cell3').addEventListener('click', checkWinning)


// COMBO WINNINGS
// function checkWinning() {
//     if ((((cellOneInput == "X") && (cellTwoInput == "X") && (cellThreeInput == "X")) || 
//     ((cellFourInput == "X") && (cellFiveInput == "X") && (cellSixInput == "X")) || 
//     ((cellSevenInput == "X") && (cellEightInput == "X") && (cellNineInput == "X"))) ||
    
//     (((cellOneInput == "X") && (cellFourInput == "X") && (cellSevenInput == "X")) || 
//     ((cellTwoInput == "X") && (cellFiveInput == "X") && (cellEightInput == "X")) || 
//     ((cellThreeInput == "X") && (cellSixInput == "X") && (cellNineInput == "X"))) ||

//     (((cellOneInput == "X") && (cellFiveInput == "X") && (cellNineInput == "X")) || 
//     ((cellThreeInput == "X") && (cellFiveInput == "X") && (cellSevenInput == "X"))))
    
//     {

//         Player2.click = true; // Opposites = false
//         Player1.click = false; // Opposites = false
//         console.log("Player 1 Won")
//     } else { // Print results
//         if (Player1.click = true){
//             // document.getElementById('print').innerHTML = "Player X Turn"
//             console.log("Player X Turn")
//         } else if (Player2.click = false){
//             // document.getElementById('print').innerHTML = "Player O Turn"
//             console.log("Player O Turn")
//         } else {
//             console.log('error- finish the checkWinning function')
//         }
//     } 
// }




/*
c1 + c2 + c3
c4 + c5 + c6
c7 + c8 + c9
c1 + c4 + c7
c2 + c5 + c8
c3 + c6 + c9
c1 + c5 + c9
c3 + c5 + c7
*/













/*WHOSE TURN IS IT*/
// function whoseTurn() {
//     let playerInput = "X"

//     if (Game.input === "X") {
//         Player1.click = true
//         Player2.click = false
//     } else {
//         playerInput = Player2.input
//         Player2.click = true
//         Player1.click = false
//     }

//     console.log(playerInput)
// }



// function whatToEnter(click) {

//     if (cell1 == 'X')

//     if (Player1.click === true) {
//         cell1.innerText = "X"
//     } else {
        
//     }
// }
// // Player who selected a cell input this letter



// // Take Player 1 and store their user input into a let variable
// // Whichever cell was selected add input to display



// function checkWinning(click){

//     // Take out the id of it being clicked

//     console.log("working")

//     const clickedCell = click.target

//     if (clickedCell === true && Player1.click === true) {
//         // document.getElementById('cell1').innerText = "X"
//         clickedCell.target.innerText = "X"
//         console.log("here")
//     }

//     // if (cell1 = "x") {
//     //     cell1.innerText = 'x'
//     // } else {
//     //     cell1.innerText = 'o'
//     // }
// }


