//What makes tic tac toe?
//Two players, one with x one with o -> need to alternate & recognize whose turn it is
//Placing x/o in the squares
//Recognizing wins = 3 in a row: columns, rows, and two diagonals

//Current Issues: if a player wins before the boxes are filled, the game is still playable
//There is no reset other than refreshing

//uses forEach() to get an EventListener for each box
const box = document.querySelectorAll('.box')
box.forEach((a) => {a.addEventListener('click', inputElement)});

//gets the specific element id
function inputElement(a) {
    // console.log('inputElement running')
    let boxNumber = a.target.id;
    playerEnter(boxNumber)
}

//Identifies which player is going by round number & places the letter into the boxes
let round = 1;
function playerEnter(boxNumber) {
    console.log(round)
    //9 is the max number of rounds possible! If a win condition doesn't happen, message for tie will come out
    if (round===9) {
        document.querySelector('h3').innerText = 'Tie! Restart?'
    }
    if (round%2!=0) {
        if (document.getElementById(boxNumber).innerText === '') { //makes sure that the players cant override the box
            document.getElementById(boxNumber).innerText = 'x';
            playerX.push(boxNumber);
            round++; //having round++ within the conditional ensures that the round only increases once a correct input is made
            document.querySelector('h2').innerText = 'Current player: O';
            winConditionX()
        }
    } else if (round%2===0) {
        if (document.getElementById(boxNumber).innerText === '') {
            document.getElementById(boxNumber).innerText = 'o'
            playerO.push(boxNumber);
            round++;
            document.querySelector('h2').innerText = 'Current player: X';
            winConditionO()
        }
    }
}


//Win conditions
//Complicated because I really wanted to make it so that the board size could change and there would have to be minimal edits -> comments are placed on all of the things that would have to chance on boardsize change

//win conditions for player X
let playerX = [];
function winConditionX() {
    let xRowCount1 = 0
    let xRowCount2 = 0
    let xRowCount3 = 0
    let xColCount1 = 0
    let xColCount2 = 0
    let xColCount3 = 0
    console.log('winConditionX running')
    //once the number of locations a player has placed their piece is equal to or greater than three is when a win can be achieved
    
    if (playerX.length>=3 /*change on boardsize*/) {
        playerX.forEach((b) => {
            //the number of locations at a row or column are counted
            //win conditions = three in one row or column
            if (b[1]==1) {
                xRowCount1++
            } else if (b[1]==2) {
                xRowCount2++ 
            } else if (b[1]==3) {
                xRowCount3++
            }
            if (b[3]==1) {
                xColCount1++
            } else if (b[3]==2) {
                xColCount2++
            } else if (b[3]==3) {
                xColCount3++
            }});
        if (/*change on boardsize*/ xRowCount1===3 || xRowCount2===3 || xRowCount3===3 || xColCount1===3 || xColCount2===3 || xColCount3===3 || (playerX.includes('r1c1') && playerX.includes('r2c2') && playerX.includes('r3c3')) ||(playerX.includes('r1c3') && playerX.includes('r2c2') && playerX.includes('r3c1'))) {
            document.querySelector('h2').innerText = 'Player X has won'
            document.querySelector('h3').innerText = 
        }
    }
}

//for player O : repeat of player X but with O variables
let playerO = [];
function winConditionO() {
    let oRowCount1 = 0
    let oRowCount2 = 0
    let oRowCount3 = 0
    let oColCount1 = 0
    let oColCount2 = 0
    let oColCount3 = 0
    console.log('winConditionO running')
    if (playerO.length>=3/*change on boardsize*/) {
        playerO.forEach((b) => {
            if (b[1]==1) {
                oRowCount1++
            } else if (b[1]==2) {
                oRowCount2++ 
            } else if (b[1]==3) {
                oRowCount3++
            }
            if (b[3]==1) {
                oColCount1++
            } else if (b[3]==2) {
                oColCount2++
            } else if (b[3]==3) {
                oColCount3++
            }});
            if (/*change # on boardsize*/oRowCount1===3 || oRowCount2===3 || oRowCount3===3 || oColCount1===3 || oColCount2===3 || oColCount3===3 || (playerO.includes('r1c1') && playerO.includes('r2c2') && playerO.includes('r3c3')) ||(playerO.includes('r1c3') && playerO.includes('r2c2') && playerO.includes('r3c1'))) {
                document.querySelector('h2').innerText = 'Player O has won'
            }
    }
}

//OOPs (ahahah I didn't realize this was supposed to be OOP...)
//box prototype
// class Box {
    // constructor(row, column, 
    // this.row: row;
    // this.column: column;
    // this.value: '' //will populated as x or o
    // this.isFilled: false //will be changed to true

//player prototype {
    // this.location: //array of locations -> loop through and test if three elements in place 1 or 3 (r1c1)
    // locationCounts: object -> counts how many classes on the locations it has claimed = r1, c1, etc?
        // {r1: 1}