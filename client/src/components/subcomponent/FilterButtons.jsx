import React from "react";
import "./FilterButtons.scss";

export default function FilterButtons({ name, onFilterClick }) {
  const handleFilterClick = () => {
    // Call the onFilterClick function with the selected filter name
    onFilterClick(name);
  };

  return (
    <button className="filter-button" onClick={handleFilterClick}>
      {name}
    </button>
  );
}
