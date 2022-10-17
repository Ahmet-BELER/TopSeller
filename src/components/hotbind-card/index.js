import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"
export default function HotbindCard({ item }) {
/*   console.log(item) */
  return (
    <Link to={`/item/${item?.id}` }>
      <div className="hotbindCard col-l-3 col-md-4 col-sm-3 ">
        <div className="hot-cardcover ">
          <img className="hot-img" src={item?.image} />
          <div className="hot-text-num">
            <div className="hot-img-text">{item?.name}</div>
            <div className="hot-many-like">
              <div className="many-type-hot">{item?.price} ether</div>
              <div className="many-like-hot"> <img src="./img/like.svg" alt="like" /> {item?.fav}</div>

            </div>


          </div>

        </div>

      </div>

    </Link>
  )

}
