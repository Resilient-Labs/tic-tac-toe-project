// Create a two player Tic-Tac-Toe game. 
// users should be able to click to place their X or OS
//     after every click auto switch players
//     click places x or o 
//       alert if x or o is already there
//       cant click if there is a winner
// tell who wins 
//    3 in a row in any direction of xs or o's
//     //vertical/horizontal/diagonal
//   if all cards are filled and theres no winner= TIE
//   announce winner or tie in DOM
// button to reset the game
// keep track of score & display in DOM *OPTIONAL*
// keep track & display in DOM of whose turn it is *OPTIONAL*
// make the game as OOP as possible.

//PREP
//parameters
//result
// document.querySelector('.box').addEventListener( 'click', )

// CLear and Results
const button = document.querySelector('#clear')
const result = document.querySelector('#result')
//Boxes
const box1 = document.querySelector('#one')
const box2 = document.querySelector('#two')
const box3 = document.querySelector('#three')
const box4 = document.querySelector('#four')
const box5 = document.querySelector('#five')
const box6 = document.querySelector('#six')
const box7 = document.querySelector('#seven')
const box8 = document.querySelector('#eight')
const box9 = document.querySelector('#nine')
const boxAll = document.querySelector('.container')

//The goal is to create objects
//objects for game

class Game {
    constructor( name, p1, p2) {
        this.name = name,
        this.player1 = p1,
        this.player2 = p2,
        this.player = p1
    }
    playerTurn() {
        //
        if( this.player === this.player1) {
            this.player = this.player2
        } else if ( this.player === this.player2) {
            this.player = this.player1
        }
    }

    placeMarker() {
        console.log(this.player)
        if( this.player === this.player1) {  //when this.player is equal to this.player1 then it will return 'X'
            return 'X'
        } else if (this.player === this.player2) { //when this.player is equal to this.player2 then it will return 'O'
            return 'O'
        }
    }

    checkWhoWon() {
            // Checking and comparing each text
        if (
          box1.innerText === "X" &&
          box2.innerText === "X" &&
          box3.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box4.innerText === "X" &&
          box5.innerText === "X" &&
          box6.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box7.innerText === "X" &&
          box8.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box1.innerText === "X" &&
          box4.innerText === "X" &&
          box7.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box2.innerText === "X" &&
          box5.innerText === "X" &&
          box8.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box3.innerText === "X" &&
          box6.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box1.innerText === "X" &&
          box5.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box3.innerText === "X" &&
          box6.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        }

        if (
          box1.innerText === "O" &&
          box2.innerText === "O" &&
          box3.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box4.innerText === "O" &&
          box5.innerText === "O" &&
          box6.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box7.innerText === "O" &&
          box8.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box1.innerText === "O" &&
          box4.innerText === "O" &&
          box7.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box2.innerText === "O" &&
          box5.innerText === "O" &&
          box8.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box3.innerText === "O" &&
          box5.innerText === "O" &&
          box7.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box1.innerText === "O" &&
          box5.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box3.innerText === "O" &&
          box6.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        }
        
    }

    refresh() {
        box1.innerText = "";
        box2.innerText = "";
        box3.innerText = "";
        box4.innerText = "";
        box5.innerText = "";
        box6.innerText = "";
        box7.innerText = "";
        box8.innerText = "";
        box9.innerText = "";
        result.innerText = "";
     }
}

let tic = new Game('Tic Tac Toe', 'Dan', 'Alexa')

function firstMove(e) {
  console.log(e)
    e.preventDefault()
    if (e.target.innerText === ''){
    e.target.innerText = tic.placeMarker() // It will prints the return from the placeMarker() method
    tic.playerTurn() // changes the turn whenever it is called and also determines what marker is gonna be placed
    tic.checkWhoWon()
    }
}

function clearGame() {
    tic.refresh()
    tic.playerTurn()
}

button.addEventListener("click", clearGame);
boxAll.addEventListener('click', firstMove)