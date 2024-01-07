import React from "react";
import CartPage from "./CartPage";
import ShopCollection from "./ShopCollection";
import "./Explore.scss";
import { useNavigate } from "react-router-dom";

import back from "../images/back.png";

export default function Explore({ plants }) {
  // const [cartView, setCartView] = React.useState(true);
  const navigate = useNavigate();

  const [cartstat, setCartstat] = React.useState(true);
  function toggleState() {
    if (cartstat) {
      setCartstat(false);
    } else {
      setCartstat(true);
    }
  }

  return (
    <div id="explore-page">
      <div className="alt-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          <img className="img-logo" src={back} alt="back" />
        </button>

        <button onClick={toggleState} className="cart-btn">
          {cartstat ? "Cart" : "Back to shop"}
        </button>
        {cartstat && <p className="cart-item-count">1</p>}
        {/* {cartstat && <p className="cart-item-count">2</p>} */}
      </div>
      {/* {cartstat && <ShopCollection />} */}
      {cartstat === false && <CartPage />}
      <div>
        <ShopCollection plants={plants} />
      </div>
    </div>
  );
}
