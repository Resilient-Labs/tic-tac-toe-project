// STORE THE SQUARES IN THE BOARDGAME 
class TicTacToeBoard{
    constructor(squares){
      this.gameStatus = "Game On";
      this.currentPlayer = "x";
      this.squares = squares;
      this.combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
// LOOP STARTS AT 0 
      for (let i = 0; i < squares.length; i++){
// startTurn is a property of the class
    this.squares[i].addEventListener("click",this.startTurn)
    console.log (this.squares)
     }
}

// THE EVENT IS THE CLICK, WE START THE TURN FUNCTION AND EVENT PASSES THROUGH
    startTurn = (event) => {
    console.log (event.target.innerText)
    if (event.target.innerText.trim() == "" && this.gameStatus == "Game On") {
// ADDS X OR O OF THE SELECTED BOX THE PLAYER CLICKS ON
    event.target.innerText = this.currentPlayer;
// CHANGES THE PLAYER TURN
    this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
// CHANGES WHO'S TURN IT IS AT THE TOP OF THE GAME
    document.getElementById("player").innerText = this.currentPlayer.toUpperCase();
    }
  }
}

// RESET FUNCTION  
  let reset = document.getElementById('reset').addEventListener('click', newGame)

  function newGame() {
  for (let i = 0; i < squares.length; i++) {
  squares[i].innerHTML = "";
}
}

 // GRABBING THE BOX ELEMENTS FROM THE HTML
    const squares = document.getElementsByClassName('box');
    let ticTacToeBoard = new TicTacToeBoard(squares)

    squares.forEach (squares=>squares.addEventListener("click", ticTacToeBoard.startTurn))
  
// CHECK FOR WINNER - SHOW WINNER - CHECK FOR DRAW
    