import Phaser from "phaser";
import hexRgb from "hex-rgb";

window.Phaser = Phaser;

class state0 extends Phaser.Scene {
  constructor() {
    super("state0");
  }

  preload() {
    console.log(game.scene.isActive(this.scene.key));
  }

  create() {
    const color = hexRgb("#DDDDDD", { format: "array" });
    game.config.backgroundColor.setTo(...color);

    console.log(this.scene.key, this);

    this.input.keyboard.on(
      Phaser.Input.Keyboard.KeyCodes.ONE,
      this.changeState
    );
  }

  changeState(event, stateNum) {
    console.log("E", event);
    game.start("state" + stateNum);
  }

  update() {}
}

export default state0;
