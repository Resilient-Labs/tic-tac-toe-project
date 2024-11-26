// make spans clickable
// make spans display either X or O
// don't allow a box to be clicked twice
// don't allow a box to be 'unclicked'
// don't allow for clicks outside the grid
// display score board if possible :)
// make sure that all the letters display even when someone wins
// dipslay a message to say which palyer has won
// MAYBE IF I FEEL LIKE IT allow for the player one player two to be a input name of the players to make the game more personalized
// make a line cross through
/* needed for the spans: 
make them clickable 
make the cursor different 
make them unclickable after they have been clkicked */
// make resert button clickable
// empty string to not display anything until it's another player's turn

/* 
first: declare a variable that stores the return of an array of all the spans it finds in html
   
second: defining a loop that runs through the array length that isolates the elemnt in the array, then adding an event listener 'click' to every span that it runs thorugh

thrid: declare a variable counter and initialize the value to be 0

fourth: !!!make sure to pass the information from event listener to the turn function (!!that's how you pass the information around an eventListener to a function since the eventListener is outside function throught the ->eventObject<-) very important to console.log eventObject to see howw it's running in the console/ if it's printing onto the the console what your're clicking on

fith: create a condition that if the counter = 0 the value is X so it's X's turn O to play. increments by one so it can pass the turn onto the next player -> th'ats why the condition is set into the 'turn' function. smae goes for O, decrements by one so it can pass the turn onto the next player 

sixth: calling stopClick as to not allow the same box the be clicked twice (as per pseudo code). eventObject has to be present so the if stopClick function knows when to run/stop running

seventh: make sure to help the computer to run the turn fucntion and check every time who won by calling the winnerPlayer function at the end of the turn fucntion
*/
document.getElementById('reset').addEventListener('click', reset)
const gridBox = document.querySelectorAll('span') // targets all my spans and returns an array of all the spans it can find
console.log(gridBox);
for (let i = 0; i < gridBox.length; i++){ // looping through the array that has all the spans and attatching a click event to each element inside the array that was created by the querySelectorAll and stored inside the variable gridBox 
    gridBox[i].addEventListener('click', turn)// the function that is called by the click event is -> 'turn'!!!
    console.log(gridBox[i])
}
// study notes/reminders: first i is initialization where you want the loop to star ex:if i=3 the click event would start on my 2nd box | since it starts at 0 the click event starts on my first box

let counter = 0
let drawIncrementer = 0
function turn (eventObject){
    console.log('event object target', eventObject.target)     // logs what you're clicking on currently
   // shout out marqae!!this display who's turns it is in the DOM
 
    if(counter === 0){
        eventObject.target.innerText = 'X'// innerText is there so you can check it in the winnerPlayer function
        console.log(gridBox)
        counter++ // this keeps track of whos turn it is
       stopClick(eventObject)
            
            
      }else if (counter === 1){
        eventObject.target.innerText = 'O'// innerText is there so you can check it in the winnerPlayer function
        counter--// this is going to set us back to 0 meaning it is player 1s turn again
        stopClick(eventObject)
    } 
    winnerPlayer(eventObject)
    drawIncrementer++
}

/*first: call a fucntion to check who won with the conditions of the combinations of the elemnts in the array/ comparing the elements in the array and checking if the combinations are the assigned winning combinatios in the function, the parameter is eventObject to tie the turn function to the winner function

second: set the userInput to 'null' so it's empty to represent it having no value instead of an undefined variable (can cause issues in that case)

third: make sure to tell the computer which palyer is whihc. ->if userInput is X then playerTurn is the first player | if userInout is O or not X then playerTurn is the second player 

fourth: for the draw: in the turn function, the drawIncrement helps to keep track of how many turns it has been in the game, the drawInccrement was added at the end to see if all the boxes were filled to determine if there's been a draw (no winner found)| the ++: keeps track of how many turns have happened. | the incrementer is under winner so all the boxes have been clicked to check if there's actually been a draw. !!!place all these things in the right line to prevent errors.
*/
function winnerPlayer(eventObject){
    let userInput = eventObject.target.innerText
    let playerTurn = null

    if(userInput == 'X'){
        playerTurn = 'Player 1'
    } 
    else{
        playerTurn = 'Player 2'
    }
   
   if(gridBox[0].innerText == userInput && gridBox[1].innerText == userInput && gridBox[2].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()  // removes the click event from all the boxes once a winner is found
   }
   else if(gridBox[3].innerText == userInput && gridBox[4].innerText == userInput && gridBox[5].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[6].innerText == userInput && gridBox[7].innerText == userInput && gridBox[8].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[0].innerText == userInput && gridBox[3].innerText == userInput && gridBox[6].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[1].innerText == userInput && gridBox[4].innerText == userInput && gridBox[7].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[2].innerText == userInput && gridBox[5].innerText == userInput && gridBox[8].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[0].innerText == userInput && gridBox[4].innerText == userInput && gridBox[8].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if(gridBox[2].innerText == userInput && gridBox[4].innerText == userInput && gridBox[6].innerText == userInput){
    console.log(`${playerTurn} wins`)
    document.querySelector('.messageText').innerText = `${playerTurn} wins`
    removeAll()
   }
   else if (drawIncrementer == 8) {
       console.log('it\'s a draw')
       document.querySelector('.messageText').innerText = 'it\'s a draw'
    //    removeAll is not necessary here bcs if a draw is reached, we knnow that all the boxes have been clicked -> the stopClick takes care of it.
   }

}
// returns the game state to the beginning| tkaes out the innerText, adds the event listener back in, and puts the incrementer back to 0
function reset(){
    for (let i = 0; i < gridBox.length; i++){ 
        gridBox[i].innerText = ''
        gridBox[i].addEventListener('click', turn)
        console.log('BUTTON HERE' ,gridBox[i])
    }
    drawIncrementer = 0
}
/*stopClick is here to prevent the same box to be clicked again after it has already been clicked*/
function stopClick(eventObject){
        eventObject.target.removeEventListener('click', turn)
    
}
/* removeAll is here to stop all the squares to be clicked again. it is under all the if's   */
function removeAll(){
    for (let i = 0; i < gridBox.length; i++){
        gridBox[i].removeEventListener('click', turn)
    }
}
// reminder: console.log(5=='5') turns num to strg
// console.log(5==='5') is false bcs num is not strg

// eventObject always have .target





