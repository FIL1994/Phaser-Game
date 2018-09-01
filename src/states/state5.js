import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state5 extends Phaser.Scene {
  constructor() {
    super("state5");
  }

  preload() {}

  create() {
    const color = hexRgb("#0e1f68", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state5;
