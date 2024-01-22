// import React from "react";
// import "./Nav.scss";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useNavigate } from "react-router-dom";
// import { HiOutlineShoppingBag } from "react-icons/hi";

// export default function Nav({ fix }) {
//   const navigate = useNavigate();

//   const handleExploreClick = () => {
//     navigate("/explore");
//   };

//   const handleShoppingBagClick = () => {
//     navigate("/cart");
//   };

//   return (
//     <div
//       className={
//         fix
//           ? "nav-version1 x y special-navbar"
//           : "nav-version2 x special-navbar"
//       }
//     >
//       <div className="logo-text">
//         <a className="logo-text" href="/">
//           BLOOMBOARD
//         </a>
//       </div>
//       <div>
//         <ul className="nav-list">
//           <li className="nav-list-item">
//             <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
//           </li>
//           <li className="nav-list-item">
//             <AnchorLink href="#collection">OUR COLLECTION</AnchorLink>
//           </li>
//           <li>
//             <button
//               onClick={handleShoppingBagClick}
//               className="shoppingbag shopping-bag"
//             >
//               <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// // import React, { useEffect, useRef } from "react";
// // import "./Nav.scss";
// // import AnchorLink from "react-anchor-link-smooth-scroll";
// // import { useNavigate } from "react-router-dom";
// // import { HiOutlineShoppingBag } from "react-icons/hi";

// // export default function Nav({ fix }) {
// //   const navigate = useNavigate();
// //   const navRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (navRef.current) {
// //         const backgroundColor = window
// //           .getComputedStyle(navRef.current)
// //           .getPropertyValue("background-color");
// //         const isLightBackground = isLightColor(backgroundColor);

// //         // Set text color based on background color
// //         document.documentElement.style.setProperty(
// //           "--nav-text-color",
// //           isLightBackground ? "black" : "white"
// //         );
// //       }
// //     };

// //     // Add scroll event listener
// //     window.addEventListener("scroll", handleScroll);

// //     // Initial call to set text color based on initial background color
// //     handleScroll();

// //     // Remove event listener on component unmount
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   const handleExploreClick = () => {
// //     navigate("/explore");
// //   };

// //   const handleShoppingBagClick = () => {
// //     navigate("/cart");
// //   };

// //   const isLightColor = (color) => {
// //     // Calculate luminance to determine if the color is light or dark
// //     const rgb = color.match(/\d+/g).map(Number);
// //     const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
// //     return luminance > 0.5;
// //   };

// //   return (
// //     <div
// //       ref={navRef}
// //       className={
// //         fix
// //           ? "nav-version1 x y special-navbar"
// //           : "nav-version2 x special-navbar"
// //       }
// //       style={{ "--nav-text-color": "black" }} // Set default text color
// //     >
// //       <div className="logo-text">
// //         <a className="logo-text" href="/">
// //           BLOOMBOARD
// //         </a>
// //       </div>
// //       <div>
// //         <ul className="nav-list">
// //           <li className="nav-list-item">
// //             <AnchorLink href="#bestseller">BEST SELLERS</AnchorLink>
// //           </li>
// //           <li className="nav-list-item">
// //             <AnchorLink href="#collection">OUR COLLECTION</AnchorLink>
// //           </li>
// //           <li>
// //             <button
// //               onClick={handleShoppingBagClick}
// //               className="shoppingbag shopping-bag"
// //             >
// //               <HiOutlineShoppingBag className="shoppingbag shopping-bag" />
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }
