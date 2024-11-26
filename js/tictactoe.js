class TicTacToe {
  constructor() {
    this.restartGame();
		this.counter = 0;
  }

  checkWin() {
    for (let condition of this.winConditions) {
      const box1 = this.board[condition[0]];
      const box2 = this.board[condition[1]];
      const box3 = this.board[condition[2]];
      if (box1 && box1 === box2 && box2 === box3) {
        this.isWon = true;
      }
    }
  }

  isValidMove(index) {
	// Don't let the user fill a box if:
	// 		1. it's already taken
	// 		2. the game is already won
    return this.board[index] || this.isWon ? false : true;
  }

  playerMove(index) {
    // Check if the move is valid (is the box taken or is the game already won)
    if (this.isValidMove(index)) {
      // fill in the board with the user's move
      this.board[index] = this.player;
      // Switch/Change over to the next person
      this.player === "X" ? (this.player = "O") : (this.player = "X");
      // Check if there's a win at the end of every turn
			this.counter++
      this.checkWin();
			

    }
		console.log(this.counter)
  }

  restartGame() {
    this.board = new Array(9);
    this.player = "O";
    this.isWon = false;
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }
}





