class Player {
  constructor(context) {
    this.ctx = context;
    this.x = 0;
    this.y = 0;
    this.jumping = false;
    this.runSprite = new Image();
    this.runSprite.src = "./assets/images/run.png";
    this.frameCount = 19;
    this.runWidth = 1425 / this.frameCount;
    this.runHeight = 59;
    this.jumpSprite = new Image();
    this.jumpSprite.src = "./assets/images/jump.png";
    this.jumpWidth = 48 / this.frameCount;
    this.jumpHeight = 80;
    this.vel = 0;
    this.currentFrame = 0;
    //make it jump
    this.speedY = 0;
    this.draw = this.draw.bind(this);
    this.startAnimating();
    this.update = this.update.bind(this);
    window.addEventListener("keydown", this.jump.bind(this));
  }

  //  let srcX;
  // let xrcY;

  jump() {
    const gravity = 0.25;
    const bottomY = 280;
    if (this.jumping) {
      if (this.y <= bottomY) {
        this.vel += gravity;
        this.y += this.vel;
      } else {
        this.y = bottomY;
        this.vel = 0;
        this.jumping = false;
      }
    }
  }

  toggleJump() {
    if (!this.jumping) {
      this.jumping = true;
      this.vel = -8;
    }
  }
  update() {
    this.currentFrame = ++this.currentFrame % this.frameCount;
    this.srcX = this.currentFrame * this.runWidth;
    this.srcY = 0;
  }

  draw() {
    const now = Date.now();
    const elapsed = now - this.then;

    if (elapsed > this.fpsInterval) {
      this.update();
      this.ctx.clearRect(0, 441, this.runWidth, this.runHeight);
      this.then = now - (elapsed % this.fpsInterval);
      this.ctx.drawImage(
        this.runSprite,
        this.srcX,
        this.srcY,
        this.runWidth,
        this.runHeight,
        0,
        441,
        this.runWidth,
        this.runHeight
      );
    }
    window.requestAnimationFrame(this.draw);
  }

  startAnimating() {
    this.fpsInterval = 1000 / 10;
    this.then = Date.now();
    this.startTime = this.then;
    this.draw();
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
