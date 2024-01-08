import React from "react";
import ShopCollection from "./ShopCollection";
import "./Explore.scss";
import { useNavigate } from "react-router-dom";

import back from "../images/back.png";

export default function Explore({ plants }) {
  const navigate = useNavigate();

  const [cartcount, setcartcount] = React.useState(true);

  function toggleState() {
    setcartcount((state) => !state);
  }

  return (
    <div id="explore-page">
      <div className="alt-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          <img className="img-logo" src={back} alt="back" />
        </button>

        <button onClick={toggleState} className="cart-btn">
          {cartcount ? "Cart" : "Back to shop"}
        </button>
        {cartcount && <p className="cart-item-count">1</p>}
      </div>
      {cartcount && <ShopCollection plants={plants} />}
    </div>
  );
}
