import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state1 extends Phaser.Scene {
  constructor() {
    super("state1");
  }

  preload() {}

  create() {
    const color = hexRgb("#7ad69a", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state1;
