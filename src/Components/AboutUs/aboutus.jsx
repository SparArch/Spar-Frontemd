import React, { useState } from "react";
import aboutimg1 from "../Images/About img1.png";
import aboutusphone from "../Images/aboutus phone.png";
import aboutus from "../Images/aboutus.png";
import "./aboutus.css";
import Clientlist from "./clientlist";
import { useEffect } from "react";
import axios from "axios";
import BACKEND_URL from "../../helper";
import diff1 from "../Images/diff1.png";
import diff2 from "../Images/diff2.png";
import diff3 from "../Images/diff3.png";
import diff4 from "../Images/diff4.png";
import diff5 from "../Images/diff5.png";
import Bookacall from "./bookacall";
import { Button } from "@chakra-ui/react";
import blankimg from "../Images/black-img.png";
import Navbar from "../HomePage/navbar";

const Aboutus = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsMission, setItemsMission] = useState([]);
  const [itemsClients, setItemsClients] = useState([]);
  const [itemsCertifications, setItemsCertifications] = useState([]);
  const [about, setAbout] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [pic, setPic] = useState("");
  console.log(about);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchItemsSolve();
  }, []);

  useEffect(() => {
    fetchItemsMission();
  }, []);

  useEffect(() => {
    fetchItemsClients();
  }, []);

  useEffect(() => {
    fetchItemsCertifications();
  }, []);

  const fetchData = async () => {
    try {
      // const response = await axios.get(`${BACKEND_URL}/api/testimonials`);
      const response_about = await axios.get(`${BACKEND_URL}/api/about`);
      setAbout(response_about.data[0].content);
      setAboutTitle(response_about.data[0].title);
      setPic(response_about.data[0].image);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, []);

  const fetchItemsSolve = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/solutions`);
      setItemsSolve(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchItemsMission = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/mission`);
      setItemsMission(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchItemsClients = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/ourClients`);
      setItemsClients(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchItemsCertifications = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/about/certifications`);
      setItemsCertifications(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };


  return (
    // About Section
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <img src={aboutimg1} alt="aboutimg1" className="-z-20 w-full relative" />
      <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="text-[10vw] md:hidden block my-2 font-bold">
          {aboutTitle}
        </div>
        <img
          src={pic}
          alt="aboutusphone"
          className="w-[90%] h-[20%] md:w-3/4 rounded-xl"
        />
        <div className="text-[7vw] font-bold md:block hidden">{aboutTitle}</div>
        <div className="text-center text-[#5C675A] text-[9px] my-2 md:text-xl font-semibold w-[85%] md:w-3/4">
          {about}
        </div>
      </div>

      {/* We Solve the Right Problems. */}

      <div className="md:text-[4vw] text-xl md:mt-12 my-2 font-bold">
        We Solve the Right Problems.
      </div>
      <div className="flex gap-4 md:gap-12 flex-col mt-4 md:my-12 items-center w-[95%] md:w-[90%]">
        <div className="flex w-full justify-evenly flex-row md:gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={itemsSolve[0]?.media || blankimg}
              alt="aboutus"
              className="w-12 md:w-20"
            />
            <div className="text-center font-semibold text-[10px] md:text-3xl">
              {itemsSolve[0]?.title}
            </div>
          </div>
          <div className="text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5">
            <b>{itemsSolve[0]?.title}:</b> {itemsSolve[0]?.content}
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-row-reverse md:gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={itemsSolve[1]?.media || blankimg}
              alt="aboutus"
              className="w-12 md:w-20"
            />
            <div className="text-center font-semibold text-[10px] md:text-3xl">
              {itemsSolve[1]?.title}
            </div>
          </div>
          <div className="text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#4A8780] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5">
            <b>{itemsSolve[1]?.title}:</b> {itemsSolve[1]?.content}
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-row md:gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={itemsSolve[2]?.media || blankimg}
              alt="aboutus"
              className="w-12 md:w-20"
            />
            <div className="text-center font-semibold text-[10px] md:text-3xl">
              {itemsSolve[2]?.title}
            </div>
          </div>
          <div className="text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5">
            <b>{itemsSolve[2]?.title}:</b> {itemsSolve[2]?.content}
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-row-reverse md:gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={itemsSolve[3]?.media || blankimg}
              alt="aboutus"
              className="w-12 md:w-20"
            />
            <div className="text-center font-semibold text-[10px] md:text-3xl">
              {itemsSolve[3]?.title}
            </div>
          </div>
          <div className="text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#4A8780] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5">
            <b>{itemsSolve[3]?.title}:</b> {itemsSolve[3]?.content}
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-row md:gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={itemsSolve[4]?.media || blankimg}
              alt="aboutus"
              className="w-12 md:w-20"
            />
            <div className="text-center font-semibold text-[10px] md:text-3xl">
              {itemsSolve[4]?.title}
            </div>
          </div>
          <div className="text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5">
            <b>{itemsSolve[4]?.title}:</b> {itemsSolve[4]?.content}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="md:w-4/5 w-[90%] grid grid-cols-2 md:hidden p-4 pt-8 pb-6 md:p-12 rounded-[40px] mt-6 shade mb-3 md:mb-0">
        <div className="px-3 pb-6 border-r-[1px] border-black">
          <p className="md:text-2xl text-[11px] font-bold mb-2">
            {itemsMission[0]?.title}
          </p>
          <p className="text-[10px] md:text-[20px]">
            {itemsMission[0]?.content}
          </p>
        </div>
        <div className="px-3 pb-6 border-black">
          <p className="md:text-2xl text-[11px] font-bold mb-2">
            {itemsMission[1]?.title}
          </p>
          <p className="text-[10px] md:text-[20px]">
            {itemsMission[1]?.content}
          </p>
        </div>
        <div className="px-3 pb-6 border-r-[1px] border-black">
          <p className="md:text-2xl text-[11px] font-bold mb-2">
            {itemsMission[2]?.title}
          </p>
          <p className="text-[10px] md:text-[20px]">
            {itemsMission[2]?.content}
          </p>
        </div>
        <div className="px-3 pb-6">
          <p className="md:text-2xl text-[11px] font-bold mb-2">
            {itemsMission[3]?.title}
          </p>
          <p className="text-[10px] md:text-[20px]">
            {itemsMission[3]?.content}
          </p>
        </div>
      </div>
      <div className="text-[10vw] my-2 font-bold">Our Clients</div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-8 w-[90%]">
        {itemsClients?.map((item) => (
          <img
            src={item?.media}
            alt="aboutus"
            className="w-full rounded-xl md:rounded-3xl"
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-4 w-full">
        <Button
          padding={"20px"}
          fontSize={"20px"}
          className="my-2"
          backgroundColor={"#2C6856"}
          color={"white"}
        >
          View More
        </Button>
      </div>
      <div className="text-[6vw] hidden md:block my-2 font-bold">
        Our Certification
      </div>
      <div className="hidden md:grid grid-cols-6 mb-24 gap-8 w-[90%]">
      {itemsCertifications?.map((item) => (
          <img
            src={item?.media}
            alt="aboutus"
            className="w-full rounded-xl md:rounded-3xl"
          />
        ))}
       
      </div>
      <div className="w-full items-center flex flex-col md:my-8">
        <Bookacall />
      </div>
    </div>
  );
};

export default Aboutus;
