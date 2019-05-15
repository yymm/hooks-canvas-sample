import * as React from "react";
import { Store, StoreWithAction } from "../store";
import { IStore } from "../store/reducer";
import { draw } from "./drawer";
import { keyEvent } from "./keyevent";
import "./canvass.sass";

const Canvas = () => {
  const { state, dispatch } = React.useContext(Store);

  // prepare canvas
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (canvasRef.current) {
      state.ctx = canvasRef.current.getContext("2d");
      dispatch({ payload: state });
    }
  }, [canvasRef]);

  // draw event
  React.useEffect(() => {
    draw(state);
  }, [state.frame]);

  // key event
  keyEvent({ state, dispatch });

  return (
    <div className="canvas-container">
      <canvas
        className="canvas-main"
        ref={canvasRef}
        width={state.canvasWidth}
        height={state.canvasHeight}
      />
    </div>
  );
};

export default Canvas;
