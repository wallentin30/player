class Player {
  constructor() {
    this.div = Player.display();
  }

  
  static display() {
    const div = createElement(20, 40, 40, '#333333', true);
    document.body.appendChild(div);
      
    return div;
  }
  
}