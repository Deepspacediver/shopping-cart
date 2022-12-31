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
      const indexInState = state.findIndex((el) => el.id === itemId);

      if (indexInState !== -1) {
        /* Returns new array instead of a shallow copy,
         previously Strict Mode detected possible bug of doubling the amount assigned  */
        return [
          ...state.slice(0, indexInState),
          {
            ...state[indexInState],
            amount: state[indexInState].amount + amount,
          },
          ...state.slice(indexInState + 1),
        ];
      } else {
        const birdProduct = birdProducts.find((el) => el.id === itemId);
        return [...state, { ...birdProduct, amount: amount }];
      }
    }
    case "remove": {
      const id = action.id
      return state.flatMap((el) => (el.id === id ? [] : el));
    }
    case "checkout": {
      return [];
    }
    default:
      throw new Error(`Unkown action type: ${action.type}`);
  }
};

// const removeFromArray = (arr, id) =>
//   arr.flatMap((el) => (el.id === id ? [] : el));

export default ShopCartProvider;
