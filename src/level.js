import { makeSprite } from "@replay/core";
import { Ship } from "./ship";

const shipX = 0;

export const Level = makeSprite({
  init() {
    return {
      shipY: 10,
    };
  },
  render({ state }) {
    return [
      Ship({
        id: "ship",
        x: shipX,
        y: state.shipY,
      }),
    ];
  },
});
