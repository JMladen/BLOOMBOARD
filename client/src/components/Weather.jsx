import React from "react";
import humi from "../images/humi.png";
import sunny from "../images/sunny.png";
import temp from "../images/temp.png";
import calendar from "../images/calendar.png";
import "./Weather.scss";

export default function Weather({ humidity, light, temperatures, day }) {
  return (
    <div className="weather-con">
      <div className="characteristic">
        <img src={humi} alt="humidity" className="characteristic-img" />

        <p className="characteristic__text">{humidity}</p>
      </div>
      <div className="characteristic">
        <img src={sunny} alt="sunny weather" className="characteristic-img" />
        <p className="characteristic__text">{light}</p>
      </div>
      <div className="characteristic">
        <img src={temp} alt="temperature" className="characteristic-img" />
        <p className="characteristic__text">
          {">"}
          {temperatures}
        </p>
      </div>
      <div className="characteristic">
        <img src={calendar} alt="calendar" className="characteristic-img" />
        <p className="characteristic__text">{day}</p>
      </div>
    </div>
  );
}
