import React from "react";
import bestone from "../images/best1.jpg";
import besttwo from "../images/best2.jpg";
import bestthree from "../images/best3.jpg";
import MoreButton from "./subcomponent/MoreButton";
import BestsellerCon from "./subcomponent/BestsellerCon";
import "./BestSellers.scss";
import { useNavigate } from "react-router-dom";

export default function BestSellers() {
  const handleSeeMoreClick = () => {
    navigate("/explore");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <div className="bs-container" id="bestseller">
      <h1>BEST SELLERS</h1>
      <BestsellerCon
        pic={bestone}
        title={"Anthurium Waroc. 'Med'"}
        desc={
          "A stunning tropical with long dark green leaves. It is one of the most desirable plants by beginners and advanced houseplant enthusiasts."
        }
        tem={">13 C"}
        day={"When Needed"}
      />
      <BestsellerCon
        pic={besttwo}
        title={"Anthurium Amzn Diamond"}
        desc={
          "A cross between Anthurium Regale and Nigrolaminum, combining the long-stemmed, majestic habit of the former, with the rubbery, sturdy texture and the dark color of latter. Not suitable for beginners."
        }
        tem={">13 C"}
        day={"When Needed"}
      />
      <BestsellerCon
        pic={bestthree}
        title={"Anthurium Luxurians 'Big'"}
        desc={
          "This gorgeous tropical is found in the rainforests of Columbia. It's textured surface reflects light unlike other Anthuriums, adding an elegant vibrance to any room."
        }
        tem={">13 C"}
        day={"When Needed"}
      />
      {/* <MoreButton onClick={() => navigate("/explore")} name={"See More"} /> */}
      <div className="button-con">
        <button className="morebutton" onClick={handleSeeMoreClick}>
          SEE MORE
        </button>
      </div>
    </div>
  );
}
