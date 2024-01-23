// export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.scss";
// import PlantList from "./components/PlantList";
// import ShoppingCart from "./components/ShoppingCart";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import BestSellers from "./components/BestSellers";
// import Benefits from "./components/Benefits";
// import OurCollection from "./components/OurCollection";
// import NewArrivals from "./components/NewArrivals";
// import Footer from "./components/Footer";

// import bag from "./images/bag.png";
// import headerBG from "./images/header-background.jpg";
// import newarrivals from "./images/newarrivals.jpg";
// import tweets from "./images/tweets.png";
// import gmail from "./images/mail.png";

// function ExplorePage({ plants, addToCart }) {
//   return <PlantList plants={plants} addToCart={addToCart} />;
// }

// function App() {
//   const [cart, setCart] = useState([]);
//   const [plants, setPlants] = useState([]);

//   const [fix, setFix] = useState(false);

//   const setFixed = () => {
//     window.scrollY >= 780 ? setFix(true) : setFix(false);
//   };

//   window.addEventListener("scroll", setFixed);

//   useEffect(() => {
//     fetch("/api/plants")
//       .then((response) => response.json())
//       .then((data) => setPlants(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const addToCart = (plant) => {
//     setCart([...cart, plant]);
//   };

//   const Home = () => {
//     return (
//       <div className="flex-container">
//         <Header bag={bag} headerBG={headerBG} />
//         <BestSellers plants={plants} />
//         <Benefits />
//         <OurCollection plants={plants} addToCart={addToCart} />
//         <NewArrivals pic={newarrivals} />
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* <Nav fix={fix} /> */}
//         {/* <Nav /> */}

//         <div className="flex-container">
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route
//                 path="/explore"
//                 element={<ExplorePage plants={plants} addToCart={addToCart} />}
//               />
//               <Route
//                 path="/cart"
//                 element={<ShoppingCart cart={cart} />}
//                 addToCart={addToCart}
//               />
//             </Routes>
//           </main>
//         </div>
//         <Footer twitter={tweets} gmail={gmail} />
//       </div>
//     </Router>
//   );
// }

// export default App;

//Testing
// App.jsx
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.scss";
// import PlantList from "./components/PlantList";
// import ShoppingCart from "./components/ShoppingCart";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import BestSellers from "./components/BestSellers";
// import Benefits from "./components/Benefits";
// import OurCollection from "./components/OurCollection";
// import NewArrivals from "./components/NewArrivals";
// import Footer from "./components/Footer";
// import Signup from "./components/Signup"; // Import the Signup component

// import bag from "./images/bag.png";
// import headerBG from "./images/header-background.jpg";
// import newarrivals from "./images/newarrivals.jpg";
// import tweets from "./images/tweets.png";
// import gmail from "./images/mail.png";

// function ExplorePage({ plants, addToCart }) {
//   return <PlantList plants={plants} addToCart={addToCart} />;
// }

// function App() {
//   const [cart, setCart] = useState([]);
//   const [plants, setPlants] = useState([]);

//   const [fix, setFix] = useState(false);

//   const setFixed = () => {
//     window.scrollY >= 780 ? setFix(true) : setFix(false);
//   };

//   window.addEventListener("scroll", setFixed);

//   useEffect(() => {
//     fetch("/api/plants")
//       .then((response) => response.json())
//       .then((data) => setPlants(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const addToCart = (plant) => {
//     setCart([...cart, plant]);
//   };

//   const Home = () => {
//     return (
//       <div className="flex-container">
//         <Header bag={bag} headerBG={headerBG} />
//         <BestSellers plants={plants} />
//         <Benefits />
//         <OurCollection plants={plants} addToCart={addToCart} />
//         <NewArrivals pic={newarrivals} />
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div className="App">
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/explore"
//               element={<ExplorePage plants={plants} addToCart={addToCart} />}
//             />
//             <Route
//               path="/cart"
//               element={<ShoppingCart cart={cart} />}
//               addToCart={addToCart}
//             />
//             <Route path="/signup" element={<Signup />} />{" "}
//             {/* Add the Signup route */}
//           </Routes>
//         </main>
//         <Footer twitter={tweets} gmail={gmail} />
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import BestSellers from "./components/BestSellers";
import Benefits from "./components/Benefits";
import OurCollection from "./components/OurCollection";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

import bag from "./images/bag.png";
import headerBG from "./images/header-background.jpg";
import newarrivals from "./images/newarrivals.jpg";
import tweets from "./images/tweets.png";
import gmail from "./images/mail.png";

function ExplorePage({ plants, addToCart }) {
  return <PlantList plants={plants} addToCart={addToCart} />;
}

//// w/ alex
const apiUrl = process.env.REACT_APP_API_URL || "/";

function App() {
  const [cart, setCart] = useState([]);
  const [plants, setPlants] = useState([]);

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    window.scrollY >= 780 ? setFix(true) : setFix(false);
  };

  window.addEventListener("scroll", setFixed);

  useEffect(() => {
    //// w/ alex
    fetch(apiUrl + "api/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  const Home = () => {
    return (
      <div className="flex-container">
        <Header bag={bag} headerBG={headerBG} />
        <BestSellers plants={plants} />
        <Benefits />
        <OurCollection plants={plants} addToCart={addToCart} />
        <NewArrivals pic={newarrivals} />
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/explore"
              element={<ExplorePage plants={plants} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<ShoppingCart cart={cart} />}
              addToCart={addToCart}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer twitter={tweets} gmail={gmail} />
      </div>
    </Router>
  );
}

export default App;
