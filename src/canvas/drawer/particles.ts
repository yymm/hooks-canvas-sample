import * as React from "react";
import { IStore, framePerSec } from "../../store/reducer";
import { debug } from "../../lib/debug";

const velocity = 10; // 10 px/sec

const drawParticles = (state: IStore) => {
  const ctx = state.ctx!;
  state.particles.map(particle => {
    const vframe = state.frame * particle.velocity;
    ctx.beginPath();
    particle.x +=
      particle.r * Math.cos((2 * vframe * Math.PI) / 180 + particle.arg);
    particle.y +=
      particle.r * Math.sin((vframe * Math.PI) / 180 + particle.arg);
    const rad =
      particle.size *
      Math.abs(Math.cos((5 * vframe * Math.PI) / 180 + particle.size_arg));
    const startAng = 0;
    const endAng = Math.PI * 2;
    ctx.arc(particle.x, particle.y, rad, startAng, endAng);
    ctx.fill();
  });
};

export { drawParticles };
