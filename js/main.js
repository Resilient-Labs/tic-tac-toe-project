//Make a table
//Add two players: Player 1 and Player 2
//Click on square and it be either X or O
//When player gets three in a row, they win!
//Print who won on the DOM

const boxes = document.querySelectorAll('td')
console.log(boxes)

document.querySelector('button').addEventListener('click', addPlayers)

function addPlayers(){

    let playerOneInput = document.querySelector('#playerOne').value
    let playerTwoInput = document.querySelector('#playerTwo').value
    document.querySelector('#playerOneName').innerText = playerOneInput
    document.querySelector('#playerTwoName').innerText = playerTwoInput
    playerOne = new Player(`${playerOneInput}`, 'X')
    playerTwo = new Player(`${playerTwoInput}`, 'O')
    console.log(playerOne)
    console.log(playerTwo)
}

let playerOne 
let playerTwo

for (let i = 0; i < boxes.length; i++) {
    // console.log(boxes[i]);
    boxes[i].addEventListener('click', placeALetter)
}


// document.querySelectorAll('td').addEventListener('click', placeALetter)


class Player {
    constructor(name, letter) {
        this.name = name;
        this.letter = letter;

    }


}





let count = 0



function placeALetter(eventObject) {
    // console.log(firstPlayer, secondPlayer)
    console.log(eventObject.target);
    // console.log('happy')

    if (count == 0) {
        
        console.log(count)
        eventObject.target.innerText = playerOne.letter
        count = count + 1;
        eventObject.target.removeEventListener('click', placeALetter)
        checkForWin(playerOne.letter, playerOne.name)
    } else if(count == 1) {
        
        console.log(count)
        eventObject.target.innerText = playerTwo.letter
        count = count - 1
        eventObject.target.removeEventListener('click', placeALetter)
        checkForWin(playerTwo.letter, playerTwo.name)
    }
}



    // const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];  
    function checkForWin(xOrO, playerName){
        if (boxes[0].innerText== xOrO && boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText || 
            boxes[3].innerText === xOrO && boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText ||  
            boxes[6].innerText=== xOrO  && boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText || 
            boxes[0].innerText=== xOrO && boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText ||
            boxes[1].innerText === xOrO && boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText ||
            boxes[2].innerText === xOrO && boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText ||
            boxes[0].innerText === xOrO && boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText || 
            boxes[2].innerText === xOrO && boxes[2].innerText ===  boxes[4].innerText &&  boxes[4].innerText === boxes[6].innerText){
                document.querySelector('.winner').innerText =  `${playerName} wins!`
            }
    }
    


            // Middle row
          // Bottom row
          // Left column
           // Middle column
          // Right column
           // Diagonal from top-left to bottom-right
          // Diagonal from top-right to bottom-left
    
//0, 1, and 2
// function placeALetter(eventObject) {
//     console.log(eventObject.target);
//     // console.log('happy')
//     eventObject.target.innerText = franceska.letter
// }
    

    
