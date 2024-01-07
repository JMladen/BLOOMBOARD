import React from "react";
import "./NewArrivals.scss";

export default function NewArrivals({ pic }) {
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-con">
        <img src={pic} alt="arrival" className="new-arrivals-img" />
        <div className="new-arrivals-subcon">
          <p className="new-arrivals-title">new arrivals</p>
          <p className="new-arrivals-text">
            Provide your email for updates on our newest product offerings and
            deals!
          </p>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="new-arrivals-input"
          />
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
