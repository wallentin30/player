
const gameContainer = createElement(400, 20, 20, "#1ABC9C");
document.body.appendChild(gameContainer);

const newGame = new Game(gameContainer);

function createElement(size, x, y, color, player) {
  const div = document.createElement('div');

  const { style } = div;
  
  style.width = `${size}px`;
  style.height = `${size}px`;

 
  style.position = 'absolute';
  style.top = `${y}px`;
  style.left = `${x}px`;

  if (player) {
    style.borderRadius = '50%';
  }

  style.backgroundColor = color;

  return div;
}
