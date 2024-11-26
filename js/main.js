// Create an instance of the game
const game = new TicTacToe();

// Query Selectors
const container = document.querySelector("#gameContainer");
const restartButton = document.querySelector(".gameRestart");
const boxes = document.querySelectorAll(".box");
const gameStatus = document.querySelector(".gameStatus");
const playerTurn = document.querySelector('.playerTurn')

// Event Listeners Callback functions
function fillBox(e) {
  const index = [...boxes].indexOf(e.target);
  if (e.target.className === "box" && game.isValidMove(index))  {
    e.target.textContent = game.player;
    game.playerMove(index);
    // If the game is won, set the game status to whoever won
    if (game.isWon){
      gameStatus.innerText = game.player === "X" ? (game.player = "Player 1 has won") : (game.player = "Player 2 has won"); 
      
    }
    if (!game.isWon && game.counter === 9){
      gameStatus.innerText = `There has been a draw`
    }
    if (game.counter % 2 === 0 || game.counter == 0){
      playerTurn.innerText = `Go: Player 1`
    }
    else{
      playerTurn.innerText = `Go: Player 2`
    }
  }
    if (game.isWon || game.counter === 9){
      playerTurn.innerText = `Please click restart game`
    }
}

function restartGame() {
  for (box of boxes ){
    box.innerText = ''
    gameStatus.innerText = ''
    game.counter = 0;
    playerTurn.innerText = 'Go: Player 1'

    
  }
  game.restartGame()
  console.log(restartGame)
}

// Attach Event Handlers
container.addEventListener("click", fillBox);
restartButton.addEventListener("click", restartGame);