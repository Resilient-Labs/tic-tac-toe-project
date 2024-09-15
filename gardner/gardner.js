// Created with House Gardner

//created an array from all the HTML elements with the class '.box', assigned to an variable, this will represent the tiles on the board
const board = Array.from(document.querySelectorAll('.box'));

//created a parent array that holds all the possible win combinations, each index of the parent array represents a specific winning combination that is stored in its own array
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//created game object
const game = {
    // object properties that holds values for the current game turn and the player
    turn: 1,
    currentPlayer: 'X',
    // object method that updates current player's turn
    nextTurn: function(){
        if(this.turn % 2 == 0){
            this.currentPlayer = 'O'
        }else{
            this.currentPlayer = 'X'
        }
    },
    // object method that displays what player's turn it is
    checkCurrentPlayer: function(){
        document.getElementById('whoseTurn').innerHTML = 'CURRENT PLAYER: ' + this.currentPlayer;
    },
    // object method that checks who won by running a for loop to iterate through the array of winning combinations. 
    checkWin: function(){
        for (let i = 0; i < combinations.length; i++) {
            // setting the indexes of the combination array to equal the values of the placeholder array [a,b,c], which will be used to match the indexes of the board array
            const [a, b, c] = combinations[i];
            // conditional is ran to detect whether there are 3 matching X or O in the content of each board element (or tile/square), also checks if the content of the element is not empty
            if (
                board[a].textContent !== "" &&
                board[a].textContent === board[b].textContent && 
                board[a].textContent === board[c].textContent
            ) {
                // if winning conditions are met, winner message is displayed along with the sign that won
                document.getElementById('message').innerHTML = 'WINNER IS ' + board[a].textContent;
                // makes all board tiles unclickable after winning
                board.forEach(element => {
                    element.classList.add('unclickable');
                });
                // highlights winning board tile combination
                board[a].classList.add('winningTiles');
                board[b].classList.add('winningTiles');
                board[c].classList.add('winningTiles');
                // hides player turn message 
                document.getElementById('whoseTurn').style.display = 'none';
            }
        }
    },
    // object method that checks if the game is a draw by running a for loop to iterate through the array of winning combinations. 
    checkDraw: function(){
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            // conditional is ran to detect whether if it's the tenth turn of the game,if there are no matching X or O in the content of each board element (or tile/square), also checks if the content of the element is not empty
            if (
                this.turn == 10 &&
                board[a].textContent !== "" &&
                board[a].textContent !== board[b].textContent && 
                board[a].textContent !== board[c].textContent
            ) {
                // if draw conditions are met, draw message is displayed
                document.getElementById('message').innerHTML = 'DRAW';
                // hides player turn message 
                document.getElementById('whoseTurn').style.display = 'none';
            }
        }
    },
}

// shows current player and the instructions upon game start
document.getElementById('instructions').innerHTML = 'X STARTS THE GAME! 3 MATCHES = WIN';
game.checkCurrentPlayer();

// sets a click event for each element of the board array (squares/tiles), this will keep running until all the squares/tiles are clicked
board.forEach(element => {
    element.onclick = function(event){
        // stores click event target in a variable
        const tileTarget = event.target;
        // once a specific element is clicked, the current player's sign will be inserted as text content in that specific element
        tileTarget.innerHTML = game.currentPlayer;
        // the element is made unclickable by adding a css class that removes pointer event. 
        tileTarget.classList.add('unclickable');
        // game turn will increment
        game.turn++;
        // nextTurn method is called which will update currentPlayer property and switch the player sign based on the turn number
        game.nextTurn();
        // checkDraw method is called to see if the game resulted in a draw, if not, the checkWin method is called
        game.checkDraw();
        // checkWin method is called to see if the clicked tiles have a matching win combination
        game.checkWin();
        // checkCurrentPlayer method is called to display who the current player is
        game.checkCurrentPlayer();
        // removes instructions from display 
        document.getElementById('instructions').style.display = 'none';
    };
});




