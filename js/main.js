// Class Instance
const board = new Game()

// Query Selectors
const container = document.querySelector('#container')
const boxes = document.querySelectorAll('.box')
const reset = document.querySelector('#reset')
const message = document.querySelector('h3')

// Event Handler Callbacks
function fillBox(e) {
    const index = [...boxes].indexOf(e.target);
    if (e.target.className !== 'box' || !board.isValidMove(index)) return
    board.fillBox(index)
    e.target.innerText = board.player
    if (board.isWon || board.emptyBoxes === 0) displayWinner()
}

function displayWinner() {
    console.log(board.emptyBoxes)
    if(board.isWon === false) {
        message.innerText = 'It\'s a tie'
        for (let box of boxes) {
            box.style.backgroundColor = 'orange'
        }
    }else if(board.player === 'x'){
        message.innerText = 'Player one won' 
        for (let box of boxes) {
            box.style.backgroundColor = 'orange'
        }
    }else{
        message.innerText = 'Player two won'
        for (let box of boxes) {
            box.style.backgroundColor = 'orange'
        }
    }
}

function resetGame() {
    board.reset()
    for (let box of boxes) {
        box.innerText = ''
        message.innerText = ''
        box.style.backgroundColor = 'white'
    }
}

// Attach Event Listeners
container.addEventListener('click', fillBox)
reset.addEventListener('click', resetGame)
