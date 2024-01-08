import React, { useState, useEffect } from "react";

import "./App.scss";

//components
import Header from "./components/Header";
import Explore from "./components/Explore";

import Benefits from "./components/Benefits";
import BestSellers from "./components/BestSellers";
import OurCollection from "./components/OurCollection";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

//images
import bag from "./images/bag.png";
import headerBG from "./images/header-background.jpg";
import newarrivals from "./images/newarrivals.jpg";
import tweets from "./images/tweets.png";
import gmail from "./images/mail.png";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/api/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Home = () => {
    return (
      <>
        <Header bag={bag} headerBG={headerBG} />

        <BestSellers plants={plants} />
        <Benefits />
        <OurCollection plants={plants} />
        <NewArrivals pic={newarrivals} />
      </>
    );
  };

  const ExplorePage = () => {
    return (
      <>
        <Explore plants={plants} />
      </>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage plants={plants} />} />
      </Routes>
      <Footer twitter={tweets} gmail={gmail} />
    </div>
  );
}

export default App;
