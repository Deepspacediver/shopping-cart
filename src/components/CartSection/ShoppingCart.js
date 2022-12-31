import Checkout from "./Checkout/Checkout";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import TotalDisplay from "./TotalDisplay/TotalDisplay";
const ShoppingCart = () => {
  return (
    <>
      <h3>Your Cart</h3>
      <CartItemContainer />
      <TotalDisplay />
      <Checkout />
    </>
  );
};

export default ShoppingCart;
