export interface Particle {
  x: number;
  y: number;
  r: number;
  arg: number;
  size: number;
  size_arg: number;
  velocity: number;
}

interface IStore {
  start: boolean;
  stop: boolean;
  startTime: number;
  frame: number;
  fps: number;
  spendTime: number;
  ctx?: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  particles: Particle[];
}

export const framePerSec = 60; // 60fps
export const frameLimit = 60 * framePerSec; // 1min
const initialWidth = 600;
const initialHeight = 400;

const particles = Array(500)
  .fill(0)
  .map(() => {
    return {
      x: Math.floor(Math.random() * (initialWidth + 200)),
      y: Math.floor(Math.random() * (initialHeight + 100)),
      r: 10 - Math.floor(Math.random() * 20),
      arg: (Math.floor(Math.random() * 360) * Math.PI) / 180,
      size: Math.floor(Math.random() * 25) + 1,
      size_arg: (Math.floor(Math.random() * 360) * Math.PI) / 180,
      velocity: Math.floor(Math.random() * 2),
    };
  });
// const particles = [{ x: 100, y: 100 }];

const initialStore = {
  start: false,
  stop: true,
  frame: 0,
  fps: 1,
  spendTime: 0,
  startTime: 0,
  ctx: null,
  canvasWidth: initialWidth,
  canvasHeight: initialHeight,
  particles: particles,
};

interface IAction {
  payload: IStore;
  error?: boolean;
}

const reducer: React.Reducer<IStore, IAction> = (state, action) => {
  return { ...action.payload };
};

export { IStore, IAction, initialStore, reducer };
