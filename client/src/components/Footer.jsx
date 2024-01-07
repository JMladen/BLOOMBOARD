import React from "react";
import "./Footer.scss";

export default function Footer({ twitter, gmail }) {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <p className="logo-text">BLOOMBOARD</p>
      </div>
      <div className="social-container">
        <p className="follow-text">Follow us</p>
        <div className="social-icons">
          <a href="/" className="social-link">
            {" "}
            <img src={twitter} alt="twitter" className="social-icon" />
          </a>
          <a href="/" className="social-link">
            {" "}
            <img src={gmail} alt="gmail" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
