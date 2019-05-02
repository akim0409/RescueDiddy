import Obstacle from "./obstacles";
import Player from "./player";

class Gamearea {
  constructor(ctx) {
    // this.canvas = document.getElementById("myCanvas");
    //start is intial actions
    this.context = ctx;
    this.minGap = 200;
    this.maxGap = 500;
    //add Array of obs
    this.myObstacles = [];
    this.gap = this.randGap();
    this.start = this.start.bind(this);
    this.updateGameArea = this.updateGameArea.bind(this);
    // this.render = this.render.bind(this);
  }
  start() {
    this.height = 500;
    this.width = 1200;

    // this.context = this.canvas.getContext("2d");
    this.player = new Player(this.context);
    //frame counts how many times 'update gamearea' is ran
    this.frame = 0;
    //add score count
    // this.score = 0;

    //give inital value of score
    // scoreText.update("Score: 0");
    //execute "updateGameArea" every 5 ms
    this.interval = setInterval(this.updateGameArea, 5);
    // this.render();
    //listener to handle the event of pressing a key in the keyboard
  }
  everyinterval(n) {
    //if frame is a multiple of 'n' we send true
    if (this.frame % n === 0) return true;
    return false;
  }
  updateGameArea() {
    //check for a crash
    for (let i = 0; i < this.myObstacles.length; i++) {
      if (this.player.crashWidth(this.myObstacles[i])) {
        this.stop();
        //exit updateGameArea
        return;
      }
    }
    //clear game area before each new drawings
    // this.clear();
    //add more obs
    //After every 150times running 'updateGameArea'
    // this.player.draw();
    if (this.everyinterval(this.gap)) {
      this.myObstacles.push(new Obstacle(this));
      //update gap after each bew added obs
      this.gap = this.randGap();
      //reset frame value
      this.frame = 0;
    }
    for (let i = 0; i < this.myObstacles.length; i++) {
      //update the obs (x) every time
      this.myObstacles[i].x -= 1;
      this.myObstacles[i].draw();
    }
    this.player.newPos();
    this.player.update();
    this.frame += 1;
    //update score
    // this.score += 0.01;
    // scoreText.update("Score: " + Math.floor(gamearea.score));
  }
  //define everyinterval
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
    // this.player.draw();
  }
  stop() {
    clearInterval(this.interval);
    alert("Game Over");
    // audio1.play();
  }
  randGap() {
    return Math.floor(
      this.minGap + Math.random() * (this.maxGap - this.minGap + 1)
    );
  }

  // render() {
  //   // debugger;
  //   this.player.draw();
  //   window.requestAnimationFrame(this.render);
  // }
}
export default Gamearea;
