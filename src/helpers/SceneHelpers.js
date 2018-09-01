function SceneHelpers(Class) {
  return (...args) => {
    let c = new Class(...args);

    c.getGame = () => c.scene.manager.game;

    const innerCreate = c.create;
    c.create = function(...args) {
      console.log("Starting scene: " + c.scene.key);
      innerCreate.bind(c)();
    };

    c.isActiveScene = () => {
      return c.getGame().scene.isActive(c.scene.key);
    };

    return c;
  };
}

export default SceneHelpers;
