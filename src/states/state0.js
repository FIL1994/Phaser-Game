import Phaser from "phaser";
import hexRgb from "hex-rgb";
import Mousetrap from "mousetrap";
import _ from "lodash";

import SceneHelpers from "../helpers/SceneHelpers";

@SceneHelpers
class state0 extends Phaser.Scene {
  constructor() {
    super("state0");
  }

  preload() {
  }

  create() {
    const color = hexRgb("#5e78a0", { format: "array" });
    this.scene.manager.game.config.backgroundColor.setTo(...color);

    _.range(0, 10).forEach(v => {
      Mousetrap.bind(v.toString(), e => {
        this.changeState(e, v);
      });
    });
  }

  changeState(event, stateNum) {
    this.getGame().scene.start("state" + stateNum);
  }

  update() {}
}

export default state0;
