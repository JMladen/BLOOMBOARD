import React, { useState } from "react";
import FilterButtons from "./subcomponent/FilterButtons";
import CollectionItem from "./subcomponent/CollectionItem";
import "./OurCollection.scss";
import { useNavigate } from "react-router-dom";

export default function OurCollection({ plants }) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filterName) => {
    // Update the selected filter
    setSelectedFilter(filterName);
  };

  const handleSeeMoreClick = () => {
    // Use navigate function to navigate to the "/explore" page
    navigate("/explore");

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Filter plants based on the selected filter
  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.type === selectedFilter)
    : plants;

  return (
    <div className="collection-con" id="collection">
      <h1>OUR COLLECTION</h1>
      <div className="filter-bar">
        <FilterButtons name={"Anthurium"} onFilterClick={handleFilterClick} />
        <FilterButtons name={"Monstera"} onFilterClick={handleFilterClick} />
        <FilterButtons name={"Orchid"} onFilterClick={handleFilterClick} />
        <FilterButtons
          name={"Philodendron"}
          onFilterClick={handleFilterClick}
        />
        <FilterButtons name={"Other"} onFilterClick={handleFilterClick} />
      </div>
      <div className="img-con">
        {filteredPlants.map((plant, index) => (
          <CollectionItem key={index} items={plant} />
        ))}
      </div>

      <div className="button-con">
        <button className="morebutton" onClick={handleSeeMoreClick}>
          SEE MORE
        </button>
      </div>
    </div>
  );
}
