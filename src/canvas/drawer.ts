import * as React from "react";
import { StoreWithAction } from "../store";
import { IStore } from "../store/reducer";
import { drawParticles } from "./drawer/particles";

const draw = (state: IStore) => {
  if (state.ctx) {
    state.ctx.clearRect(0, 0, 600, 400);
    drawParticles(state);
  }
};

export { draw };
