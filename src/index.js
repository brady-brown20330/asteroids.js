import { makeSprite, t } from "@replay/core";
import { Level } from "./level";

export const Game = makeSprite({
  render() {
    return [
      Level({
        id: "level",
      }),
    ]
  }
})

export const gameProps = {
  id: "Game",
  size: {
    width: 600,
    height: 900,
    maxHeightMargin: 150,
  },
  defaultFont: {
    name: "Helvetica",
    size: 24,
  },
};
