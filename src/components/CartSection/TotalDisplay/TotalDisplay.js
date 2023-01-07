import { ShopCartContext } from "../../../utils/ShopContext";
import { useContext } from "react";
import "./TotalDisplay.css";

const TotalDisplay = () => {
  const shopCart = useContext(ShopCartContext);
  const getPrice = shopCart.reduce(
    (total, { amount, price }) => total + price * amount,
    0
  );

  return (
    <div className="shopping-cart_total-wrapper">
      <p className="shopping-cart_total-caption">Total: </p>
      <p className="shopping-cart_total-display" data-testid="total-display">
        <b>${getPrice}</b>
      </p>
    </div>
  );
};

export default TotalDisplay;
