import { ShopCartDispatchContext } from "../../utils/ShopContext";
import Image from "../Image/Image";

import { useState, useContext } from "react";
import styled from "styled-components";

const Product = ({ id, name, price, src }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useContext(ShopCartDispatchContext);

  const handleIncrement = () => setAmount(Number(amount) + 1);
  const handleDecrement = () => {
    if (amount === 1) return;
    setAmount(Number(amount) + -1);
  };
  const handleChange = (e) => setAmount(e.target.value);
  const handleAdd = (e) => {
    // console.log(amount)
    dispatch({
      type: "add",
      id: e.target.dataset.id,
      amount: Number(amount),
    });
  };
  return (
    <StyledProduct data-id={id}>
      <Image src={src} alt={name} />
      <h3>{name}</h3>
      <p data-testid="price">{price}</p>
      <>
        <button onClick={handleDecrement}>-</button>
        <input onChange={handleChange} type="number" min={1} value={amount} />
        <button onClick={handleIncrement}>+</button>
      </>
      <button data-id={id} onClick={handleAdd}>
        Add To Cart
      </button>
    </StyledProduct>
  );
};

const StyledProduct = styled.div``;
export default Product;
