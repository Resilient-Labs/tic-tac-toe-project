// Create a lookup object to map the player's turn (1 or -1) to their respective symbols ('O' for 1, 'X' for -1)
const COLOR_LOOKUP = {
    '1': 'O',        // Player 1 is 'O'
    '-1': 'X',       // Player -1 is 'X'
    'null': ''       // Empty square has no symbol
};

// Define all possible winning combinations of indexes on the board
const winningCombos = [
    [0, 1, 2],   // Top row
    [3, 4, 5],   // Middle row
    [6, 7, 8],   // Bottom row
    [0, 3, 6],   // Left column
    [1, 4, 7],   // Middle column
    [2, 5, 8],   // Right column
    [0, 4, 8],   // Diagonal from top-left to bottom-right
    [2, 4, 6]    // Diagonal from top-right to bottom-left
];

// Declare variables to track the game state: the board, whose turn it is, and whether there's a winner
let board, turn, winner;

// Select the HTML elements for displaying the game message and the "Play Again" button
const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');

// Add event listeners: when the board is clicked, the handleMove function is called
// When "Play Again" is clicked, the game resets by calling the initialize function
document.getElementById('board').addEventListener('click', handleMove);
playAgainBtn.addEventListener('click', initialize);

// Call initialize to set up the game when the page loads
initialize();

function initialize() {
    // Set up the board with 9 empty squares (null represents an empty square)
    board = [null, null, null, null, null, null, null, null, null];

    // Set the first turn to player 1 ('O')
    turn = 1;

    // No winner at the start
    winner = null;

    // Call render to update the board and display the initial state
    render();
}

function handleMove(evt) {
    // Get the index of the clicked square (convert the square's ID to a number)
    const idx = parseInt(evt.target.id.replace('sq-', ''));

    // If the clicked square is invalid, already filled, or if the game is over, do nothing
    if (isNaN(idx) || board[idx] || winner) return;

    // Update the board with the current player's symbol at the clicked square
    board[idx] = turn;

    // Check if there's a winner after the move
    winner = getWinner();

    // Switch the turn to the other player (-1 for 'X', 1 for 'O')
    turn *= -1;

    // Re-render the board and message after the move
    render();
}

function getWinner() {
    // Loop through each winning combination to see if either player has won
    for (let winArr of winningCombos) {
        // If the sum of the board values at a winning combo equals 3 or -3, there's a winner
        if (Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3) return turn;
    }

    // If the board still has empty squares, the game continues
    if (board.includes(null)) return null;

    // If no winner and no empty squares, the game is a tie ('T')
    return 'T';
}

function render() {
    // Render the board to reflect the current game state
    renderBoard();

    // Update the game message based on whether there's a winner, a tie, or the next player's turn
    renderMessage();

    // Enable the "Play Again" button if the game has ended
    playAgainBtn.disabled = !winner;
}

function renderBoard() {
    // Loop through each square on the board
    board.forEach(function (sqVal, idx) {
        // Get the corresponding HTML element for the square
        const squareEl = document.getElementById(`sq-${idx}`);

        // Update the square's text content with the player's symbol (O, X, or empty)
        squareEl.textContent = COLOR_LOOKUP[sqVal];

        // Add or remove the 'avail' class based on whether the square is available (empty)
        squareEl.className = !sqVal ? 'square avail' : 'square';
    });
}

function renderMessage() {
    // If the game ended in a tie, display a tie message
    if (winner === 'T') {
        message.innerHTML = 'Tie!';
    }
    // If there's a winner, congratulate the winner
    else if (winner) {
        message.innerHTML = `Congrats <span style="color: ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}</span>!`;
    }
    // If the game is ongoing, display whose turn it is
    else {
        message.innerHTML = `<span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    }
}
