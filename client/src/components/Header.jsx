import React, { useState } from "react";
import "./Header.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import headerBG from "../images/header-background.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Header() {
  const navigate = useNavigate();
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    window.scrollY >= 780 ? setFix(true) : setFix(false);
  };

  window.addEventListener("scroll", setFixed);

  const handleExploreClick = () => {
    // Use the navigate function to navigate to the "/explore" page
    navigate("/explore");
  };

  return (
    <div className="header">
      <div className="header-bg">
        <img src={headerBG} alt="headerBG" className="header-img-bg" />
      </div>
      <div
        className={
          fix
            ? "nav-version1 x y special-navbar"
            : "nav-version2 x special-navbar"
        }
      >
        <div className="logo-text">
          <a href="/">BLOOMBOARD</a>
        </div>
        <div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
            </li>
            <li className="nav-list-item">
              <AnchorLink href="#collection"> OUR COLLECTION</AnchorLink>
            </li>
            <li>
              <button
                onClick={handleExploreClick}
                className="shoppingbag shopping-bag"
              >
                <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-text-con">
          <p className="hero-title">OUR COLLECTION</p>
          <p className="hero-subtitle">
            Buy your "PlantBaby" today and turn your house into a home!
          </p>
          <div className="hero-button-con">
            {/* Explore button */}

            <button onClick={handleExploreClick} className="hero-button">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
