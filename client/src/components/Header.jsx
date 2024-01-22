// import React, { useState } from "react";
// import "./Header.scss";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from "react-router-dom";
// import headerBG from "../images/header-background.jpg";
// import { HiOutlineShoppingBag } from "react-icons/hi";

// export default function Header() {
//   const navigate = useNavigate();
//   const [fix, setFix] = useState(false);

//   const setFixed = () => {
//     window.scrollY >= 780 ? setFix(true) : setFix(false);
//   };

//   window.addEventListener("scroll", setFixed);

//   const handleExploreClick = () => {
//     // Use the navigate function to navigate to the "/explore" page
//     navigate("/explore");
//   };

//   return (
//     <div className="header">
//       <div className="header-bg">
//         <img src={headerBG} alt="headerBG" className="header-img-bg" />
//       </div>
//       <div
//         className={
//           fix
//             ? "nav-version1 x y special-navbar"
//             : "nav-version2 x special-navbar"
//         }
//       >
//         <div className="logo-text">
//           <a className="logo-text" href="/">
//             BLOOMBOARD
//           </a>
//         </div>
//         <div>
//           <ul className="nav-list">
//             <li className="nav-list-item">
//               <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
//             </li>
//             <li className="nav-list-item">
//               <AnchorLink href="#collection"> OUR COLLECTION</AnchorLink>
//             </li>
//             <li>
//               <button
//                 onClick={handleExploreClick}
//                 className="shoppingbag shopping-bag"
//               >
//                 <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="hero-image">
//         <div className="hero-text-con">
//           <p className="hero-title">OUR COLLECTION</p>
//           <p className="hero-subtitle">
//             Buy your "PlantBaby" today and turn your house into a home!
//           </p>
//           <div className="hero-button-con">
//             {/* Explore button */}

//             <button onClick={handleExploreClick} className="hero-button">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import "./Header.scss";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from "react-router-dom";
// import headerBG from "../images/header-background.jpg";
// import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";

// export default function Header() {
//   const navigate = useNavigate();
//   const [fix, setFix] = useState(false);

//   const setFixed = () => {
//     window.scrollY >= 780 ? setFix(true) : setFix(false);
//   };

//   window.addEventListener("scroll", setFixed);

//   const handleExploreClick = () => {
//     navigate("/explore");
//   };

//   const handleShoppingBagClick = () => {
//     navigate("/cart");
//   };

//   const handleAccountClick = () => {
//     // Navigate to the account page or implement your account functionality
//     console.log("Navigate to account page");
//   };

//   return (
//     <div className="header">
//       <div className="header-bg">
//         <img src={headerBG} alt="headerBG" className="header-img-bg" />
//       </div>
//       <div
//         className={
//           fix
//             ? "nav-version1 x y special-navbar"
//             : "nav-version2 x special-navbar"
//         }
//       >
//         <div className="logo-text">
//           <a className="logo-text" href="/">
//             BLOOMBOARD
//           </a>
//         </div>
//         <div>
//           <ul className="nav-list">
//             <li className="nav-list-item">
//               <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
//             </li>
//             <li className="nav-list-item">
//               <AnchorLink href="#collection">OUR COLLECTION</AnchorLink>
//             </li>
//             <li className="nav-list-item">
//               <button
//                 onClick={handleShoppingBagClick}
//                 className="shoppingbag shopping-bag"
//               >
//                 <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
//               </button>
//             </li>
//             <li className="nav-list-item">
//               <button
//                 onClick={handleAccountClick}
//                 className="shoppingbag account-icon"
//               >
//                 <HiUser />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="hero-image">
//         <div className="hero-text-con">
//           <p className="hero-title">OUR COLLECTION</p>
//           <p className="hero-subtitle">
//             Buy your "PlantBaby" today and turn your house into a home!
//           </p>
//           <div className="hero-button-con">
//             <button onClick={handleExploreClick} className="hero-button">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./Header.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import headerBG from "../images/header-background.jpg";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";

export default function Header() {
  const navigate = useNavigate();
  const [fix, setFix] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const setFixed = () => {
    window.scrollY >= 780 ? setFix(true) : setFix(false);
  };

  window.addEventListener("scroll", setFixed);

  const handleExploreClick = () => {
    navigate("/explore");
  };

  const handleShoppingBagClick = () => {
    navigate("/cart");
  };

  const handleAccountClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignupClick = () => {
    navigate("/signup");
    setShowDropdown(false);
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
          <a className="logo-text" href="/">
            BLOOMBOARD
          </a>
        </div>
        <div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
            </li>
            <li className="nav-list-item">
              <AnchorLink href="#collection">OUR COLLECTION</AnchorLink>
            </li>
            <li className="nav-list-item">
              <button
                onClick={handleShoppingBagClick}
                className="shoppingbag shopping-bag"
              >
                <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
              </button>
            </li>
            <li className="nav-list-item">
              <div className="dropdown-container">
                <button
                  onClick={handleAccountClick}
                  className="shoppingbag account-icon"
                >
                  <HiUser />
                </button>
                {showDropdown && (
                  <div className="dropdown-content">
                    <button onClick={handleSignupClick}>Signup</button>
                    {/* Add more dropdown items as needed */}
                  </div>
                )}
              </div>
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
            <button onClick={handleExploreClick} className="hero-button">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
