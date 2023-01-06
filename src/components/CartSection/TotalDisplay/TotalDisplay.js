import { ShopCartContext } from "../../../utils/ShopContext";
import { useContext } from "react";
import "./TotalDisplay.css";

const TotalDisplay = () => {
  const shopCart = useContext(ShopCartContext);
  const getPrice = shopCart.reduce(
    (total, { amount, price }) => total + price * amount,
    0
  );

  return getPrice ? (
    <p className="shopping-cart_total-display" data-testid="total-display">
      Total: <b>${getPrice}</b>
    </p>
  ) : null;
};

export default TotalDisplay;
