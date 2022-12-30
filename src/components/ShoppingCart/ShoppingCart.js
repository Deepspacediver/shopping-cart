import React, { useContext } from "react";
import {
  ShopCartContext,
  ShopCartDispatchContext,
} from "../../utils/ShopContext";
import CartProduct from "../CartProduct/CartProduct";

const ShoppingCart = () => {
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

  return shopCart.map((el) => {
    return (
      <React.Fragment key={el.id}>
        <CartProduct
          id={el.id}
          name={el.name}
          src={el.src}
          amount={el.amount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </React.Fragment>
    );
  });
};
// Provide context and reducer when rendering in tests
export default ShoppingCart;
