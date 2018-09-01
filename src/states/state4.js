import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state4 extends Phaser.Scene {
  constructor() {
    super("state4");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);

    console.log("Start state 4")
  }

  update() {}
}

export default state4;
