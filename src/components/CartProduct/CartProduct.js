import React from "react";
import Image from "../Image/Image";
import styled from "styled-components";

const CartProduct = ({
  id,
  name,
  src,
  amount,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <CartProductWrapper key={id}>
      <h3>{name}</h3>
      <Image src={src} alt={name} />
      <CartProductAmountWrapper data-id={id}>
        <button onClick={handleIncrement}>+</button>
        <p data-testid="amount-display">{amount}</p>
        <button onClick={handleDecrement}>-</button>
      </CartProductAmountWrapper>
    </CartProductWrapper>
  );
};

const CartProductWrapper = styled.div``;
const CartProductAmountWrapper = styled.div``;
export default CartProduct;
