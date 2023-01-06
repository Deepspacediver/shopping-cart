import { ShopCartDispatchContext } from "../../../utils/ShopContext";
import Image from "../../Image/Image";
import "./Product.css";

import { useState, useContext } from "react";

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
    dispatch({
      type: "add",
      id: e.target.dataset.id,
      amount: Number(amount),
    });
  };
  return (
    <article className="product" data-id={id}>
      <figure className="product_img-wrapper">
        <Image src={src} alt={name} name="product_img" />
      </figure>
      <div className="product_info-wrapper">
        <h3 className="product_heading">{name}</h3>
        <p className="product_price" data-testid="price">
          {price}
        </p>
      </div>
      <div className="amount-wrapper">
        <button className="btn btn__product-decrement" onClick={handleDecrement}>
          -
        </button>
        <input
          className="product_amount-input"
          onChange={handleChange}
          type="number"
          min={1}
          value={amount}
        />
        <button className="btn btn__product-increment" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="btn btn__add-item" data-id={id} onClick={handleAdd}>
        Add To Cart
      </button>
    </article>
  );
};

export default Product;
