class Sprite {
  constructor(image, sx, sy, sw, sh, dx, dy, dw, dh, ctx) {
    this.image = image;
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ctx = ctx;
  }

  render() {
    const { image, sx, sy, sw, sh, dx, dy, dw, dh, ctx } = this;
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
}
