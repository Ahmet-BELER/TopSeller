import React from "react";
import "./index.css";
import Seller from "../seller/index";
import { useSelector } from "react-redux";
import Slider from "react-slick";

export default function TopSellers() {
  /*   console.log("params22") */
  const { topSellers } = useSelector((state) => state.topSellers);
  console.log(topSellers);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>

      <p className="topseller-text">Top Sellers</p>
 <div className="Topseller"> 
        <Slider {...settings}>
          {topSellers?.map((item) => {
            return <Seller key={item.id} item={item} />;
          })}
        </Slider>
       </div> 
      {/*  <Seller/> */}
    </>
  );
}
