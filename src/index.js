import Phaser from "phaser";

import state0 from "./states/state0";
import state1 from "./states/state1";
import state2 from "./states/state2";
import state3 from "./states/state3";
import state4 from "./states/state4";
import state5 from "./states/state5";
import state6 from "./states/state6";
import state7 from "./states/state7";
import state8 from "./states/state8";
import state9 from "./states/state9";

let game;

window.onload = () => {
  let gameConfig = {
    type: Phaser.AUTO,
    width: 550,
    height: 550,
    backgroundColor: 0x880044,
    scene: [
      state0,
      state1,
      state2,
      state3,
      state4,
      state5,
      state6,
      state7,
      state8,
      state9
    ]
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
