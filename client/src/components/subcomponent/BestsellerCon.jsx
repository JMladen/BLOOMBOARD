import React from "react";
import Weather from "../Weather";
import "./BestsellerCon.scss";

export default function BestsellerCon({ pic, title, desc, tem, day }) {
  return (
    <div className="bestseller-con">
      <div className="flex-container">
        <img src={pic} alt="arrival" className="image" />
        <div className="text-container">
          <p className="title">{title}</p>
          <p className="description">{desc}</p>
          <Weather tem={tem} day={day} />
        </div>
      </div>
    </div>
  );
}
