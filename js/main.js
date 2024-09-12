class Game {
    constructor() {
        this.cells = Array.from(document.querySelectorAll('.cell'))
        this.cells.forEach((cell) => cell.addEventListener('click', (click) => this.handleCellClick(click)))

        this.currentPlayer = '🍓'
        this.filledCells = 0
        this.gameOver = false

        this.gameStatus = document.querySelector('.gameStatus')
        this.gameStatus.innerText = 'First up:🍓'
    
        document.querySelector('button').addEventListener('click', () => {location.reload()})
    }

    handleCellClick = (click) => {
        if (this.gameOver || click.target.innerText !== '') {
            return
        }
    
        click.target.innerText = this.currentPlayer
        this.filledCells++
        this.checkWin()

        if (!this.gameOver) {
            this.checkDraw()
        }

        if (!this.gameOver) {
            if (this.currentPlayer === '🍓') {
                this.currentPlayer = '🫐'
            } 
            else {
                this.currentPlayer = '🍓'
            }
            this.gameStatus.innerText = `${this.currentPlayer}'s Turn`
        }
    }

    checkWin = () => {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]]
    
        for (let combo of winCombos) {
            if (this.cells[combo[0]].innerText &&
            this.cells[combo[0]].innerText === this.cells[combo[1]].innerText &&
            this.cells[combo[1]].innerText === this.cells[combo[2]].innerText) {
                this.gameStatus.innerText = `${this.currentPlayer} wins!`
                this.gameOver = true
                break
            }
        }
    }

    checkDraw = () => {
        if (this.filledCells === 9 && !this.gameOver) {
            this.gameStatus.innerText = "It's a Draw!"
            this.gameOver = true
        }
    }
}

const game = new Game()