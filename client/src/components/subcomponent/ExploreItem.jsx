import React, { useContext } from "react";
// import { Context } from "../../Context";
import "./CollectionItem.scss";

export default function CollectionItem({ items }) {
  // const { addToCart } = useContext(Context);

  return (
    <div className="collection-item">
      <img src={items.img} className="image" alt="plant" />
      <div className="desc-con">
        <p className="description">{items.subtype}</p>
      </div>
      <div className="bottom-con">
        <p className="price">{`$${items.price}`}</p>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </div>
  );
}
