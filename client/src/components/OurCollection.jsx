import React from "react";
import Filter from "./subcomponent/FilterButtons";
import CollectionItem from "./subcomponent/CollectionItem";
import "./OurCollection.scss";
import { useNavigate } from "react-router-dom";

export default function OurCollection({ plants }) {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    // Use the navigate function to navigate to the "/explore" page
    navigate("/explore");

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="collection-con" id="collection">
      <h1>OUR COLLECTION</h1>
      <div className="filter-bar">
        <Filter name={"Anthurium"} />
        <Filter name={"Monstera"} />
        <Filter name={"Orchid"} />
        <Filter name={"Philodendron"} />
        <Filter name={"Other"} />
      </div>
      <div className="img-con">
        {plants.map((plant, index) => (
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
