
const boxes= document.querySelectorAll('td')//boxes is [td, td, td, td ...]
console.log(boxes)
for( let i=0; i < boxes.length; i++){
   
    boxes[i].addEventListener('click', draw) // this block go through each box and give each one a smurf

//console.log(boxes[i])- shows each box separately so we know the loop is working
}

let counter = 0 //this is a reset, we are starting the score at zero 
let drawIncrement = 0
function draw(eventObject){
    // eventObject.target.innerText = 'X'// this says go find my clicks trget and put a x in it
    console.log('EVENT OBJECT', eventObject.target)
    console.log('eventObject', eventObject )
    //eventObject.target.innerText = 'O'---> we do not actually want to functions, we would just make a condition
    console.log(eventObject.target.innerText)
  

    if(counter === 0){
        eventObject.target.innerText = 'X'
        console.log(boxes)
        counter++ // this is not the score- this is to keep track of whos turn it is
       stopClick(eventObject)
            
            
    }else if (counter === 1){
        eventObject.target.innerText = 'O'
        counter--// this is going to set us back to 0 meaning it is player 1s turn again
        stopClick(eventObject)
    }
    // else{
    //     document.querySelector('#messageToUser').innerText = 'Please select a valid box'
    // }
    
    whoWon(eventObject)//this goes here because we want it part of the draw function , but we want it to be the last part of it
    drawIncrement++
}


console.log(boxes[0])
function whoWon(eventObject){
    let userInput = eventObject.target.innerText
    let playerTurn = null

    if(userInput == 'X'){
        playerTurn =  'Player 1'
    }else{
        playerTurn = 'Player 2'
    }

    
    if(boxes[0].innerText == userInput && boxes[1].innerText == userInput &&  boxes[2].innerText == userInput){
        console.log(`${playerTurn} wins!`)
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }else if(boxes[3].innerText == userInput && boxes[4].innerText == userInput &&  boxes[5].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }else if(boxes[6].innerText == userInput && boxes[7].innerText == userInput &&  boxes[8].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }else if(boxes[0].innerText == userInput && boxes[3].innerText == userInput &&  boxes[6].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }else if(boxes[0].innerText == userInput && boxes[4].innerText == userInput &&  boxes[8].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }
    else if(boxes[2].innerText == userInput && boxes[5].innerText == userInput &&  boxes[8].innerText == userInput){
            document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
            removeAll()
        }else if(boxes[2].innerText == userInput && boxes[4].innerText == userInput &&  boxes[6].innerText == userInput){
    document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()//we put this on each so that every instance of "win" knows to stop the click
    }
    else if(boxes[0].innerText == userInput && boxes[4].innerText == userInput &&  boxes[8].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }
    else if(boxes[1].innerText == userInput && boxes[4].innerText == userInput &&  boxes[7].innerText == userInput){
        document.querySelector('#messageToUser').innerText = `${playerTurn} wins!`
        removeAll()
    }else if(drawIncrement == 8){
        document.querySelector('#messageToUser').innerText = `I'ts a draw!`
        removeAll()
    }
 
}
function removeAll(){//stops allowing input after a game has been won
   for( let i=0; i < boxes.length; i++){
        boxes[i].removeEventListener('click', draw)
}

}

function stopClick(eventObject){
eventObject.target.removeEventListener('click', draw)//stops user from changing selection

}


// we want ot target the boxes themselves
//eventObject.target for win, we need 123,456,789,147,258,369,159
//we want to have it check if z or o's in each box
//then we would want to tell it hey if td has been clicked by x in the winning box combos, then to say who won








//eventObject.target??

// function getO(){
//     console.log('byee')
//     query.Selector('td').innerText = '0'
// }

// player1 ={
//     player.name = 'name'
//     player.score = 'score'
