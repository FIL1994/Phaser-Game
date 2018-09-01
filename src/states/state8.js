import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state8 extends Phaser.Scene {
  constructor() {
    super("state8");
  }

  preload() {}

  create() {
    const color = hexRgb("#dfe5a0", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state8;
