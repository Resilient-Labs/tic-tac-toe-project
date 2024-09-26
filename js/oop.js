class Game {
  constructor() {
    this.reset()
  }

  isValidMove(index) {
    return this.board[index] === undefined && !this.isWon ? true : false
  }

  fillBox(index) {
    if (this.isValidMove(index)) {
      this.board[index] = this.player
      this.player === 'x' ? this.player = 'o' : this.player = 'x'
      this.emptyBoxes = this.emptyBoxes - 1
      this.checkWin()
    }
  }

  checkWin() {
    for (let i = 0; i < this.winConditions.length; i++) {
      const boxOne = this.board[this.winConditions[i][0]]
      const boxTwo = this.board[this.winConditions[i][1]]
      const boxThree = this.board[this.winConditions[i][2]]

      if (boxOne && boxOne === boxTwo && boxTwo === boxThree) {
        this.isWon = true
        console.log(this.isWon)
      }
    }
  }

  reset() {
    this.board = new Array(9) 
    this.player = 'o'
    this.isWon = false
    this.emptyBoxes = 9
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