import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state1 extends Phaser.Scene {
  constructor() {
    super("state1");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state1;
