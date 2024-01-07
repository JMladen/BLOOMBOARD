import React from "react";
import Weather from "../Weather";
import "./BestsellerCon.scss";

export default function BestsellerCon({ plants }) {
  const displayedPlants = plants.slice(0, 3);
  return (
    <div className="bestseller-con">
      {displayedPlants.map((plant, index) => (
        <div key={index} className="flex-container">
          {/* <div className="flex-container"> */}
          <img src={plant.img} alt="arrival" className="image" />
          <div className="text-container">
            <p className="title">{plant.subtype}</p>
            <p className="description">{plant.desc}</p>
            <Weather
              humidity={plant.humidity}
              light={plant.light}
              temperatures={plant.temp}
              day={plant.water}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
