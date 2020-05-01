/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
    constructor() {
      this.div = Player.display();
      this.move();
      // this.playerOutsideOfContainer();
    }
  
    // logica de miscare
    move() {
      //
     // console.log('miscare', this)
      document.addEventListener('keyup', (event) => {
        // aici avem un arrow function, 
        // aceste arrow function sunt speciale pentru ca copiaza contextul de mai sus 
        // ( in cazul nostru, this din metoda miscare())
        // console.log(this)
        // console.log(event.keyCode);
        const move = this.playerOutsideOfContainer();
        // console.log(move);
        if (move === false && event.keyCode === 40) { // key down
            // logica de miscare
            const oldTop = parseInt(this.div.style.top);
            this.div.style.top = `${oldTop + 20}px`;
            //console.log('arrow down', this.div.style.top);
        } else if (move === false && event.keyCode === 38) {
            const oldTop = parseInt(this.div.style.top);
            this.div.style.top = `${oldTop - 20}px`;
        } else if (move === false && event.keyCode === 37) {
            const oldLeft = parseInt(this.div.style.left);
            this.div.style.left = `${oldLeft - 20}px`;
        } else if (move === false && event.keyCode === 39) {
            const oldLeft = parseInt(this.div.style.left);
            this.div.style.left = `${oldLeft + 20}px`;
        }
        console.log('left ', parseInt(this.div.style.left))
        console.log('top ', parseInt(this.div.style.top))
      })
    }

    // verificam daca player atinge marginile
    playerOutsideOfContainer = () => {
       
        const oldTop = parseInt(this.div.style.top);
        const oldLeft = parseInt(this.div.style.left);

        const border = document.querySelector('#gameContainer').getBoundingClientRect();
        // console.log('right ', border.right)
        // console.log('bottom ', border.bottom)
        
        if(oldTop === border.top || `${oldTop + 20}px` === border.bottom || oldLeft === border.left || `${oldLeft + 20}px` === border.right) {
            alert('game over');
            return true;
        } else {
          return false;
        }
    }
    
  
    // afisarea div-ului
    static display() {
      const div = document.createElement('div');
      const { style } = div;
      style.width = "20px";
      style.height = "20px";
      style.borderRadius = '50%';
      style.backgroundColor = "#37f";
      style.position = "absolute";
      style.top = "40px"
      style.left = "40px"

      
  
      // document.querySelector('#gameContainer').appendChild(div);
      document.body.appendChild(div);
        
      return div;
    }
    
    
  }