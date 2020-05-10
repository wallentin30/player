class Game {
    constructor(gameContainer) {
      this.container = gameContainer;
      this.startGame();
     
    }
  
    startGame() {
      this.playerDiv = new Player();
      this.player = this.playerDiv.div;
      this.movePlayer();
    }
  
   
    movePlayer() {
      document.addEventListener('keydown', (event) => {
        
        const oldTop = parseInt(this.player.style.top);
        const oldLeft = parseInt(this.player.style.left);
        const border = this.container.getBoundingClientRect();
       
        if (event.keyCode === 40 && border.bottom !== oldTop + 20 ) { 
            this.player.style.top = `${oldTop + 20}px`;
        } else if (event.keyCode === 38 && border.top !== oldTop ) {
            this.player.style.top = `${oldTop - 20}px`;
        } else if (event.keyCode === 37 && border.left !== oldLeft ) { 
            this.player.style.left = `${oldLeft - 20}px`;
        } else if (event.keyCode === 39 && border.right !== oldLeft + 20 ) { 
            this.player.style.left = `${oldLeft + 20}px`;
        }
      })
    }
  }