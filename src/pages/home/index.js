import React from "react";
import "./index.css";
import TopSellers from "../../components/top-sellers/index";
import Hotbind from "../../components/hotbind/index";

export default function Home() {
  return (
    <>
      <div className="discover">
        <div className="img-responsive ">
          <img src="./img/ellipse3.svg" className="elips3"></img>
          <img src="./img/ellipse4.svg" className="elips4"></img>
          <div className="text">
            Discover, collect, and sell extraordinary NFTs
          </div>
        </div>

        <TopSellers />
        
        <Hotbind />

      </div>
    </>
  );
}
