let boxElements = document.querySelectorAll('.box')
// you can't add and eventListener to to querySelectorAll array so u have to loop through the array and  addEventListener to each item. 
boxElements.forEach(item => item.addEventListener('click', clickHandle, {once : true}))

const tictactoe = {
    array: ['', '', '','', '', '','', '', '',], 
    player: 'x',
    togglePlayer() {   
        // our condition ? what we want to happen if the conditon is true : what we want if the condition is false 
        this.player === 'x' ? this.player = 'o': this.player ='x'     
    },

    checkForDraw(){
        if (this.array.includes('') == false){
            this.updateStatus('its a draw')
        }
    }, 

    updateStatus(msg){
        document.querySelector('#result').innerHTML = msg
    },

    addXandO(e) {
        e.target.innerHTML = this.player 
        this.array[e.target.id] = this.player
        this.togglePlayer() 
    },

   checkForWin() {
        let winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        
        winningCombinations.forEach(row => {
            if (this.array[row[0]] != '' &&  this.array[row[0]] === this.array[row[1]] && this.array[row[1]] === this.array[row[2]]){
                this.togglePlayer()
                this.updateStatus(`player ${this.player} won`)
                boxElements.forEach(item => item.removeEventListener('click', clickHandle))
            } 
        })  
    }
}


function clickHandle(e) {
   tictactoe.addXandO(e)
   tictactoe.checkForWin()
   tictactoe.checkForDraw()
} 

