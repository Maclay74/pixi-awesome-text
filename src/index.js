import Renderer from "./renderer";
import Text from "./new";
import Layout from "./layout";

Object.assign(PIXI.extras, {
  AwesomeText: Text
});

if (typeof PIXI !== 'undefined') {
  if (PIXI.extras) {
    PIXI.extras.AwesomeText = Text;
  } else {
    PIXI.extras = { AwesomeText: Text};
  }
}

export {
  Text,
  Renderer,
  Layout
}

