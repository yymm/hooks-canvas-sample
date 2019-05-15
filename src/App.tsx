import * as React from "react";
import Canvas from "./canvas";
import Menu from "./menu";
import { StoreProvider } from "./store";

const App = () => {
  return (
    <StoreProvider>
      <Canvas />
      <Menu />
    </StoreProvider>
  );
};

export default App;
