import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state5 extends Phaser.Scene {
  constructor() {
    super("state5");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state5;
