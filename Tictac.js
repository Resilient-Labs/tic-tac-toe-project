const board = document.querySelector("#board");
let nextPick = "X";
let playerbot = "O";
let gameTracker = ["", "", "", "", "", "", "", "", ""];
let winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [6, 7, 8],
  [2, 5, 8],
];
const playerTurn = document.getElementById("pTurn");

const Tictactoe = {
  // if the user clicks on the board, do nothing. Otherwise, the cells should return either with X or O .
  fillCell: (event) => {
    playerTurn.textContent = `player ${nextPick} is your turn`;
    if (event.target.id === "board" || event.target.innerHTML != "") {
      return;
    } else {
      event.target.innerText = nextPick;
      let index = parseInt(event.target.id);

      if (nextPick === "X") {
        playerTurn.textContent = `player O it's your turn`;
        nextPick = "O";
        gameTracker[index] = nextPick;
        console.log(gameTracker);
      } else {
        nextPick = "X";
        playerTurn.textContent = `player ${nextPick} is your turn`;
        gameTracker[index] = nextPick;
        console.log(gameTracker);
      }
    }
    Tictactoe.evaluateGame();
  },

  evaluateGame: () => {
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i];
      const gameWon =
        gameTracker[combo[0]] !== "" &&
        gameTracker[combo[0]] === gameTracker[combo[1]] &&
        gameTracker[combo[2]] === gameTracker[combo[0]];
      console.log(`loop ${i}:${combo} : gameWon=${gameWon}`);
      if (gameWon) {
        alert("You Won!");
      }
    }
  },
  refresh: () => {
    const allCells = [...document.querySelectorAll(".cell")];
    for (let i = 0; i < allCells.length; i++) {
      allCells[i].innerHTML = "";
    }
  },
};
document.getElementById("restart").addEventListener("click", Tictactoe.refresh);
board.addEventListener("click", Tictactoe.fillCell);
