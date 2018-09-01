import Phaser from "phaser";
import hexRgb from "hex-rgb";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state9 extends Phaser.Scene {
  constructor() {
    super("state9");
  }

  preload() {}

  create() {
    const color = hexRgb("#74afac", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);
  }

  update() {}
}

export default state9;
