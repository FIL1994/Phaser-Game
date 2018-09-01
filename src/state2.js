import Phaser from "phaser";

class state2 extends Phaser.Scene {
  constructor() {
    super("state2");
  }

  preload() {
      console.log("preload")
  }

  create() {
    console.log("create")
  }

  update() {
  }
}

export default state2;
