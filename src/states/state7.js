import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state7 extends Phaser.Scene {
  constructor() {
    super("state7");
  }

  preload() {}

  create() {
    const color = hexRgb("#ba3728", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state7;
