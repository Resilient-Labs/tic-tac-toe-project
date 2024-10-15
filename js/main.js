// //TIC TAC TOE GAME

// //buld the whole game into an object somehow?

// //should work for two players

// //make a tic tac toe board and display it
// //allow player one to place an x on the board
// //after player one's turn ends, allow player two to place an o on the board
// //if player one gets 3 x's in a row, display player one wins
// //if player two gets 3 o's in a row, display player two wins
// //if neither player gets three in a row, show draw or tie

// //probably need click listeners on each tile

// //Grab all div elements
// const slotArray = document.querySelectorAll('div')
// console.log(slotArray)

// // //store each slot in a variable for future use

// const slot1 = slotArray[0]
// const slot2 = slotArray[1]
// const slot3 = slotArray[2]
// const slot4 = slotArray[3]
// const slot5 = slotArray[4]  
// const slot6 = slotArray[5]
// const slot7 = slotArray[6]
// const slot8 = slotArray[7]
// const slot9 = slotArray[8]

// // //add the event listener to each div element
// slotArray.forEach(element => element.addEventListener('click', takePlayerTurn))
// let playerTurn = 1
// let playerTurnDisplay = document.querySelector('span')
// // //event listener to reset game
// document.querySelector('button').addEventListener('click', resetGame)

// //EVENT REFERS TO THE CLICKED ELEMENT

// function takePlayerTurn(event) {
//     if(playerTurn === 1) {
//         placePiece(event, 'x')
//         blockSlot(event)
//         updatePlayerTurn(2)
//         checkForTie()
//         checkForWin('x', 'Player 1')

//     }else if(playerTurn === 2) {
//         placePiece(event, 'o')
//         blockSlot(event)
//         updatePlayerTurn(1)
//         checkForTie()
//         checkForWin('o', 'Player 2')
//     }
// }



// //NEED TO SOMEHOW UPDATE TO CHECK TO SEE WHAT BOX WAS CLICKED
// //pass in event to see what div was clicked on
// //parameter xOrO for reusability - can call and pass in x for p1, can call and pass in o for p2
// function placePiece(event, xOrO) {
//     if(event.target.classList.contains(`slot`)) {
//         event.target.innerText = xOrO
//     }
// }   

// //function to remove event listener after a slot is occupied
// function blockSlot(event) {
//     event.target.removeEventListener('click', takePlayerTurn)
// }

// //FUNCTION TO UPDATE PLAYER TURN
// //takes in a number to update turn
// function updatePlayerTurn(turn) {
//     playerTurn = turn
//     playerTurnDisplay.innerText = `It is now Player ${turn}'s Turn`
// }


// //NEED TO CHECK TO SEE IF SOMEONE WON AFTER EVERY PLACEMENT
// //WIN CONDITIONS (specified are same value): 
// //SLOT 1, 2, 3
// //SLOT 4, 5, 6
// //SLOT 7, 8, 9

// //SLOT 1, 4, 7
// //SLOT 2, 5, 8
// //SLOT 3, 6, 9

// //SLOT 1, 5, 9
// //SLOT 3, 5, 7

// function checkForWin(xOrO, player) {

//     if( //check horizontal win
//         slot1.innerText === xOrO && slot1.innerText === slot2.innerText && slot1.innerText === slot3.innerText ||
//         slot4.innerText === xOrO && slot4.innerText === slot5.innerText && slot4.innerText === slot6.innerText ||
//         slot7.innerText === xOrO && slot7.innerText === slot8.innerText && slot7.innerText === slot9.innerText ||
//         //check vertical win
//         slot1.innerText === xOrO && slot1.innerText === slot4.innerText && slot1.innerText === slot7.innerText ||
//         slot2.innerText === xOrO && slot2.innerText === slot5.innerText && slot2.innerText === slot8.innerText ||
//         slot3.innerText === xOrO && slot3.innerText === slot6.innerText && slot3.innerText === slot9.innerText ||
//         //check diagonal win
//         slot1.innerText === xOrO && slot1.innerText === slot5.innerText && slot1.innerText === slot9.innerText ||
//         slot3.innerText === xOrO && slot3.innerText === slot5.innerText && slot3.innerText === slot7.innerText
//     ) {
//          playerTurnDisplay.innerText = `${player} wins!`
//          //make sure that nothing else can be clicked after winning
//          slotArray.forEach(element => element.removeEventListener('click', takePlayerTurn))
//     }

// }



// //WRITE A FUNCTION TO CHECK FOR TIE
// //possibly use filter to check to see if all slots have innertext
// //use spread operator to put nodelist elements in an array
// function checkForTie() {
//     if( [...slotArray].filter(slot => slot.innerText).length === 9 ) {
//         playerTurnDisplay.innerText = 'TIE'
//     }
// }

// //function to reset game
// function resetGame() {
//     playerTurn = 1
//     playerTurnDisplay.innerText = `It is now Player ${playerTurn}'s Turn`
//     //give all slots event listener back when board is reset, so slots can be occupied again
//     slotArray.forEach(element => element.addEventListener('click', takePlayerTurn))
//     slotArray.forEach(element => element.innerText = '')
// }

//UPDATED TO BE MORE OBJECT ORIENTED

//Grab all div elements
const slotArray = document.querySelectorAll('div')
console.log(slotArray)
// slotArray.forEach(element => element.addEventListener('click', () => game.takePlayerTurn))

// document.querySelector('button').addEventListener('click', () => game.resetGame)


class TicTacToe {
    constructor() {
        this.playerTurn = 1
        this.playerTurnDisplay = document.querySelector('span')
        this.slot1 = slotArray[0]
        this.slot2 = slotArray[1]
        this.slot3 = slotArray[2]
        this.slot4 = slotArray[3]
        this.slot5 = slotArray[4]  
        this.slot6 = slotArray[5]
        this.slot7 = slotArray[6]
        this.slot8 = slotArray[7]
        this.slot9 = slotArray[8]
        this.bindTakePlayerTurn = this.takePlayerTurn.bind(this)
    }

    //initialize board
    initializeBoard() {
        slotArray.forEach(element => element.addEventListener('click', this.bindTakePlayerTurn))
        document.querySelector('button').addEventListener('click', this.resetGame.bind(this))
    }

    //take player turn

    takePlayerTurn(event) {
        if(this.playerTurn === 1) {
            this.placePiece(event, 'x')
            this.blockSlot(event)
            this.updatePlayerTurn(2)
            this.checkForTie()
            this.checkForWin('x', 'Player 1')
    
        }else if(this.playerTurn === 2) {
            this.placePiece(event, 'o')
            this.blockSlot(event)
            this.updatePlayerTurn(1)
            this.checkForTie()
            this.checkForWin('o', 'Player 2')
        }
    }

    //place piece
    placePiece(event, xOrO) {
        if(event.target.classList.contains('slot')) {
            event.target.innerText = xOrO
        }
    }   
    //block slot
    blockSlot(event) {
        event.target.removeEventListener('click', this.bindTakePlayerTurn)
    }
    //update turn
    updatePlayerTurn(turn) {
        this.playerTurn = turn
        this.playerTurnDisplay.innerText = `It is now Player ${turn}'s Turn`
    }
    //check for win
    checkForWin(xOrO, player) {

        if( //check horizontal win
            this.slot1.innerText === xOrO && this.slot1.innerText === this.slot2.innerText && this.slot1.innerText === this.slot3.innerText ||
            this.slot4.innerText === xOrO && this.slot4.innerText === this.slot5.innerText && this.slot4.innerText === this.slot6.innerText ||
            this.slot7.innerText === xOrO && this.slot7.innerText === this.slot8.innerText && this.slot7.innerText === this.slot9.innerText ||
            //check vertical win
            this.slot1.innerText === xOrO && this.slot1.innerText === this.slot4.innerText && this.slot1.innerText === this.slot7.innerText ||
            this.slot2.innerText === xOrO && this.slot2.innerText === this.slot5.innerText && this.slot2.innerText === this.slot8.innerText ||
            this.slot3.innerText === xOrO && this.slot3.innerText === this.slot6.innerText && this.slot3.innerText === this.slot9.innerText ||
            //check diagonal win
            this.slot1.innerText === xOrO && this.slot1.innerText === this.slot5.innerText && this.slot1.innerText === this.slot9.innerText ||
            this.slot3.innerText === xOrO && this.slot3.innerText === this.slot5.innerText && this.slot3.innerText === this.slot7.innerText
        ) {
             this.playerTurnDisplay.innerText = `${player} wins!`
             //make sure that nothing else can be clicked after winning
             slotArray.forEach(element => element.removeEventListener('click', this.bindTakePlayerTurn))
        }
    
    }
    // check for tie
    checkForTie() {
        if( [...slotArray].filter(slot => slot.innerText).length === 9 ) {
            this.playerTurnDisplay.innerText = 'TIE'
        }
    }
    //reset game
    resetGame() {
        this.playerTurn = 1
        this.playerTurnDisplay.innerText = `It is now Player ${this.playerTurn}'s Turn`
        //give all slots event listener back when board is reset, so slots can be occupied again
        slotArray.forEach(element => element.addEventListener('click', this.bindTakePlayerTurn))
        slotArray.forEach(element => element.innerText = '')
    }


}

const game = new TicTacToe()
console.log(game)
game.initializeBoard()






