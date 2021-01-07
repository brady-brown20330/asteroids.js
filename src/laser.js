import { makeSprite, t } from "@replay/core";

export const laserWidth = 5;
export const laserheight = 15;

export const Laser = makeSprite({
  render() {
    return [
      t.rectangle({
        width: laserWidth,
        height: laserheight,
        color: "red",
      }),
    ];
  },
});
