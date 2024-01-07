// import React, { useState, useEffect } from "react";

// const Context = React.createContext();

// function ContextProvider(props) {
//   const [allPhotos, setAllPhotos] = useState([]);
//   const [cartPlant, setCartPlant] = useState([]);
//   const [querySearch, setQuerySearch] = useState("plants");

//   useEffect(() => {
//     fetch(
//       `https://api.unsplash.com/search/photos?page=1&per_page=28&query=${querySearch}&client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE`
//     )
//       .then((res) => res.json())
//       .then((data) => setAllPhotos(data.results));
//   }, [querySearch]);

//   // Search items
//   function searchItem(name) {
//     setQuerySearch(name);
//   }

//   // Explore the shop
//   const [exploreStatus, setExploreStatus] = useState(true);
//   function exploreStatusToggle() {
//     if (exploreStatus) {
//       setExploreStatus(false);
//     } else {
//       setExploreStatus(true);
//     }
//   }
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [exploreStatus]);

//   function addToCart(newPlant) {
//     setCartPlant((prev) => [...prev, newPlant]);
//   }
//   function removeFromCart(id) {
//     setCartPlant((prev) => prev.filter((item) => item.id !== id));
//   }
//   console.log(cartPlant);

//   return (
//     <Context.Provider
//       value={{
//         allPhotos,
//         querySearch,
//         searchItem,
//         exploreStatus,
//         exploreStatusToggle,
//         cartPlant,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {props.children}
//     </Context.Provider>
//   );
// }
// export { ContextProvider, Context };
