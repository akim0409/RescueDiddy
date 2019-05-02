import GameArea from "./gamearea";
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gamearea = new GameArea(ctx);
  }
  //get audio
  //   var audio = document.getElementById("audio");
  //   var audio1 = document.getElementById("audio1")
  startGame() {
    this.gamearea.start();
  }
}
export default Game;
