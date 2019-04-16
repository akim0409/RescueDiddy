import GameArea from "./gamearea";
class Game {
  constructor() {
    this.gamearea = new GameArea();
  }
  //get audio
  //   var audio = document.getElementById("audio");
  //   var audio1 = document.getElementById("audio1")
  startGame() {
    this.gamearea.start();
  }
}
export default Game;
