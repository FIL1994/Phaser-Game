import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state6 extends Phaser.Scene {
  constructor() {
    super("state6");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state6;
