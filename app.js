const gameContainer = document.createElement('div');
gameContainer.setAttribute('id', 'gameContainer');

gameContainer.style.width = '400px';
gameContainer.style.height = '400px';
// gameContainer.style.margin = '0 auto';
gameContainer.style.top = '20px';
gameContainer.style.left = '20px';
// gameContainer.style.border = '5px solid #333';
gameContainer.style.backgroundColor = 'lightgrey';
gameContainer.style.position = 'relative';

document.body.appendChild(gameContainer);

const player1 = new Player();

