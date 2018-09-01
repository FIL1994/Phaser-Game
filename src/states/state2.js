import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state2 extends Phaser.Scene {
  constructor() {
    super("state2");
  }

  preload() {}

  create() {
    const color = hexRgb("#b1d8a2", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state2;
