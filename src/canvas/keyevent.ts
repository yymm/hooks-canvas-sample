import * as React from "react";
import { StoreWithAction } from "../store";

const useKeyPress = (keycode: string, action: () => void) => {
  const [keyPressed, setKeyPressed] = React.useState(false);
  const downHandler = ({ key }: KeyboardEvent) => {
    keycode === key ? action() : null;
  };
  const upHandler = ({ key }: KeyboardEvent) =>
    keycode === key ? setKeyPressed(false) : null;
  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};

const keyEvent = ({ state, dispatch }: StoreWithAction) => {
  useKeyPress("ArrowUp", () => {
    dispatch({ payload: state });
  });

  useKeyPress("ArrowDown", () => {
    dispatch({ payload: state });
  });

  useKeyPress("ArrowLeft", () => {
    dispatch({ payload: state });
  });

  useKeyPress("ArrowRight", () => {
    dispatch({ payload: state });
  });
};

export { keyEvent };
