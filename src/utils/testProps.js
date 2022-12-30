import {
  shopCartReducer,
  ShopCartContext,
  ShopCartDispatchContext,
} from "./ShopContext";
import { useReducer } from "react";

const ContextWrapperProp = ({ children, stateProp }) => {
  const [state, dispatch] = useReducer(shopCartReducer, stateProp);
  return (
    <ShopCartContext.Provider value={state}>
      <ShopCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShopCartDispatchContext.Provider>
    </ShopCartContext.Provider>
  );
};


export { ContextWrapperProp};
