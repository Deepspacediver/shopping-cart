import { useContext } from "react";
import { ShopCartContext } from "../../utils/ShopContext";

import Checkout from "./Checkout/Checkout";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import Image from "../Image/Image";
import EmptyCartBird from "../../assets/icons/parrot-empty-cart.webp";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const shopCart = useContext(ShopCartContext);

  const filledCart = (
    <>
      <CartItemContainer />
      <div
        className="shopping-cart_purchase-wrapper"
        data-testid="purchase-wrapper"
      >
        <TotalDisplay />
        <Checkout />
      </div>
    </>
  );

  const emptyCart = (
    <div className="shopping-cart_empty-cart" data-testid="empty-cart">
      <figure name="shopping-cart_empty-cart-img-wrapper">
        <Image
          src={EmptyCartBird}
          name="shopping-cart_empty-cart-img"
          alt={"menacingly-looking-bird"}
        ></Image>
      </figure>
      <p className="shopping-cart_empty-cart-info">Nothing here...</p>
    </div>
  );

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart_heading">Your Cart</h2>
      {shopCart.length ? filledCart : emptyCart}
    </div>
  );
};

export default ShoppingCart;
