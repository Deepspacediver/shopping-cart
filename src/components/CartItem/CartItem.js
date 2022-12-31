import React from "react";
import Image from "../Image/Image";
import styled from "styled-components";

const CartItem = ({
  id,
  name,
  src,
  amount,
  handleIncrement,
  handleDecrement,
  handleRemove
}) => {
  return (
    <CartItemWrapper key={id}>
      <h3>{name}</h3>
      <Image src={src} alt={name} />
      <CartItemAmountWrapper data-id={id}>
        <button onClick={handleIncrement}>+</button>
        <p data-testid="amount-display">{amount}</p>
        <button onClick={handleDecrement}>-</button>
      </CartItemAmountWrapper>
      <button onClick={handleRemove} data-id={id}>Remove</button>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div``;
const CartItemAmountWrapper = styled.div``;
export default CartItem;
