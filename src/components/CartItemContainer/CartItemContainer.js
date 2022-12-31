import React, { useContext } from "react";
import {
  ShopCartContext,
  ShopCartDispatchContext,
} from "../../utils/ShopContext";
import CartItem from "../CartItem/CartItem";

const CartItemContainer = () => {
  const shopCart = useContext(ShopCartContext);
  const dispatch = useContext(ShopCartDispatchContext);
  const handleIncrement = (e) => {
    dispatch({
      type: "increment",
      id: e.target.parentElement.dataset.id,
    });
  };
  const handleDecrement = (e) => {
    dispatch({
      type: "decrement",
      id: e.target.parentElement.dataset.id,
    });
  };

  const handleRemove = (e) => {
    dispatch({
      type: "remove",
      id: e.target.dataset.id,
    });
  };

  return shopCart.map((el) => {
    return (
      <React.Fragment key={el.id}>
        <CartItem
          id={el.id}
          name={el.name}
          src={el.src}
          amount={el.amount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemove={handleRemove}
        />
      </React.Fragment>
    );
  });
};
// Provide context and reducer when rendering in tests
export default CartItemContainer;
