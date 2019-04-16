class dk {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "../assets/images/dkrun.png";
    this.sprite = new Sprite(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
    // remember to update your dy as your object moves up and down
    this.frameTimer = 0;
    this.animationSpeed = 30;
    // frameTimer and animationSpeed controls frames per second
    this.currentFrame = 0;
  }

  update(dy) {}

  draw() {
    this.frameTimer++;
    // increments every time you run requestAnimationFrame
    if (this.frameTimer % this.animationSpeed === 0) {
      this.currentFrame = (this.currentFrame + 1) % 20;
    }
    // will go to next sprite when true

    this.ctx.drawImage(
      this.image,
      sx * this.currentFrame,
      sy,
      sw,
      sh,
      dx,
      dy,
      dw,
      dh
    );
  }
}
