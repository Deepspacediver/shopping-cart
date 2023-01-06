import React, { useContext } from "react";
import {
  ShopCartContext,
  ShopCartDispatchContext,
} from "../../../utils/ShopContext";
import CartItem from "../CartItem/CartItem";
import "./CartItemContainer.css";

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

  return (
    <div className="shopping-cart_item-container">
      {shopCart.map((el) => {
        return (
          <CartItem
            key={el.id}
            id={el.id}
            name={el.name}
            src={el.src}
            amount={el.amount}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};
// Provide context and reducer when rendering in tests
export default CartItemContainer;
