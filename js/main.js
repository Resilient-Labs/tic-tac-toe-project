class TicTacToe {
  constructor() {
    this.currentPlayer = "X"; // Tracks the current player
    this.squareDivs = Array.from(document.querySelectorAll("#square")); // Convert NodeList to an array
    this.winnerMessage = document.querySelector(".winnerMessage"); // Message display
    this.init(); // Start the game by initializing event listeners
  }

  // Initialize event listeners for squares and reset button
  init() {
    // Add click event listeners to all squares
    this.squareDivs.forEach((square, index) => {
      square.addEventListener('click', () => this.handleTurn(square, index));
    });

    // Add event listener to the reset button
    document.querySelector('#reset').addEventListener('click', () => this.restart());
  }

  // Handle the turn when a square is clicked
  handleTurn(square, index) {
    // Prevent selecting an already filled square
    if (square.innerText !== "") return;

    // Place the current player's symbol in the square
    square.innerText = this.currentPlayer;

    // Check for a draw or a winner
    this.checkForWin();
    this.checkDraw();

    // Change the player's turn
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  // Check for a draw
  checkDraw() {
    const draw = this.squareDivs.every(square => square.innerText === "X" || square.innerText === "O");

    if (draw) {
      this.winnerMessage.innerText = `It is a tie!`;
    }
  }

  // Check for a winner
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

      if (this.squareDivs[a].innerText === this.currentPlayer &&
          this.squareDivs[b].innerText === this.currentPlayer &&
          this.squareDivs[c].innerText === this.currentPlayer) {
        this.winnerMessage.innerText = `${this.currentPlayer} Wins YAAY!`;
        this.disableBoard(); // Stop the game once there's a winner
      }
    });
  }

  // Disable the board when there's a winner
  disableBoard() {
    this.squareDivs.forEach(square => square.removeEventListener('click', this.handleTurn));
  }

  // Restart the game by reloading the page
  restart() {
    window.location.reload(); // Reload the page to reset the game
  }
}

// Start a new game
const game = new TicTacToe();
