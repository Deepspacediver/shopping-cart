import Checkout from "./Checkout/Checkout";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart_heading">Your Cart</h2>
      <CartItemContainer />
      <div className="shopping-cart_purchase-wrapper">
        <TotalDisplay />
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;
