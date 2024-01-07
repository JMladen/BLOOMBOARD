import React from "react";
import Filter from "./subcomponent/FilterButtons";
import ExploreItem from "./subcomponent/ExploreItem";
import MoreButton from "./subcomponent/MoreButton";
import { useNavigate } from "react-router-dom";

import "./ShopCollection.scss";

export default function ShopCollection({ plants }) {
  const navigate = useNavigate();

  {
    plants.map((plant, index) => <ExploreItem key={index} items={plant} />);
  }
  return (
    <div className="shopcollection-con">
      <div className="shopfilter-bar">
        <Filter name={"Anthurium"} />
        <Filter name={"Monstera"} />
        <Filter name={"Orchid"} />
        <Filter name={"Philodendron"} />
        <Filter name={"Other"} />
      </div>

      <div className="shoping-con">
        {plants.map((plant, index) => (
          <ExploreItem key={index} items={plant} />
        ))}
      </div>
      <button className="morebutton" onClick={() => navigate("/")}>
        BACK HOME
      </button>
    </div>
  );
}
