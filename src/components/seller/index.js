import React from "react";
import "./index.css";

export default function Seller({ item }) {
  return (
    <div className="seller">
      <div className="cardseller">
        <div className="number">
          <div className="num1">{item.id}</div>
        </div>

        <div className="img-container">
          <img className="seller-imge" src={item.avatar} />
          <img src="./img/tik.svg" alt="tik" className="tik"></img>
        </div>

        <div className="seller-name">{item.name}</div>

        <div className="many-type">
          <div className="many">{item.price}</div>
          <div className="type">ETH</div>
        </div>
      </div>
    </div>
  );
}
