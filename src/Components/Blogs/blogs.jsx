import React, { useState, useEffect } from "react";
import blogsbg from "../Images/blogsbg.png";
import { Image, Text, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Arrow from "../Images/Arrow.png";
import axios from "axios";
import BACKEND_URL from "../../helper";
import Clientlist from "../AboutUs/clientlist";
import Bookacall from "../AboutUs/bookacall";
import homebg from "../Images/homebg.png";
import Navbar from "../HomePage/navbar";
import blogbtn from "../Images/blogbtn.png";
import { Link } from "react-router-dom";
import Footer from "../HomePage/footer";
import whatsappIcon from "../Images/whatapp-icon.png";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import ReactGa from 'react-ga'

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const toast = useToast();
  const copyURLToClipboard = (id) => {
    const url = `${window.location.href}/${id}`;
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
  }, []);
  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${formattedDate},  ${formattedTime}`;
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };
  useEffect(() => {
    ReactGa.pageview(window.location.pathname)
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="fixed z-50 cursor-pointer top-[92%] right-[2%]">
        <a href="https://wa.me/+447881424598" target="_blank">
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
        className="md:text-[35px] text-[15px] bottom-0 tetx-black md:text-white mt-[1rem] md:mt-[-60px] z-20"
        fontWeight={"600"}
      >
        BLOGS, CASE STUDIES & MEDIA MENTIONS
      </Text>
      <div className=" w-full sm:top-[-0.1rem] top-1 md:hidden flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="flex flex-col gap-3 md:gap-10 md:my-24 my-4 w-4/5 items-center">
        {viewMore === false && (
          <>
            {blogPosts.slice(0, 5).map((item, index) => (
              <div className="flex flex-row gap-2 md:gap-12">
                <div className="h-[20vw] w-[35vw]">
                  <img
                    src={item.media[0]}
                    className="object-cover h-full w-full md:rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-between w-2/3">
                  <div className="font-semibold text-[2.5vw] md:text-[2vw]">
                    {item.title}
                    <br />
                    <div className="text-[1.5vw] md:text-[1vw] font-bold">
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <div className="text-[0.8vw] text-[#8D8D94] md:block hidden" dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncateText(item.content, 75)),
                  }}>

                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to={`/blogs/${item._id}`}
                      className="text-[1.5vw] md:mb-0 mb-1 p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold"
                    >
                      READ MORE →
                    </Link>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        copyURLToClipboard(item._id);
                      }}
                      src={blogbtn}
                      className="hidden h-3/4 ml-6 md:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {viewMore === true && (
          <>
            {blogPosts.map((item, index) => (
              <div className="flex flex-row gap-2 md:gap-12">
                <div className="h-[25vw] md:h-[20vw]">
                  <img
                    src={item.media[0]}
                    className=" h-full w-full md:rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-between w-2/3">
                  <div className="font-semibold text-[3.5vw] md:text-[2vw]">
                    {item.title}
                    <br />
                    <div className="text-[1.5vw] font-bold">
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <div
                    className="text-[1vw] md:block hidden"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(truncateText(item.content, 75)),
                    }}
                  >

                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to={`/blogs/${item._id}`}
                      className="text-[2vw] md:mb-0 mb-2 md:text-[1.5vw] p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold"
                    >
                      Read More →
                    </Link>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        copyURLToClipboard(item._id);
                      }}
                      src={blogbtn}
                      className="hidden h-3/4 ml-6 md:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {viewMore === false && (
          <div className="flex flex-col items-center w-full">
            <Button
              onClick={() => {
                setViewMore(true);
              }}
              maxWidth={"120px"}
              className="md:my-2"
              backgroundColor={"#2C6856"}
              color={"white"}
            >
              View More
            </Button>
          </div>
        )}
      </div>
      <div className="w-full items-center flex flex-col md:my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
