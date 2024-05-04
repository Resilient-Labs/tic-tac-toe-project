
/*------------------------------------------------------------------------------------
 *The player object represents the players of the game in tic tac toe
 *
 * --------------------------------------------------------------------------------- */
class Player {
  constructor(symbol, taunt, visualTaunt) {
    this.symbol = symbol;
    this.taunt = taunt;
    this.visualTaunt = visualTaunt;
  }

  //gives what the player symbol is
  designatedSymbol() {
    return this.symbol;
  }

  //gives what the player will say/taunt when they win
  sayTaunt() {
    return this.taunt;
  }

  //gives what the player will show when they win with an img
  displayVisualTaunt() {
    return this.visualTaunt;
  }
}

/*------------------------------------------------------------------------------------
 *  This is an object that is used to manage the tic tac toe board.
 *
 * --------------------------------------------------------------------------------- */
class Map {
  constructor() {
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  /* This method to be able to update the cell at the currrent index where current player places there symbol which could be X or O 
   * if  there already is a symbol there then it does nothing.
   * @param target object:  is the DOM element user selected to update
   *  corresponding to cell 2 or "0" corresponding to cell 1
   * @param  symbol string: the symbol of the current user (each player has either an X or an O)
   * @return true or false  Boolean returns if the user was able that selected cell
   * */
  updateCells(target, symbol) {
    
    if (this.board[target.id] === null) {

      this.board[target.id] = symbol;
      target.innerText = symbol;
      return true;
    }
    return false;

  }

  /* This method is used to reset the board and it clears the board tic tac toe
   * with all the users symbols of x's and o's and sets each cell index to null to start with no symbols
   * */
  clearCells() {
    //created a new variable to contain an array of the cell-items from their respective DOM element
    let cellItems = document.querySelectorAll("div.cell-item");

    //using the for each loop, i am looping through each cell item and removing the existing text
    cellItems.forEach((cellItem) => {
      cellItem.innerText = "";
    });

    //removing the existing text 
    document.querySelector("#player-text").innerText = "";

    // using this conditional to handle two edge cases when either the game starts and has no visuals or when players tie , this is bc in both situations there would be no img element 
    if (document.querySelector("#visual-reptar")) {
      document.querySelector("#visual-reptar").remove();
    }

    /* check if board was cleared*/
    console.log(this.board);
  }



  /* This method is to check if the current player has won by checking all the possible ways of winning the game for
   * tic tac toe three in a row.
   * @param symbol string the symbol of the current user (each player has either an X or an O)
   * @return boolean (true or false) true being that you won or false being that you lost
   * */
  checkToSeeWinner(symbol) {
    if (
      this.board[0] === symbol &&
      this.board[1] === symbol &&
      this.board[2] === symbol
    ) {
      return true;
    } else if (
      this.board[3] === symbol &&
      this.board[4] === symbol &&
      this.board[5] === symbol
    ) {
      return true;
    } else if (
      this.board[6] === symbol &&
      this.board[7] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[0] === symbol &&
      this.board[3] === symbol &&
      this.board[6] === symbol
    ) {
      return true;
    } else if (
      this.board[1] === symbol &&
      this.board[4] === symbol &&
      this.board[7] === symbol
    ) {
      return true;
    } else if (
      this.board[2] === symbol &&
      this.board[5] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[0] === symbol &&
      this.board[4] === symbol &&
      this.board[8] === symbol
    ) {
      return true;
    } else if (
      this.board[2] === symbol &&
      this.board[4] === symbol &&
      this.board[6] === symbol
    ) {
      return true;
    }
    return false;
  }

}

/*------------------------------------------------------------------------------------
 *  This is an object that is used to manage the tic tac toe board.
 *
 * --------------------------------------------------------------------------------- */
class Game {

  constructor() {

    // you need to create 2 game players. Designate x and o to a player
    this.player_1 = new Player(
      "🦖",
      "Hold on to your diapies, babies, I'm the WINNER",
      "https://i.gifer.com/embedded/download/1t0.gif"
    );

    this.player_2 = new Player(
      "🍼",
      "Hold on to your diapies, babies, I'm the WINNER",
      "img/chuckie-win.gif"
    );

    //Designate which player starts and use to track whose turn it is
    this.turn = this.player_1.designatedSymbol();

    // you need to a new board
    this.board = new Map();

    //clear x's and os if there was a previoud game played
    this.board.clearCells();

    //create a property with the starting # of turns to keep track of how many total turns are left
    this.totalTurns = 9;

    //to confirm if the game ended or still live
    this.gameActive = true;
  }

  /* This method will allow current player to make their move to place their symbol
   * then update whos turn it is to let the next player go by updating the 'turn' (property).
   * After every turn, check if the user won or tied and  if so, notify the user in the html.
   * If the game is done do not allow the user to make any more moves.
   * 
   * @param target DOM element that user targeted by selecting. is needed to update and to get id
   * */
  takeTurn(target) {
    //check to see if game is active. if its not then it shouldnt be able to do anything
    if (!this.gameActive) {
      return;
    }

    /** passing these twp parameters bc I need id to identify what element I will updated and based on whos turn it is, that's whose symbol I will use*/
    let result = this.board.updateCells(target, this.turn);

  
    /* Checking to see if current player made a valid move(didnt select an alreaady filled out
      cell.) or it checks to see if you have no more turns*/
    if (result) {
      // If it was a valid move, update how many total moves we have left in the game
      this.totalTurns--;
      console.log("totalTurns: " + this.totalTurns);

      //chekcks to see that there was a winner
      if (this.board.checkToSeeWinner(this.turn)) {

        //this checks which player won
        let currentPlayer =
          this.player_1.designatedSymbol() === this.turn
            ? this.player_1
            : this.player_2;

        // this displays the text taught in the dom when the player wins
        document.querySelector("h3").innerText = currentPlayer.sayTaunt();

        //this creates an img element, adds an id to it, then adds it to the div to display it
        let visual = document.createElement("img");
        visual.id = "visual-reptar";
        visual.src = currentPlayer.displayVisualTaunt();
        document.querySelector("#visual-taunt").appendChild(visual);

        //this tells you the game ended and there is not any more valid moves to make in the game
        this.gameActive = false;
      } else if (!this.totalTurns) {
        //displays it was a tie
        document.querySelector("h3").innerText = "hey kiddos it's a tie";

        //this tells you the game ended and there is not any more valid moves to make in the game
        this.gameActive = false;
      }

      //this updates who the current player is to make their move 
      this.turn =
        this.player_1.designatedSymbol() === this.turn
          ? this.player_2.designatedSymbol()
          : this.player_1.designatedSymbol();
    }
  }
}

//global variable for game object
let gameObject;

//querySelector returns an object object.methodNmae
document.querySelector("#play-game").addEventListener("click", startGame);

//trying to loop thru to add an eventlistner to be able to add x's and o's added a variable to store my array of elements
const cellItems = document.querySelectorAll("div.cell-item");
console.log(cellItems);

//added event listers to all cells
cellItems.forEach((cellItem) => {
  cellItem.addEventListener("click", clickableCell);
});


//adds event handlers to cell when selected
function clickableCell(event) {
  gameObject.takeTurn(event.target);
  console.log("cellItems");
  console.log(event.target.id);
}

//this is an event handler that will trigger a new game 
function startGame() {
  
  // CREATE AN INSTANCE OF THE GAME OBEJCT
  gameObject = new Game();
}
