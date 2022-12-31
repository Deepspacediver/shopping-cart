import { ShopCartContext } from "../../utils/ShopContext";
import { ReactComponent as CartSVG } from "../../assets/icons/shopping-cart.svg";
import { useContext } from "react";
import styled from "styled-components";

const CartPreview = () => {
  const shopCart = useContext(ShopCartContext);
  const getAmount = shopCart.reduce((total, curr) => total + curr.amount, 0);
  return (
    <>
      <CartSVG data-testid="svg" role="img" aria-labelledby="shopping-cart" />
      <StyledParagraph data-testid="cart-preview-display">
        {getAmount ? getAmount : ""}
      </StyledParagraph>
    </>
  );
};

const StyledParagraph = styled.span``;
export default CartPreview;
