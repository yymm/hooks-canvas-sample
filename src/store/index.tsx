import * as React from "react";
import { IStore, IAction, initialStore, reducer } from "./reducer";

interface StoreWithAction {
  state: IStore;
  dispatch: React.Dispatch<IAction>;
}
const Store = React.createContext<StoreWithAction>({
  state: initialStore,
  dispatch: () => {},
});

const StoreProvider: React.FC<React.Props<{}>> = props => {
  const [state, dispatch] = React.useReducer(reducer, initialStore);
  return (
    <Store.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider, StoreWithAction };
