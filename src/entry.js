import Game from "./game";
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  canvas.width = 1200;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  game.startGame();
});
