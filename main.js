//player factory function
const createPlayer = (name,marker) => {
        return {name,marker}
    }

    //gameboard object
    const gameBoard = (() => {
       //create board array
        let board = Array(9).fill(""); // initializes 9 element array, filled with empty strings

        //add event listeners on each field that will mark field
        const fields = document.querySelectorAll(".cell") 
        
        fields.forEach((field,index) => {
            field.addEventListener('click', () => {

                //checks to see if field is already filled
                if (board[index] === "") {
                    board[index] = currentPlayer.marker;
                    field.textContent = currentPlayer.marker;
                    switchPlayer(); // switch to next player
 


                }
                
            });
        });


    let currentPlayer = createPlayer("player 1", "X"); // default player is 1 with "X")

    const switchPlayer = () => {
 currentPlayer = currentPlayer.marker === "X"
 ? createPlayer("player 2", "O")
 : createPlayer("Player 1", "X");



    };
    }) ();