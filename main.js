

let gameActive = true
let currentPlayer 
let currentGame= ['', '', '', '', '', '', '', '', '']
const winConditions =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let player1Score = 0
let player2Score=0
//Establishing the click count. This will help us establish player's turns
let clickCount= 0


document.querySelector('.restart-btn').addEventListener('click', newGame)

addingListeners()
function addingListeners(){
    document.querySelectorAll('.box').forEach(elem => {
    elem.addEventListener('click', handlePlay)
    })
}


//Game must be started
//Player 1 and Player 2 turns need to be established and switch turns
function handlePlay(e){
    console.log('hey')
    if (!e.target.classList.contains('backgroundForP1') && !e.target.classList.contains('backgroundForP2')){
        clickCount++     
        playerTurn(e)
        
    }
}

function playerTurn(event){
    let player
    let backgroundClass
    if (clickCount % 2 !== 0){
        currentPlayer = 'Dwight'
        player='Player 1 turn'
        backgroundClass = 'backgroundForP1'
    }else{
        currentPlayer='Jim'
        player='Player 2 turn'
        backgroundClass = 'backgroundForP2'
        
    }  
    currentGame[Number(event.target.id)] = currentPlayer
    console.log(clickCount, "Click Count")
    console.log(currentGame)
    showPlayerTurn(player)
    squareChosen(event,backgroundClass)
}

//display which players turn it is
function showPlayerTurn(player){
    document.querySelector('.placeToSeePlayerTurn').innerText= player 

}

// Must be able to show which box and have image appear
function squareChosen(e,backgroundClass){
        e.target.classList.add(backgroundClass)
        compareWin()
}

function compareWin(){
    for (let i=0; i<winConditions.length; i++){
        choice1=winConditions[i][0]
        choice2=winConditions[i][1]
        choice3=winConditions[i][2]
    
        if (currentGame[choice1]==currentGame[choice2] && currentGame[choice2]==currentGame[choice3] && currentGame[choice1]!==''){
            document.querySelector('.game-status').innerText= `${currentPlayer} Wins!`
            scoreCount()
            stopGame()
            }
        }
    }

function scoreCount(){
    if (currentPlayer == 'Dwight'){
        player1Score++
        
    }else{
        player2Score++
        
    }
    scoreDisplay()
}
//Keep track of wins
function scoreDisplay(){
    document.querySelector('.player1Score').innerText = player1Score
    document.querySelector('.player2Score').innerText = player2Score
}
function stopGame(){
    document.querySelectorAll('.box').forEach(elem => {
        elem.removeEventListener('click', handlePlay)
    })
}
//want to reset currentGame, click count and currentPlayer
function newGame(){
    addingListeners()
    currentGame= ['', '', '', '', '', '', '', '', '']
    clickCount=0
    document.querySelector('.game-status').innerText= ''
    document.querySelectorAll('.box').forEach(box=> {
        box.classList.remove('backgroundForP1', 'backgroundForP2')
    })
}
