import { ShopCartContext } from "../../utils/ShopContext";
import { useContext } from "react";

const TotalDisplay = () => {
  const shopCart = useContext(ShopCartContext);
  const getPrice = shopCart.reduce(
    (total, { amount, price }) => total + price * amount,
    0
  );

  return <p data-testid="total-display">Total: ${getPrice}</p>;
};

export default TotalDisplay;
