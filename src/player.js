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

// class dk {
//   constructor(ctx) {
//     this.ctx = ctx;
//     this.image = new Image();
//     this.image.src = "../assets/images/dkrun.png";
//     this.sprite = new Sprite(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
//     // remember to update your dy as your object moves up and down
//     this.frameTimer = 0;
//     this.animationSpeed = 30;
//     // frameTimer and animationSpeed controls frames per second
//     this.currentFrame = 0;
//   }

//   update(dy) {}

//   draw() {
//     this.frameTimer++;
//     // increments every time you run requestAnimationFrame
//     if (this.frameTimer % this.animationSpeed === 0) {
//       this.currentFrame = (this.currentFrame + 1) % 20;
//     }
//     // will go to next sprite when true

//     this.ctx.drawImage(
//       this.image,
//       sx * this.currentFrame,
//       sy,
//       sw,
//       sh,
//       dx,
//       dy,
//       dw,
//       dh
//     );
//   }
// }
