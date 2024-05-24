import React, { useState, useEffect } from "react";
import blogsbg from "../Images/blogsbg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Text, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Arrow from "../Images/Arrow.png";
import axios from "axios";
import BACKEND_URL from "../../helper";
import Clientlist from "../AboutUs/clientlist";
import Bookacall from "../AboutUs/bookacall";
import homebg from "../Images/homebg.png";
import { useNavigate, useParams } from "react-router-dom";
import blogbtn from "../Images/blogbtn.png";
import Navbar from "../HomePage/navbar";
import Footer from "../HomePage/footer";
import whatsappIcon from "../Images/whatapp-icon.png";
import next from "../Images/next.png";
import prev from "../Images/prev.png";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  const copyURLToClipboard = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({
          title: "URL copied!",
          description: "The URL has been copied to your clipboard.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error("Failed to copy the URL: ", err);
        toast({
          title: "Failed to copy URL",
          description: "There was an issue copying the URL. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    fetchData();
    fetchOtherPosts();
  }, [id]);
  const fetchOtherPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      const filteredPosts = response.data
        .filter((post) => post._id !== id)
        .slice(0, 4);
      setOtherPosts(filteredPosts);
    } catch (error) {
      console.error("Error fetching other blog posts:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts/${id}`);
      setBlogPost(response.data);
      setMedia(response.data.media);
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };
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
      <div className="fixed z-50 cursor-pointer top-[92%] right-[2%]">
        <a href="https://wa.me/+447678532077" target="_blank">
          <Image height={"50px"} width={"50px"} src={whatsappIcon} />
        </a>
      </div>
      <img
        src={blogsbg}
        alt="aboutimg1"
        className="z-10 w-full top-0 filter brightness-50"
      />
      <Text
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        color={"white"}
        className="md:text-[35px] text-[15px] bottom-0 mt-[-30px] md:mt-[-60px] z-20"
        fontWeight={"600"}
      >
        BLOGS, CASE STUDIES & MEDIA MENTIONS
      </Text>
      <div className=" w-full top-[-0.1rem] md:hidden flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="flex flex-col gap-3 md:gap-10 md:my-16 my-4 w-[90%] md:w-4/5 items-center">
        <div className="md:text-4xl flex flex-row items-center text-sm text-center font-semibold">
          {blogPost.title}
          <img
            onClick={copyURLToClipboard}
            style={{ cursor: "pointer" }}
            src={blogbtn}
            className="h-8 hidden md:block ml-6"
          />
        </div>
        {media.length === 1 && <img src={media[0]} className="w-full" alt="" />}
        {media.length > 1 && (
          <Slider {...settings} className="w-[85%] md:w-[90%] my-8 md:my-16">
            {media.map((testimonial) => (
              <div className="p-1 md:p-4">
                <img src={testimonial} alt="" className="w-full" />
              </div>
            ))}
          </Slider>
        )}

        <div
          className="text-[10px] leading-3 md:text-lg"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blogPost.content),
          }}
        ></div>
        <div className="grid grid-cols-4 gap-2 md:gap-6 h-[20vw] md:h-[15vw]">
          {otherPosts.map((otherPost) => (
            <div
              key={otherPost._id}
              className="relative flex flex-col items-start justify-center object-cover cursor-pointer"
              onClick={() => navigate(`/blogs/${otherPost._id}`)}
            >
              <img
                src={otherPost.media[0] || homebg}
                className="object-cover w-full h-full"
                alt={otherPost.title}
              />
              <div className="text-[2.5vw] md:text-[1.5vw] w-full font-bold text-white absolute p-1 md:p-4">
                {otherPost.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full items-center flex flex-col md:my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
