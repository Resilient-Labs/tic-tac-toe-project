// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
let win = false;
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('click', placeXO));
const XorOSpan = document.querySelector('#XorO')
let XorO = XorOSpan.textContent;
let currentTurn = document.querySelector('#current-turn')
console.log('XorO is ' + XorO);
document.querySelector('#reset-board').addEventListener('click', resetBoard)

function resetBoard(){
    squares.forEach(square => square.innerText = null);
    win = false;
    XorO = 'X';
    XorOSpan.innerText = XorO;
    document.querySelector('#winner-text').classList.add("hidden");
    document.querySelector('#current-turn').classList.remove("hidden");

}

// placeXO, if current turn is X uses innerText to place X in button of choice. If O, same. 
function whoWon(XorOSquares) {
    if (XorOSquares.includes('one') && XorOSquares.includes('two') && XorOSquares.includes('three') ||
    XorOSquares.includes('four') && XorOSquares.includes('five') && XorOSquares.includes('six') ||
    XorOSquares.includes('seven') && XorOSquares.includes('eight') && XorOSquares.includes('nine')||
    // vertical
    XorOSquares.includes('one') && XorOSquares.includes('four') && XorOSquares.includes('seven') ||
    XorOSquares.includes('two') && XorOSquares.includes('five') && XorOSquares.includes('eight') ||
    XorOSquares.includes('three') && XorOSquares.includes('six') && XorOSquares.includes('nine') ||
    // diagonal
    XorOSquares.includes('one') && XorOSquares.includes('five') && XorOSquares.includes('nine') ||
    XorOSquares.includes('three') && XorOSquares.includes('five') && XorOSquares.includes('seven'))
    {
        return XorO;
    } 
}

function placeXO(click) {
    if (win === false) {
        let squareID = click.target.id;
        console.log('Click on ' + squareID);
        const square = document.querySelector(`#${squareID}`);
        if (!square.innerText) {
            square.innerText = XorO;
            // insert checkwin function here
            let XorOSquares = Array.from(squares).filter(square => square.textContent === XorO).map(square => square.id)
    
            console.log(`Squares with ${XorO}: ${XorOSquares.join(', ')}`);
            // If winning conditions are true, declare winner and reset
            if (whoWon(XorOSquares)) {
                console.log(`${XorO} WON!`)
                document.querySelector('#current-turn').classList.add("hidden");
                document.querySelector('#winner-text').innerText = `${XorO} won!`;
                document.querySelector('#winner-text').classList.remove("hidden");

                win = true;
            }
            // else, change turn and continue
            else {
                XorO = XorO === 'X' ? 'O':'X';
                XorOSpan.innerText = XorO;
                console.log('XorO is ' + XorO);
            }    
        }
    }
}