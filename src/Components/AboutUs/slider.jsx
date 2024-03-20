import React from "react";
import Slider from "react-slick";
import clientlist from '../Images/client list.png'

function AutoPlay() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    swipeToSlide: false,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={clientlist} className="w-auto" alt='client list' />
        </div>
        <div>
          <img src={clientlist} className="w-auto" alt='client list' />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;