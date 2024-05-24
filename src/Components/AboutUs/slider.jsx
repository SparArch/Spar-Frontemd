import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import clientlist from "../Images/client list.png";
import hobbs from "../Images/hobbs.png";
import geox from "../Images/geox.png";
import whistles from "../Images/whistles.png";
import phase from "../Images/phase.png";
import radisson from "../Images/radisson.png";
import BACKEND_URL from "../../helper";
import axios from "axios";

function AutoPlay() {
  const [itemsClients, setItemsClients] = useState([]);

  useEffect(() => {
    fetchItemsClients();
  }, []);

  const fetchItemsClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/ourClients`);
      setItemsClients(response.data);
    } catch (error) {
      console.error("Error fetching clients items:", error);
    }
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    swipeToSlide: false,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {itemsClients?.map((item, index) => (
          <div key={index} className="flex justify-center items-center h-full">
            <img
              src={item.media}
              alt="client list"
              className="h-auto"
              style={{ filter: 'invert(1) brightness(2)' }}
            />
          </div>
        ))}
        {/* <div>
          <img src={hobbs} className="" alt="client list" />
        </div> */}
        <div>
          <img src={whistles} className="" alt="client list" />
        </div>
        <div>
          <img src={geox} className="" alt="client list" />
        </div>
        {/* <div>
          <img src={phase} className="" alt="client list" />
        </div> */}
        <div>
          <img src={radisson} className="" alt="client list" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
