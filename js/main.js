let currentPlayer = "X";

// Select all the squares
let squareDivs = document.querySelectorAll("#square"); // Will return a NodeList
squareDivs = Array.from(squareDivs); // Convert NodeList into an array

// Add event listener to all the squares
squareDivs.forEach(e => {
  e.addEventListener('click', () => {

    // Check if the cell already has innerText. If it does, it means the square has already been selected.
    if (e.innerText != "") {
      return;
    }

    // Place the current player's symbol in the clicked square
    e.innerText = currentPlayer;

    // Initialize a new instance of the GameBoard class
    const gameBoard = new GameBoard();

    // Check for a draw or a winner after the player's move
    gameBoard.checkDraw();
    gameBoard.checkForWin();

    // Change the player's turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";

  });
});

// Define the GameBoard class
class GameBoard {

  // Method to check for a draw
  checkDraw() {
    let draw = squareDivs.every(e => e.innerText === "X" || e.innerText === "O");
    if (draw) {
      document.querySelector(".winnerMessage").innerText = `It is a tie!`; // Show tie message
    }
  }

  // Method to check for a winner
  checkForWin() {
    // List of all possible winning combinations
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    // Check each winning combination
    winCombinations.forEach(combination => {
      const [a, b, c] = combination;
      if (squareDivs[a].innerText === currentPlayer &&
          squareDivs[b].innerText === currentPlayer &&
          squareDivs[c].innerText === currentPlayer) {
        document.querySelector(".winnerMessage").innerText = `${currentPlayer} Wins YAAY!`; // Show winning message
      }
    });
  }

  // Method to restart the game
  restart() {
    window.location.reload(); // Reload the page to reset the game
  }
}

// Add event listener to the reset button
const gameBoard = new GameBoard();
document.querySelector('#reset').addEventListener('click', gameBoard.restart);
