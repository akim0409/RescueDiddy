class Player {
  constructor(context) {
    this.context = context;
    this.x = 100;
    this.y = 470;
    //make it jump
    this.speedY = 0;
    window.addEventListener("keydown", this.jump.bind(this));
  }
  //jumping is a changing of y-pos upward until reaching a given peak, then coming back down
  jump() {
    this.speedY = -2;
    //play the audio in the 'jump' function
    // audio.play();
  }
  //draw the player
  update() {
    //dye the 'player' black otherwise it will be gray
    this.context.fillStyle = "indigo";
    this.context.fillRect(this.x, this.y, 30, 30);
  }
  newPos() {
    //it goes down if it 'y' reaches 280
    if (this.y < 280) {
      this.speedY = 2;
    }
    this.y = this.y + this.speedY;

    //it stops going down if it reaches 470
    if (this.speedY === 2 && this.y === 470) {
      this.speedY = 0;
    }
  }

  //crash happens when the coordinates of the player and the obs overlap

  crashWidth(obs) {
    if (
      this.x + 30 > obs.x &&
      this.x < obs.x + obs.width &&
      this.y + 30 > obs.y
    ) {
      return true;
    }
    return false;
  }
}

export default Player;
