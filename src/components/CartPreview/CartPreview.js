import { ShopCartContext } from "../../utils/ShopContext";
import { ReactComponent as CartSVG } from "../../assets/icons/shopping-cart.svg";
import { useContext } from "react";

const CartPreview = () => {
  const shopCart = useContext(ShopCartContext);
  const getAmount = shopCart.reduce((total, curr) => total + curr.amount, 0);
  return (
    <>
      <CartSVG
        width="32px"
        data-testid="svg"
        role="img"
        aria-labelledby="shopping-cart"
      />
      <p data-testid="cart-preview-display">{getAmount ? getAmount : ""}</p>
    </>
  );
};

export default CartPreview;
