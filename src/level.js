import { makeSprite, t } from "@replay/core";
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

  render({ state, device }) {
    const { size } = device;
    return [
      t.rectangle({
        color: "#1d2951",
        width: size.width + size.widthMargin * 2,
        height: size.height + size.heightMargin * 2,
      }),
      Ship({
        id: "ship",
        x: state.shipX,
        y: state.shipY,
      }),
    ];
  },
});
