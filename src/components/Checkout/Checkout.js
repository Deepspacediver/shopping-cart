import { ShopCartDispatchContext } from "../../utils/ShopContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useContext(ShopCartDispatchContext);
  const handleCheckout = () => dispatch({ type: "checkout" });
  return (
    <>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => navigate("/shop")}>Continue Shopping</button>
    </>
  );
};

export default Checkout;
