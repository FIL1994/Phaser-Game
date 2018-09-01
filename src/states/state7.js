import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state7 extends Phaser.Scene {
  constructor() {
    super("state7");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state7;
