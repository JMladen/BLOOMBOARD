import React from "react";
import Benefit from "./subcomponent/Benefit";
import "./Benefits.scss";
import b1 from "../images/benefit1.jpg";
import b2 from "../images/benefit2.jpg";
import b3 from "../images/benefit3.jpg";
import b4 from "../images/benefit4.jpg";

export default function Benefits() {
  return (
    <div className="benefits-con">
      <h1>BENEFITS</h1>
      <div className="benefits-subcon">
        <Benefit
          allimage={b1}
          title={"Breathe Free"}
          desc={
            "According to NASA, plants can help improve air quality by removing cancer-causing chemicals like formaldehyde and benzene."
          }
        />
        <Benefit
          allimage={b2}
          title={"Be At Peace"}
          desc={
            "Plants have several physical and mental health benefits, including: reduced stress, lower blood pressure and an improved state of mind."
          }
        />
        <Benefit
          allimage={b3}
          title={"Make a House a Home"}
          desc={
            "Interior decorating is expensive, time-consuming and difficult. However, plants are a simple, rewarding, and aesthetically appealing solution to the problem."
          }
        />
      </div>
      <div className="imageContainer">
        <img src={b4} alt="quote bg pic" />
        <div className="quoteContainer">
          <p className="quote">
            "When you plant something, you invest in a beautiful future amidst a
            stressful, chaotic and, at times, downright appalling world."
          </p>
          <p className="author">- Monty Don</p>
        </div>
      </div>
    </div>
  );
}
