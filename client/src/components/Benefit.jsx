import React from "react";
import "./Benefit.scss";

export default function Benefit({ allimage, title, desc }) {
  return (
    <div className="benefit">
      <div>
        <img src={allimage} alt="Benefit" className="benefit image" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
}
//
