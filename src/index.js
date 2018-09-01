import Phaser from "phaser";

import state1 from "./state1";
import state2 from "./state2";

let game;

window.onload = () => {
  let gameConfig = {
    type: Phaser.AUTO,
    width: 550,
    height: 550,
    backgroundColor: 0x880044,
    scene: [state1, state2]
  };

  game = new Phaser.Game(gameConfig);
  window.game = game;

  window.focus();
  resize();
  window.addEventListener("resize", resize, false);
};

function resize() {
  let canvas = document.querySelector("canvas");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
