// import React, { useState } from "react";
// import FilterButtons from "./subcomponent/FilterButtons";
// import ExploreItem from "./subcomponent/ExploreItem";
// import MoreButton from "./subcomponent/MoreButton";
// import { useNavigate } from "react-router-dom";

// import "./ShopCollection.scss";

// export default function ShopCollection({ plants }) {
//   const navigate = useNavigate();
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   const handleFilterClick = (filterName) => {
//     // Update the selected filter
//     setSelectedFilter(filterName);
//   };

//   {
//     plants.map((plant, index) => <ExploreItem key={index} items={plant} />);
//   }
//   return (
//     <div className="shopcollection-con">
//       <div className="shopfilter-bar">
//         <FilterButtons name={"Anthurium"} />
//         <FilterButtons name={"Monstera"} />
//         <FilterButtons name={"Orchid"} />
//         <FilterButtons name={"Philodendron"} />
//         <FilterButtons name={"Other"} />
//       </div>

//       <div className="shoping-con">
//         {plants.map((plant, index) => (
//           <ExploreItem key={index} items={plant} />
//         ))}
//       </div>
//       <button className="morebutton" onClick={() => navigate("/")}>
//         BACK HOME
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";
import FilterButtons from "./subcomponent/FilterButtons";
import ExploreItem from "./subcomponent/ExploreItem";
import { useNavigate } from "react-router-dom";
import "./ShopCollection.scss";

export default function ShopCollection({ plants }) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filterName) => {
    // Update the selected filter
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
      <button className="morebutton" onClick={() => navigate("/")}>
        BACK HOME
      </button>
    </div>
  );
}
