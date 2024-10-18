//there should be buttons
// - each button should be clickable
// - each button should have an id so that when that button is clicked i have a way of accessing it
//this is done in the DOM 


//there should be players
// - there are two possible players 'X' and '0'
// - each player should be able to play 
class Player{
  constructor(str) {
    this.letter = str; 
    this.score = 0; 
  }

  updateScore() {
    this.score++; 
  }

}

//there should be a board
//- the board should keep track of all the current plays
//- 
class Board{
  constructor() {
    this.board = new Array(9).fill(''); 
    this.win = false; 
  }

  //update the currentBoard with the id and player
  updateBoard(id, player) {
    this.board[id] = player; 
  }
  
  //a function that takes in nothing, and updates Board's win prop to true
  checkWin() {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
     
    //for each winning combo check if they are all strictly equal 
    //edge case: 
    winningConditions.forEach((combo) => {
      
      if (
        this.board[combo[0]] === this.board[combo[1]] &&
        this.board[combo[1]] === this.board[combo[2]] &&
        this.board[combo[0]] != ''
      ) {
        this.win = true;
      }
    });
  }
}

//there should be the game class itself 
//- there should be a way to switch the currentPlayer
//- there should be a way to checkWinner 
//- a way to end the game 
//- make all the buttons have an eventListener
class Game{
  constructor() {
    this.players = [new Player('X'), new Player('O')]; 
    this.scores = { 'X' : 0, 'O': 0 }
    this.gameBoard = new Board(); 
    // this.currPlayerIndex = 0; 
    this.currentPlayer = this.players[0]; 
  }

  //if the currPlayer was X switch to O and O switch to X
  switchPlayer() {
    
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
    
  }

  //apply an event listener on all the buttons
  applyEventListener(){
    const squares = document.querySelectorAll('.square'); 
    squares.forEach(square => square.addEventListener('click', (e) => this.handleClick(e)));
  }

  updateDOM(event){
    event.target.innerText = this.currentPlayer.letter;
  }
  
  updateDisplay() {
    document.querySelector('#X').innerText = this.players[0].score; 
    document.querySelector('#O').innerText = this.players[1].score; 
  }


  handleClick(e) {
    
    //grab the id of the clicked button 
    const id = e.target.id; 
    const index = id[id.length - 1];

    if (this.gameBoard.board[index] === '') {
      //update the board with the currentPlayer, 
      // update the dom and check win
      this.gameBoard.updateBoard(index, this.currentPlayer.letter);
      this.updateDOM(e); 
      this.gameBoard.checkWin(); 

      //if there is a win updatescore, updateDisplay and refresh
      if (this.gameBoard.win === true) {
        this.currentPlayer.updateScore(); 
        this.updateDisplay(); 
        this.refresh();
        this.gameBoard.win = false; 
      }
      if (this.gameBoard.board.every(spot => spot !== '')) {
        console.log('DRAW')
        this.refresh(); 
      }
       
      //switch player
      this.switchPlayer();
    }
  }

  refresh() {
    //loop through this.gameBoard and if there is something there 
    //query that thing from the dom and make it have nothing
    this.gameBoard.board.forEach((item, index) => {
      if (item !== '') {
        document.querySelector(`#square${index}`).innerText = ''; 
      }
    })
    this.gameBoard.board = Array(9).fill(""); 
    this.currentPlayer = this.players[0];
 }
}


const currGame = new Game(); 
currGame.applyEventListener(); 
//account for draws!  (done)
//find a way of integrating the player class? (done)
//have a seperate class for managing dom elements



