class Obstacles {
  constructor(gamearea) {
    this.gamearea = gamearea;
    this.minHeight = 20;
    this.maxHeight = 100;
    this.minWidth = 10;
    this.maxWidth = 20;
    this.colors = [
      "black",
      "red",
      "green",
      "yellow",
      "gray",
      "pink",
      "purple",
      "chocolate"
    ];
    this.height = Math.floor(
      this.minHeight + Math.random() * (this.maxHeight - this.minHeight + 1)
    );
    this.width = Math.floor(
      this.minWidth + Math.random() * (this.maxWidth - this.minWidth + 1)
    );
    this.x = 1200;
    this.y = this.gamearea.height - this.height;
    //generate random index
    this.index = Math.floor(Math.random() * this.colors.length);
    //now we get the random color
    this.color = this.colors[this.index];
    //draw the obstacles
  }

  draw() {
    this.gamearea.context.fillStyle = this.color;
    this.gamearea.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
//drawing obstacles with random height, width, and coordinates
//obs height and width is random value btw minHeight and maxHeight/ minWidth and maxWidth
//gap btw 2 obs are random value btw minGap and maxGap

export default Obstacles;
