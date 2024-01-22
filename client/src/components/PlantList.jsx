// import React from "react";

// const PlantList = ({ plants, addToCart }) => {
//   return (
//     <section>
//       <h2>Plants</h2>
//       <ul>
//         {plants.map((plant) => (
//           <li key={plant.id}>
//             <img src={plant.img} alt={plant.subtype} />
//             <h3>{plant.subtype}</h3>
//             <p>{plant.desc}</p>
//             <p>${plant.price}</p>
//             <button onClick={() => addToCart(plant)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default PlantList;

// import React, { useState, useEffect } from "react";
// // import "./PlantList.scss";
// import FilterButtons from "./FilterButtons";

// export default function PlantList({ plants, addToCart }) {
//   const [filteredPlants, setFilteredPlants] = useState(plants);
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   useEffect(() => {
//     // Update filteredPlants whenever plants or selectedFilter changes
//     filterPlants();
//   }, [plants, selectedFilter]);

//   const filterPlants = () => {
//     if (selectedFilter === "All") {
//       setFilteredPlants(plants);
//     } else {
//       // Filter plants based on the selected filter
//       const filtered = plants.filter(
//         (plant) => plant.type.toLowerCase() === selectedFilter.toLowerCase()
//       );
//       setFilteredPlants(filtered);
//     }
//   };

//   const handleFilterClick = (filter) => {
//     // Update the selectedFilter state when a filter button is clicked
//     setSelectedFilter(filter);
//   };

//   return (
//     <div>
//       <div className="filter-buttons">
//         {/* <FilterButtons name="All" onFilterClick={handleFilterClick} />
//         <FilterButtons name="Indoor" onFilterClick={handleFilterClick} />
//         <FilterButtons name="Outdoor" onFilterClick={handleFilterClick} /> */}
//         <FilterButtons name={"Anthurium"} onFilterClick={handleFilterClick} />
//         <FilterButtons name={"Monstera"} onFilterClick={handleFilterClick} />
//         <FilterButtons name={"Orchid"} onFilterClick={handleFilterClick} />
//         <FilterButtons
//           name={"Philodendron"}
//           onFilterClick={handleFilterClick}
//         />
//         <FilterButtons name={"Other"} onFilterClick={handleFilterClick} />
//       </div>
//       <div className="plant-list">
//         {filteredPlants.map((plant) => (
//           <div key={plant.id} className="plant-card">
//             {/* Plant details and addToCart functionality */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import "./PlantList.scss";
// // import FilterButtons from "./FilterButtons";

// const PlantList = ({ plants, addToCart }) => {
//   const [selectedPlantType, setSelectedPlantType] = useState("All");

//   const handleFilterChange = (plantType) => {
//     // Update the selected plant type
//     setSelectedPlantType(plantType);
//   };

//   // Function to filter plants based on the selected plant type
//   const filterPlants = () => {
//     if (selectedPlantType === "All") {
//       return plants; // Return all plants if no filter is applied
//     } else {
//       return plants.filter((plant) => plant.type === selectedPlantType);
//     }
//   };

//   const filteredPlants = filterPlants();

//   return (
//     <section className="plant-con">
//       {/* <h2>Plants</h2> */}
//       {/* Plant type filter buttons */}
//       <div className="shopfilter-bar">
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("All")}
//         >
//           All
//         </button>
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("Anthurium")}
//         >
//           Anthurium
//         </button>
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("Monstera")}
//         >
//           Monstera
//         </button>
//         {/* Add more buttons for other plant types */}
//       </div>
//       <ul>
//         {/* Display the filtered plants */}
//         {filteredPlants.map((plant) => (
//           <li key={plant.id}>
//             <img src={plant.img} alt="Missing Image" />
//             <h3>{plant.subtype}</h3>
//             <p>{plant.desc}</p>
//             <p>${plant.price}</p>
//             <button onClick={() => addToCart(plant)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default PlantList;
// PlantList.jsx

// import React, { useState } from "react";
// import "./PlantList.scss";
// import FilterButtons from "./FilterButtons";
// import { useNavigate } from "react-router-dom";

// import back from "../images/back.png";
// import { HiOutlineShoppingBag } from "react-icons/hi";

// const PlantList = ({ plants, addToCart }) => {
//   const [selectedPlantType, setSelectedPlantType] = useState("All");
//   const [cartcount, setCartCount] = useState(0);

//   const navigate = useNavigate();

//   const toggleState = () => {
//     navigate("/cart");
//   };

//   const handleFilterChange = (plantType) => {
//     setSelectedPlantType(plantType);
//   };

//   const filterPlants = () => {
//     if (selectedPlantType === "All") {
//       return plants;
//     } else {
//       return plants.filter((plant) => plant.type === selectedPlantType);
//     }
//   };

//   const filteredPlants = filterPlants();

//   return (
//     <section className="plant-con">
//       <div className="alt-nav">
//         <button className="back-btn" onClick={() => navigate("/")}>
//           <img className="img-logo" src={back} alt="back" />
//         </button>

//         <button onClick={toggleState} className="cart-btn">
//           <HiOutlineShoppingBag className="shoppingbag shopping-bag" />

//           {/* {cartcount > 0 ? `(${cartcount})` : ""} */}
//           {cartcount > 0 && <p className="cart-item-count">{cartcount}</p>}
//         </button>
//       </div>

//       <div className="shopfilter-bar">
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("All")}
//         >
//           All
//         </button>
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("Anthurium")}
//         >
//           Anthurium
//         </button>
//         <button
//           className="filter-button"
//           onClick={() => handleFilterChange("Monstera")}
//         >
//           Monstera
//         </button>
//         {/* Add more buttons for other plant types */}
//       </div>
//       <ul className="plant-list">
//         {filteredPlants.map((plant) => (
//           <li key={plant.id} className="plant-item">
//             <img src={plant.img} alt="Missing Image" />
//             <h3>{plant.subtype}</h3>
//             {/* <p>{plant.desc}</p> */}
//             <p>${plant.price}</p>
//             <button onClick={() => addToCart(plant)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default PlantList;
import React, { useState } from "react";
import "./PlantList.scss";
import FilterButtons from "./FilterButtons";
import { useNavigate } from "react-router-dom";

import back from "../images/back.png";
import { HiOutlineShoppingBag } from "react-icons/hi";

const PlantList = ({ plants, addToCart }) => {
  const [selectedPlantType, setSelectedPlantType] = useState("All");
  const [cartcount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const toggleState = () => {
    navigate("/cart");
  };

  const handleFilterChange = (plantType) => {
    setSelectedPlantType(plantType);
  };

  const filterPlants = () => {
    if (selectedPlantType === "All") {
      return plants;
    } else {
      return plants.filter((plant) => plant.type === selectedPlantType);
    }
  };

  const filteredPlants = filterPlants();

  const handleAddToCart = (plant) => {
    addToCart(plant);
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="plant-con">
      <div className="alt-nav">
        {/* <button className="back-btn" onClick={() => navigate("/")}> */}
        <button className="back-btn">
          <a className="logo-text" href="/">
            <img className="img-logo" src={back} alt="back" />
          </a>
        </button>

        <button onClick={toggleState} className="cart-btn">
          <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
          {cartcount > 0 && <p className="cart-item-count">{cartcount}</p>}
        </button>
      </div>
      <h1>Explore</h1>

      <div className="shopfilter-bar">
        <button
          className="filter-button"
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("Anthurium")}
        >
          Anthurium
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("Monstera")}
        >
          Monstera
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("Philodendron")}
        >
          Philodendron
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("Other")}
        >
          Other
        </button>
      </div>
      <ul className="plant-list">
        {filteredPlants.map((plant) => (
          <li key={plant.id} className="plant-item">
            <img src={plant.img} alt="Missing Image" />
            <h3>{plant.subtype}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlantList;
