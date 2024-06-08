import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallerybanner from "../Images/gallery banner.png";
import { useEffect, Component } from "react";
import Slider from "react-slick";
import next from "../Images/next.png";
import prev from "../Images/prev.png";
import homebg from "../Images/homebg.png";
import Bookacall from "../AboutUs/bookacall";
import { useParams } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../helper";
import "react-quill/dist/quill.snow.css";
import Navbar from "../HomePage/navbar";
import Footer from "../HomePage/footer";
import DOMPurify from "dompurify";

const Contactus = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/project/${id}`);
      setPost(response.data);
      setMedia(response.data.media);
      // console.log(media);
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "" }}
        onClick={onClick}
      >
        <img className="w-3 md:w-auto" src={next} alt="" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img className="w-3 md:w-auto" src={prev} alt="" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <img src={gallerybanner} alt="aboutimg1" className="z-10 w-full top-0" />
      {media.length === 1 && (
        <div className="p-1 md:p-4 w-[85%] md:w-[90%] my-8 md:my-16">
          {/\.(jpg|jpeg|png|gif)$/i.test(media[0]) ? (
            <img src={media[0]} alt="" className="w-full" />
          ) : (
            <video src={media[0]} autoPlay loop muted className="w-full" />
          )}
        </div>
      )}

      {media.length > 1 && (
        <Slider {...settings} className="w-[85%] md:w-[90%] my-8 md:my-16">
          {media.map((testimonial, index) => (
            <div key={index} className="p-1 md:p-4">
              {/\.(jpg|jpeg|png|gif)$/i.test(testimonial) ? (
                <img src={testimonial} alt="" className="w-full" />
              ) : (
                <video
                  src={testimonial}
                  autoPlay
                  loop
                  muted
                  className="w-full"
                />
              )}
            </div>
          ))}
        </Slider>
      )}

      <div className="w-[82%] md:w-[88%] md:text-left text-center text-3xl md:text-6xl font-semibold">
        {post.name}
      </div>
      <div
        className="w-[82%] md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold my-4"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.content),
        }}
      ></div>
      <div className="w-[82%] mt-8 md:mt-16 md:w-[88%] md:text-left text-center text-3xl md:text-6xl font-semibold">
        Project Detail
      </div>
      <div className="w-[82%] md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold mt-4">
        Scope: {post.scope}
      </div>
      <div className="w-[82%] mb-4 md:mb-8 md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold">
        Location: {post.location}
      </div>
      <div className="w-full items-center flex flex-col my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
