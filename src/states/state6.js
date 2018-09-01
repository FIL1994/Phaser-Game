import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state6 extends Phaser.Scene {
  constructor() {
    super("state6");
  }

  preload() {}

  create() {
    const color = hexRgb("#4c0320", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state6;
