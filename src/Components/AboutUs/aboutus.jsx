import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BACKEND_URL from "../../helper";
import Navbar from "../HomePage/navbar";
import Clientlist from "./clientlist";
import Bookacall from "./bookacall";
import { Button, Image } from "@chakra-ui/react";
import aboutimg1 from "../Images/About img1.png";
import blankimg from "../Images/black-img.png";
import Footer from "../HomePage/footer";
import whatsappIcon from "../Images/whatapp-icon.png";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import ReactGa from "react-ga";
const Aboutus = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsMission, setItemsMission] = useState([]);
  const [itemsClients, setItemsClients] = useState([]);
  const [itemsCertifications, setItemsCertifications] = useState([]);
  const [about, setAbout] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [pic, setPic] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIndex, setSearchIndex] = useState(-1); // Index of the found item
  const scrollRef = useRef(null);
  useEffect(() => {
    fetchData();
    fetchItemsSolve();
    fetchItemsMission();
    fetchItemsClients();
    fetchItemsCertifications();
  }, []);
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const fetchData = async () => {
    try {
      const response_about = await axios.get(`${BACKEND_URL}/api/about`);
      setAbout(response_about.data[0].content);
      setAboutTitle(response_about.data[0].title);
      setPic(response_about.data[0].image);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  const fetchItemsSolve = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/solutions`);
      setItemsSolve(response.data);
    } catch (error) {
      console.error("Error fetching solve items:", error);
    }
  };

  const fetchItemsMission = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/mission`);
      setItemsMission(response.data);
    } catch (error) {
      console.error("Error fetching mission items:", error);
    }
  };

  const fetchItemsClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/ourClients`);
      setItemsClients(response.data);
    } catch (error) {
      console.error("Error fetching clients items:", error);
    }
  };

  const fetchItemsCertifications = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/about/certifications`
      );
      setItemsCertifications(response.data);
    } catch (error) {
      console.error("Error fetching certifications items:", error);
    }
  };

  // const handleSearch = () => {
  //   if (searchTerm.trim() !== "") {
  //     const foundIndex = itemsSolve.findIndex(
  //       (item) =>
  //         item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         item.content.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchIndex(foundIndex);
  //     scrollToItem(foundIndex);
  //   } else {
  //     setSearchIndex(-1);
  //   }
  // };
  // const scrollToItem = (index) => {
  //   if (index !== -1 && scrollRef.current) {
  //     const itemElement = scrollRef.current.childNodes[index];
  //     itemElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="fixed z-50 cursor-pointer top-[92%] right-[2%]">
        <a href="https://wa.me/+447881424598" target="_blank">
          <Image height={"50px"} width={"50px"} src={whatsappIcon} />
        </a>
      </div>
      <img src={aboutimg1} alt="aboutimg1" className="-z-20 w-full relative" />
      <div className=" w-full md:top-[-1.25rem] top-[0rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="md:text-[4vw] text-[#707070] md:text:[black] text-[8vw] md:mt-12 my-2 font-bold block md:hidden">
          {aboutTitle}
        </div>
        {/\.(jpg|jpeg|png|gif)$/i.test(pic) ? (
          <img
            src={pic}
            alt="aboutusphone"
            className="w-[90%] h-[20%] md:w-3/4 rounded-xl"
          />
        ) : (
          <video
            src={pic}
            autoPlay
            loop
            muted
            className="w-[90%] h-[20%] md:w-3/4 rounded-xl"
          />
        )}

        <div className="md:text-[4vw] text-[100px] md:mt-12 my-2 font-bold md:block hidden mb-[40px]">
          {aboutTitle}
        </div>
        <div
          className="text-center text-[#5C675A] text-[9px] my-2 md:text-xl font-semibold w-[85%] md:w-3/4"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(about),
          }}
        ></div>
      </div>

      <div className="md:text-[4vw] text-xl md:mt-12 my-2 font-bold">
        We Solve the Right Problems.
      </div>
      <div className="flex gap-4 md:gap-12 flex-col mt-4 md:my-12 items-center w-[95%] md:w-[80%]">
        {itemsSolve.map((item, index) => (
          <div
            key={index}
            ref={scrollRef}
            className={`flex w-full justify-evenly flex-row ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } md:gap-6 items-center ${
              searchIndex === index ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <img
                src={item?.media || blankimg}
                alt="aboutus"
                className="w-12 md:w-20"
              />
              <div className="text-center md:w-64 font-semibold text-[10px] md:text-2xl">
                {item?.title}
              </div>
            </div>
            <div
              className={`text-white text-[10px] md:text-[1.2vw] md:text-left text-center p-2 md:p-10 px-4 md:px-12 rounded-full w-[70%] md:w-3/5 ${
                index % 2 === 0 ? "bg-[#2C6856]" : "bg-[#4A8780]"
              } `}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.content),
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>


      <div className="text-[10vw] md:text-[4vw] my-2 font-bold">
        Our Clients
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-8 w-[90%] mb-14">
        {itemsClients?.map((item, index) => (
          <img key={index} src={item?.media} alt="aboutus" className="w-full" />
        ))}
      </div>

      {/* <div className="flex flex-col items-center mt-4 w-full">
        <Button
          padding={"20px"}
          fontSize={"20px"}
          className="my-2"
          backgroundColor={"#2C6856"}
          color={"white"}
        >
          View More
        </Button>
      </div> */}

      <div className="text-[6vw] md:text-[4vw] hidden md:block my-2 font-bold">
        Our Certification
      </div>
      <div className="hidden md:grid grid-cols-6 mb-24 gap-8 w-[90%]">
        {itemsCertifications?.map((item, index) => (
          <img
            key={index}
            src={item?.media}
            alt="aboutus"
            className="w-full rounded-xl md:rounded-3xl"
          />
        ))}
      </div>

      <div className="w-full items-center flex flex-col md:my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
