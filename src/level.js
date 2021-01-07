import { makeSprite, t } from "@replay/core";
import { Ship } from "./ship";
import { Laser } from "./laser";

export const Level = makeSprite({
  init() {
    return {
      shipY: 0,
      shipX: 0,
      laserSpeed: 0,
    };
  },

  loop({ state, device }) {
    let { shipY, shipX, laserSpeed } = state;

    const { inputs } = device;

    //move ship up
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

    if (
      inputs.keysJustPressed["ArrowRight"] &&
      inputs.keysJustPressed["ArrowUp"]
    ) {
      shipX += 4;
      shipY += 4;
    }

    if (inputs.keysJustPressed[" "]) {
      laserSpeed += 12;
    }

    return {
      // shipGravity,
      shipY,
      shipX,
      laserSpeed,
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
      Laser({
        id: "laser",
        x: state.shipX,
        y: state.shipY + 35,
      }),
    ];
  },
});
