import { makeSprite, t } from "@replay/core";

export const shipWidth = 30;
export const shipheight = 50;

export const Ship = makeSprite({
  render() {
    return [
      t.rectangle({
        width: shipWidth,
        height: shipheight,
        color: "grey",
      }),
    ];
  },
});
