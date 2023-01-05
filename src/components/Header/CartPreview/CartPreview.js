import { ShopCartContext } from "../../../utils/ShopContext";
import { ReactComponent as CartSVG } from "../../../assets/icons/shopping-cart.svg";
import { useContext } from "react";
import "./CartPreview.css";

const CartPreview = () => {
  const shopCart = useContext(ShopCartContext);
  const getAmount = shopCart.reduce((total, curr) => total + curr.amount, 0);
  return (
    <figure className="header-nav_icon-wrapper">
      <CartSVG
        className="header-nav_cart-icon"
        data-testid="svg"
        role="img"
        aria-labelledby="shopping-cart"
      />
      <figcaption
        className={`header-nav_cart-amount${
          getAmount ? "" : " header-nav_cart-amount--hidden"
        }`}
        data-testid="cart-preview-display"
      >
        {getAmount ? getAmount : ""}
      </figcaption>
    </figure>
  );
};

export default CartPreview;
