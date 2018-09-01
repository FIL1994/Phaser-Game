import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state3 extends Phaser.Scene {
  constructor() {
    super("state3");
  }

  preload() {}

  create() {
    const color = hexRgb("#c4b38f", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state3;
