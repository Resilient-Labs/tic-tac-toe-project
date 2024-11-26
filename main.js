class Game{
    constructor(){
        this.curPlayer='X' ///X starts the game
        this.board=Array(9).fill(null) //Array to track the board of 9 empty squares
        this.score={X:0, O:0} //Tracks scores for X and O
        this.winner=null   //no winner at start of game

        //Select DOM elements
        this.squares=document.querySelectorAll('.square') //selects each square(cell)
        this.restart=document.querySelector('#restartButton') //selects restart button
        this.playeronescore=document.querySelector('#playeronescore') //selects player one score
        this.playertwoscore=document.querySelector('#playertwoscore')  //selects player two score
        this.status=document.querySelector('#status') //selcts status to display who won

    }

    init(){
        this.squares.forEach(square => square.addEventListener('click',(e)=> this.handleCellClick(e)))
        this.restart.addEventListener('click',()=>this.restartButton())
        this.updateStatus()
    }
    handleCellClick(event){
        const index=event.target.id //Gets the id element when square(cell) is clicked
        const cell=event.target //Tracks clicked cell

        if(this.board[index] === null && !this.winner){//checks if cells have been clicked and if there is no winner
            this.board[index]=this.curPlayer  //fills cell with curPlayers symbol
            cell.textContent=this.curPlayer  //fills square with curPlayers symbol
            if(this.checkWin(this.board)){  //checks to see who won
            this.winner=this.curPlayer     //winner is current player
            this.score[this.curPlayer]++ //adds +1 to score of whoever won
            this.updateStatus() //announces who won
            this.updateScore()  //updates player score
            }else if(!this.board.includes(null)){
            this.updateStatus('draw')
            }else{
            this.changeCurPlayer()
            this.updateStatus()
            }
        }

    }

    changeCurPlayer(){ //switch players turn
        if(this.curPlayer==='X'){
           this.curPlayer='O'
        }else{
         this.curPlayer='X'
        }
        }

    checkWin(board){

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
            [0,4,8], [2,4,6]//diagonals
        ]
    
        let win=false;                     
    
        winningConditions.forEach((combo)=>{
            if(
                board[combo[0]]===board[combo[1]]&&
                board[combo[1]]===board[combo[2]]&&
                board[combo[0]] !=null
            ){
                win=true
            }
        });
        return win
    }

    updateStatus(status=''){ //updates status for handleCellClick function
        if(status==='draw'){
            this.status.textContent='It\'s a tie!' //If there is a draw show there is a tie
        }else if(this.winner){
            this.status.textContent=`Player ${this.winner} wins!` //Show who won
        }else{ 
         this.status.textContent=`It's player ${this.curPlayer}'s turn`  //else, keep the game going and show next player
        }
    }
    
    updateScore(){
        this.playeronescore.textContent=this.score.X //updates score while updating status
        this.playertwoscore.textContent=this.score.O  //updates score while updating status
    }

    restartButton(){ //resets the game without reloading the page
        this.board=Array(9).fill(null) //returns empty array for each celll
        this.curPlayer='X'
        this.winner=null
        this.squares.forEach(square => {square.textContent = ''})//returns empty square
        this.updateStatus()
    }

}
 //Start Game
const game=new Game()
game.init()







