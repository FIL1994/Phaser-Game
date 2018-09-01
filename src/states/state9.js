import Phaser from "phaser";
import hexRgb from "hex-rgb";

class state9 extends Phaser.Scene {
  constructor() {
    super("state9");
  }

  preload() {}

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state9;
