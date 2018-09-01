import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state4 extends Phaser.Scene {
  constructor() {
    super("state4");
  }

  preload() {}

  create() {
    const color = hexRgb("#8258ad", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state4;
