// worked with milan and miggie 
console.log('main.js')
// document.getElementById("box1").addEventListener("click", playerMove)
let currentPlayer = 'x'

// document.getElementById('box1').addEventListener('click', box)
// document.getElementById('box2').addEventListener('click', box)
// document.getElementById('box3').addEventListener('click', box)
// document.getElementById('box4').addEventListener('click', box)
// document.getElementById('box5').addEventListener('click', box)
// document.getElementById('box6').addEventListener('click', box)
// document.getElementById('box7').addEventListener('click', box)
// document.getElementById('box8').addEventListener('click', box)
// document.getElementById('box9').addEventListener('click', box)

function box(e) {
   
    console.log(currentPlayer);
    // put 'x' or 'o' on page
    if (currentPlayer === 'x') {
        e.target.innerHTML.src='images/burger.png'
        e.target.classList.toggle('x')

    } else {
        e.target.innerHTML.src='images/fries.png'
        e.target.classList.toggle('o')
    }
    // detectWin()
    // toggle current player
    if (currentPlayer === 'o') {
        currentPlayer = 'x'
    } else {
        currentPlayer = 'o'
    }

}
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')

class Board {
    squareBoxes = []
    currentPlayer = 'x'
    constructor() {



        for (let i = 0; i < 9; i++) {

            const square = new Square(i + 1)
            this.squareBoxes[i] = square

        }


    }
    detectWinner() {
        // console.log(this.squareBoxes[0].status, this.squareBoxes[1].status, this.squareBoxes[2].status)
        // if (this.squareBoxes[0].status === this.squareBoxes[1].status && this.squareBoxes[2].status === this.squareBoxes[1].status && null !== this.squareBoxes[1].status) {



        //     alert('WINNER' + this.currentPlayer)
        // }
        // else if (this.squareBoxes[3].status === this.squareBoxes[4].status && this.squareBoxes[5].status === this.squareBoxes[4].status && null !== this.squareBoxes[4].status) {

        // }
        // else if (this.squareBoxes[6].status === this.squareBoxes[7].status && this.squareBoxes[8].status === this.squareBoxes[7].status && null !== this.squareBoxes[7].status) {

        // }
        let winning_combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8],
        ]
        console.log( this.squareBoxes[0])
        winning_combos.forEach ( (winarray, index) => {
           let win1 = winarray[0]
           let win2 =winarray[1]
           let win3 = winarray[2]
           if ((this.squareBoxes[win1].status === "o") || (this.squareBoxes[win1].status === "x")){
            if ((this.squareBoxes[win1].status===this.squareBoxes[win2].status)&&(this.squareBoxes[win2].status ===this.squareBoxes[win3].status)){
                alert("winner")
            }
           }
         
        })
            
    }


    getPlayer() {
        return this.currentPlayer

    }
    changePlayers() {

        if (this.currentPlayer === 'o') {
            this.currentPlayer = 'x'
        } else {
            this.currentPlayer = 'o'
        }
    }

}
class Square {
    status = null
    id = 0
    constructor(i) {
        this.id = i
        document.getElementById('box' + i).addEventListener('click', (e) => this.click(e))

    }


    click(e) {
        console.log("click on ", e.target, board.getPlayer())
        if (board.getPlayer() === 'x') {
            e.target.innerHTML = "<img src='images/burger.png'>"
            // e.target.classList.toggle('x')
            this.status = 'x'
        } else {
            e.target.innerHTML = "<img src='images/fries.png'>"
            // e.target.classList.toggle('o')
            this.status = 'o'
        }
        board.detectWinner()
        board.changePlayers()
    }
}

const board = new Board()


// refered to coding challange tic tac toe
// box[i] = player_turn; let winning_combos = [
// [0,1,2],
// [3,4,5],
// [6,7,8],
// [0,3,6],
// [1,4,7],
// [2,5,8],
// [2,4,6],
// [0,4,8],
//
// ]
// for (let i=0; i< winning_combos.length; i++){
// let winning_row = winning_combos[i]
// let p1 = winning_row[0]
// let p2 = winning_row[1]
// let p3 = winning_row[2]
// if (p1 == p2 && p2 == p3 && p1){
// alert('winner! player ${player_turn})
//
// }










// for (let i = 0; i< winning_combos.length; i++) {
//   let winning_row = winning_combos[i]
//   let p1 = winning_row [0]
//   let p2 = winning_row [1]
//   let p3 = winning_row [0]
//   if ()
// })


//
// document.getElementById('x').onClick('click', box)
// function {
//
// }

// when box is clicked either an dog or cat will appear
