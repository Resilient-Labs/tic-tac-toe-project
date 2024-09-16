const playerEels = 'Eels'
const playerEscalators = 'Escalators'
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const boxes = document.querySelectorAll('[data-cell]')
const board = document.getElementById('mainboard')
const winMsg = document.getElementById('bottom')
const restart = document.getElementById('restart')
const winMsgText = document.getElementById('result')
const turnMsgText = document.getElementById('whoseTurn')
let isPlayerEscalatorsTurn = false

play()

restart.addEventListener('click', play)

//function to start the game and tell it's Eels turn at start

function play() {
	isPlayerEscalatorsTurn = false
	boxes.forEach(cell => {
		cell.classList.remove(playerEels)
		cell.classList.remove(playerEscalators)
		cell.removeEventListener('click', boxClick)
		cell.addEventListener('click', boxClick, { once: true })
	})
	winMsgText.innerText = "Winner gets a free Krabby Patty!"
  turnMsgText.innerText = "It's Eels turn"
}

//function to track the players by click, run the swap player function and change/say whose turn it is

function boxClick(e) {
	const box = e.target
	const currentPlayer = isPlayerEscalatorsTurn ? playerEscalators : playerEels
	putIcon(box, currentPlayer)
	if (checkWin(currentPlayer)) {
		stopGame(false)
	} else if (isNoWinner()) {
		stopGame(true)
	} else {
		swapTurns()
    turnMsgText.innerText = `It's ${isPlayerEscalatorsTurn ? "Escalators" : "Eels"} turn`
	}
}

//Sounds
function playSoundTie () {
	let barnacles = new Audio('sounds/barnacles.mp3');
	barnacles.play();
}
function playSoundWin () {
	let victory = new Audio('sounds/victory.mp3');
	victory.play();
}

//function to stop the game if there is a tie or someone wins

function stopGame(noWinner){
  if (noWinner){
    winMsgText.innerText = "Oh barnacles! There's no winner!"
    playSoundTie()
    Array.from(document.querySelectorAll('.box')).forEach(box => {
      box.removeEventListener('click', boxClick)
      return
    })
  } else {
    winMsgText.innerText = `${isPlayerEscalatorsTurn ? "Escalators" : "Eels"} wins!`
    playSoundWin()
    Array.from(document.querySelectorAll('.box')).forEach(box => {
      box.removeEventListener('click', boxClick)
      return
    })
  }
  winMsg.classList.add('show')
}

//function to calculate a tie

function isNoWinner() {
	return [...boxes].every(cell => {
		return cell.classList.contains(playerEels) || cell.classList.contains(playerEscalators)
	})
}

//function to put the icons in the boxes

function putIcon(cell, currentPlayer) {
	cell.classList.add(currentPlayer)
}

//function to go back and forth between the players

function swapTurns() {
	isPlayerEscalatorsTurn = !isPlayerEscalatorsTurn
}

//Function to check the winning combos

function checkWin(currentPlayer) {
	return winCombos.some(combination => {
		return combination.every(index => {
			return boxes[index].classList.contains(currentPlayer)
		})
	})
}

