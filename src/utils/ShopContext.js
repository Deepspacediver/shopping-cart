import { createContext, useReducer } from "react";
import birdProducts from "./birdProducts";

export const ShopCartContext = createContext(null);
export const ShopCartDispatchContext = createContext(null);

const ShopCartProvider = ({ children }) => {
  const [shopCart, dispatch] = useReducer(shopCartReducer, []);
  return (
    <ShopCartContext.Provider value={shopCart}>
      <ShopCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShopCartDispatchContext.Provider>
    </ShopCartContext.Provider>
  );
};

export const shopCartReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const itemId = action.id;
      const newState = state.map((el) => {
        if (el.id === itemId) return { ...el, amount: el.amount + 1 };
        else return el;
      });
      return newState;
    }
    case "decrement": {
      const itemId = action.id;
      const newState = state.flatMap((el) => {
        if (el.id === itemId)
          return el.amount === 1 ? [] : [{ ...el, amount: el.amount - 1 }];
        else return [el];
      });
      return newState;
    }
    case "add": {
      const itemId = action.id;
      const amount = action.amount;
      console.log(state)
      const stateCopy = [...state];
      const indexInState = stateCopy.findIndex((el) => el.id === itemId);

      if (indexInState !== -1) {
        stateCopy[indexInState].amount += amount;
        return stateCopy;
      } else {
        const birdProduct = birdProducts.find((el) => el.id === itemId);
        return [...state, { ...birdProduct, amount: amount }];
      }
    }
    default:
      throw new Error(`Unkown action type: ${action.type}`);
  }
};

const findBirdIndex = (itemId, arr) => arr.findIndex((el) => el.id === itemId);

export default ShopCartProvider;
