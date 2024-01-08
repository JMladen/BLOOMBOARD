import React from "react";

import BestsellerCon from "./subcomponent/BestsellerCon";
import "./BestSellers.scss";
import { useNavigate } from "react-router-dom";

export default function BestSellers({ plants }) {
  const handleSeeMoreClick = () => {
    navigate("/explore");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const navigate = useNavigate();

  return (
    <div className="bs-container" id="bestseller">
      <h1>BEST SELLERS</h1>
      <BestsellerCon plants={plants} />
      <div className="button-con">
        <button className="morebutton" onClick={handleSeeMoreClick}>
          SEE MORE
        </button>
      </div>
    </div>
  );
}
