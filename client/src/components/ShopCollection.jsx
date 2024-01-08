import React, { useState } from "react";
import FilterButtons from "./subcomponent/FilterButtons";
import ExploreItem from "./subcomponent/ExploreItem";
import { useNavigate } from "react-router-dom";
import "./ShopCollection.scss";

export default function ShopCollection({ plants }) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleBackHomeClick = () => {
    // Use the navigate function to navigate to the "/explore" page
    navigate("/");

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  // Filter plants based on the selected filter
  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.type === selectedFilter)
    : plants;

  return (
    <div className="shopcollection-con">
      <div className="shopfilter-bar">
        <FilterButtons name={"Anthurium"} onFilterClick={handleFilterClick} />
        <FilterButtons name={"Monstera"} onFilterClick={handleFilterClick} />
        <FilterButtons name={"Orchid"} onFilterClick={handleFilterClick} />
        <FilterButtons
          name={"Philodendron"}
          onFilterClick={handleFilterClick}
        />
        <FilterButtons name={"Other"} onFilterClick={handleFilterClick} />
      </div>

      <div className="shoping-con">
        {filteredPlants.map((plant, index) => (
          <ExploreItem key={index} items={plant} />
        ))}
      </div>
      <div className="button-con">
        <button className="morebutton" onClick={handleBackHomeClick}>
          BACK HOME
        </button>
      </div>
    </div>
  );
}
