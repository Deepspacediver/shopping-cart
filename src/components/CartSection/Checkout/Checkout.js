import { ShopCartDispatchContext } from "../../../utils/ShopContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useContext(ShopCartDispatchContext);
  const handleCheckout = () => dispatch({ type: "checkout" });
  return (
    <>
      <button className="btn btn--continue" onClick={() => navigate("/shop")}>
        Continue Shopping
      </button>
      <button className="btn btn--checkout" onClick={handleCheckout}>
        Checkout
      </button>
    </>
  );
};

export default Checkout;
