import React, { useContext } from "react";
import { Context } from "../../Context";
import "./CartItem.scss";

export default function CartItem({ items }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="CartItem">
      <img src={items.urls.small} alt="plant" />
      <p className="description">{items.alt_description}</p>
      <p className="price">${items.likes}</p>
      <button onClick={() => removeFromCart(items.id)}>Remove from cart</button>
    </div>
  );
}
