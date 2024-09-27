// Create a two player Tic-Tac-Toe game. 
// users should be able to click to place their X or O
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
        this.turnCounter = 0
    }
  count(){
      this.turnCounter++
      console.log(this.turnCounter)
      return this.turnCounter
    }
  
    playerTurn() {
          
        if( this.player === this.player1) {
            this.player = this.player2
            console.log(this.player)
        } else if ( this.player === this.player2) {
            this.player = this.player1
            console.log(this.player)
        }
    }
    placeMarker() {
       
        console.log(this.turnCounter)
        if( this.player === this.player1) { //when this.player is equal to this.player1 then it will return 'X'
            return 'X'
        } else if (this.player === this.player2) {
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
          box5.innerText === "X" &&
          box7.innerText === "X"
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
      
      this.tie()
        
    }
  
 clearGame() {
  // e.preventDefault()
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
  // this.result.innerText = "";
  // this.player = this.player1
   return this.turnCounter = 0
}
  
}



let tic = new Game('Tic Tac Toe', 'Dan', 'Alexa')

function firstMove(e) {
    e.preventDefault()
    if (e.target.innerText === ''){
    e.target.innerText = tic.placeMarker() // It will prints the return from the placeMarker() method
     tic.count()
    tic.playerTurn() // changes the turn whenever it is called and also determines what marker is gonna be placed
    tic.checkWhoWon()
  
    }  console.dir(tic)
}

boxAll.addEventListener('click', firstMove)
button.addEventListener("click", tic.clearGame);