import * as React from "react";
import { Store } from "../store";
import { framePerSec, frameLimit } from "../store/reducer";
import { debug } from "../lib/debug";
import { float2str } from "../lib/helper";

const Menu = () => {
  const { state, dispatch } = React.useContext(Store);

  const [requestID, setRequestID] = React.useState(0);

  const animation = () => {
    if (state.frame < frameLimit) {
      const now = new Date().getTime();
      const spendTime = (now - state.startTime) / 1000;
      state.frame += 1;
      state.fps = state.frame / spendTime;
      state.spendTime = spendTime;
      dispatch({ payload: state });
      const requestID = window.requestAnimationFrame(animation);
      setRequestID(requestID);
    }
  };

  const start = () => {
    state.start = true;
    state.startTime = new Date().getTime();
    dispatch({ payload: state });
    const requestID = window.requestAnimationFrame(animation);
    setRequestID(requestID);
  };

  const stop = () => {
    window.cancelAnimationFrame(requestID);
  };

  return (
    <div style={{ width: state.canvasWidth, margin: "0 auto" }}>
      <div>
        <h3>Menu</h3>
        <button onClick={() => start()}>start</button>
        <button onClick={() => stop()}>stop</button>
        <p>TIME: {float2str(state.spendTime, 0)} sec</p>
        <p>{float2str(state.fps)} FPS</p>
      </div>
      <div>
        <h3>debug</h3>
        <p>frame: {state.frame}</p>
        <p>frame/60: {float2str(state.frame / framePerSec)}</p>
      </div>
    </div>
  );
};

export default Menu;
