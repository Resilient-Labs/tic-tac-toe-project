

// this figures out which box is clicked on
let clickCount = 0
let currentPlayer
let player1Score = 0
let player2Score = 0
let currentGame = ["","","","","","","","",""]
const winningCombonations = [
    [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

document.querySelector('#resetButton').addEventListener('click', playAgain)

addClick()

function addClick(){
    document.querySelectorAll('.box').forEach( box => {
        box.addEventListener('click', handlePlay)
    })
}

function handlePlay(event){
    if(!event.target.classList.contains('backgroundPlayer1') && !event.target.classList.contains('backgroundPlayer2') ){
        clickCount++
        
        playersTurn(event)
    }
}
// figure out whos turn is it
// switch turns



function playersTurn(event){
    let player
    let backgroundClass
    if(clickCount % 2 !== 0){
        currentPlayer = 'one'
        player = 'Player 2 turn'
        backgroundClass = 'backgroundPlayer1'
    }else{
        currentPlayer = 'two'
        player = 'Player 1 turn'
        backgroundClass = 'backgroundPlayer2'
    }
    
    currentGame[Number(event.target.id)] = currentPlayer
    console.log(currentGame)
    squareChosen(event,backgroundClass)
   displayPlayerTurn(player)
}

// how to show which square player chose
// // img appear on click
function squareChosen(e,backgroundClass){
        e.target.classList.add(backgroundClass)
    }
   

// how to display which players turn it is

function displayPlayerTurn(p){
    document.querySelector('#placetoseeplayerturn').innerText = p
    compareWin()
}

function compareWin(){
    for(let i = 0; i<winningCombonations.length;i++){
        choice1 = winningCombonations[i][0]
        choice2 = winningCombonations[i][1]
        choice3 = winningCombonations[i][2]

        if(currentGame[choice1] == currentGame[choice2] && currentGame[choice2] == currentGame[choice3] && currentGame[choice2] !== '' ){
            document.querySelector('#placetoseewinner').innerText = `Player ${currentPlayer} Wins!`
            
            // document.querySelector('#seeplayer1score').innerText = 
            
            stopGame()
            console.log(currentGame[choice1],currentGame[choice2],currentGame[choice3])
            scoreCount()
        }
    }
}

function scoreCount(){
    if(currentPlayer == 'one'){
        player1Score++
    }else{
        player2Score++
    }
    displayScore()
}

function displayScore(){
    document.querySelector('#seeplayer1score').innerText = player1Score
    document.querySelector('#seeplayer2score').innerText = player2Score
}

function stopGame(){
    document.querySelectorAll('.box').forEach( box => {
        box.removeEventListener('click', handlePlay)
    })
}


// click play again button 
// clear board
// clear player wins innerText
// want to reset currentGame, cliclCount and currentPlayer

function playAgain(){
    addClick()
    currentGame = ["","","","","","","","",""]
    clickCount = 0
    document.querySelector('#placetoseeplayerturn').innerText = 'Player 1 turn'
    document.querySelector('#placetoseewinner').innerText = ''
    document.querySelectorAll('.box').forEach(square => {
        square.classList.remove("backgroundPlayer1","backgroundPlayer2")
    })
}