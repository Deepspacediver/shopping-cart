import React from "react";
import Image from "../../Image/Image";
import "./CartItem.css"

const CartItem = ({
  id,
  name,
  src,
  amount,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) => {
  return (
    <article className="shopping-cart_item" key={id}>
      <figure className="shopping-cart_item-img-wrapper">
        <Image name="shopping-cart_item-img" src={src} alt={name} />
      </figure>

      <div className="shoppign-cart_item-info">
        <h3 className="shopping-cart_item-heading">{name}</h3>
        <div className="amount-wrapper" data-id={id}>
          <button className="btn btn__cart-decrement" onClick={handleDecrement}>
            -
          </button>
          <p
            className="shopping-cart_amount-display"
            data-testid="amount-display"
          >
            {amount}
          </p>
          <button className="btn btn__cart-increment" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className="btn btn__remove" onClick={handleRemove} data-id={id}>
          Remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
