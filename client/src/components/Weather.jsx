import React from "react";
import humi from "../images/humi.png";
import sunny from "../images/sunny.png";
import temp from "../images/temp.png";
import calendar from "../images/calendar.png";
import "./Weather.scss";

export default function Weather({ tem, day }) {
  return (
    <div className="weather-con">
      <div className="characteristic">
        <img src={humi} alt="humidity" className="characteristic-img" />
        <p className="characteristic__text">Humidity</p>
      </div>
      <div className="characteristic">
        <img src={sunny} alt="sunny weather" className="characteristic-img" />
        <p className="characteristic__text">Light</p>
      </div>
      <div className="characteristic">
        <img src={temp} alt="temperature" className="characteristic-img" />
        <p className="characteristic__text">{tem}</p>
      </div>
      <div className="characteristic">
        <img src={calendar} alt="calendar" className="characteristic-img" />
        <p className="characteristic__text">{day}</p>
      </div>
    </div>
  );
}
