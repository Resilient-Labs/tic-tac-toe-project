// create element for qSelector game status
const displayStatus = document.querySelector('.gameStatus')
const displayTurn = document.querySelector('.playerTurn')
//function that returns objetcs
const makePLayer = (name, score) => {
  return {
    name, 
    score
  };
};
// make player1 and make player2
let player1 = makePLayer('Player 1', 'O')
let player2 = makePLayer('Player 2', 'X' )
//counter
let counter = 0;
//win/draw messages
const winMessage1 = () => `${player1.name} is the winner!`
const winMessage2 = () => `${player2.name} is the winner!`
const drawMessage = () => `Game ended in a draw!`
const restartMessage = () => `Please Click Restart Game`
//event listerners
document.getElementById('gameContainer').addEventListener("click", playerMove)
document.querySelector('.gameRestart').addEventListener('click', handleRestartGame )
//function adds inner text to target from players object.
//counter++ for each iteration of loop
//run checkwin() function to alter the DOM
function playerMove(event) {
  event.target = document.querySelectorAll('box');
  if((event.target.innerText === player1.score ) || (event.target.innerText === player2.score)){
    return 
  } else{
    if(counter % 2 === 0){
      event.target.innerText = player1.score;
      displayTurn.innerHTML = `Go: ${player2.name}`
      
    }
    else{
      event.target.innerText = player2.score;
      displayTurn.innerHTML = `Go: ${player1.name}`
    }
    counter++
  }
  checkWin();
}
//the bane of my existence
function checkWin(){
let arr = document.querySelectorAll('.box')
if (displayStatus.innerText === winMessage1() || displayStatus.innerText === winMessage2() || displayStatus.innerText === drawMessage()){
  displayTurn.innerText = restartMessage();
  return;
  //Shoutout David Ney for fixing a bug in my code with the logic above
}
if (arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText == "O"){
    displayStatus.innerText = winMessage1();
}

else if (arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText == "X"){
    displayStatus.innerText = winMessage2();
}
else if (arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText == "X"){
displayStatus.innerText = winMessage2();
}

else if (arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText == "O"){
  displayStatus.innerText = winMessage1();
}

else if (arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText == "X"){
  displayStatus.innerText = winMessage2();
}

else if (counter === 9){
  displayStatus.innerText = drawMessage();
}
updateGame();
}
//Words can't describe how sorry I am for this logic

//function for restart button that removes inner text for all box class objects and restarts counter
function handleRestartGame() {
  document.querySelectorAll('.box').forEach(cell => cell.innerText = "");
  counter = 0;
  displayStatus.innerText = "";
  displayTurn.innerText = `Go: ${player1.name}`;
}
//function for changing DOM if the game result has been decided
function updateGame(){
  if(displayStatus.innerText == winMessage1() || displayStatus.innerText == winMessage2() || displayStatus.innerText == drawMessage()){
    displayTurn.innerText = restartMessage();
  }
}
        








