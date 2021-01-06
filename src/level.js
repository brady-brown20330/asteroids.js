import { makeSprite } from "@replay/core";
import { Ship } from "./ship";

export const Level = makeSprite({
  init() {
    return {
      shipY: 0,
      shipX: 0,
    };
  },

  loop({ state, device }) {
    let { shipY, shipX } = state;

    const { inputs } = device;

    // shipGravity += 0.8;
    // shipY -= shipGravity;
    if (inputs.keysJustPressed["ArrowUp"]) {
      shipY += 4;
    }

    if (inputs.keysJustPressed["ArrowDown"]) {
      shipY -= 4;
    }

    if (inputs.keysJustPressed["ArrowLeft"]) {
      shipX -= 4;
    }

    if (inputs.keysJustPressed["ArrowRight"]) {
      shipX += 4;
    }

    return {
      // shipGravity,
      shipY,
      shipX,
    };
  },

  render({ state }) {
    return [
      Ship({
        id: "ship",
        x: state.shipX,
        y: state.shipY,
      }),
    ];
  },
});
