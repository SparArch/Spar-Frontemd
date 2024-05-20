import React, { useState } from "react";
import service from "../Images/service banner.png";
import Clientlist from "../AboutUs/clientlist";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service4 from "../Images/service4.png";
import service5 from "../Images/service5.png";
import service6 from "../Images/service6.png";
import "./services.css";
import { useEffect } from "react";
import contactusbg from "../Images/contactusbg.png";
import Bookacall from "../AboutUs/bookacall";
import Navbar from "../HomePage/navbar";
import consultation from "../Images/consultation.png";
import idea from "../Images/idea.png";
import threed from "../Images/3d.png";
import arrowservice from "../Images/arrowservice.png";
import manuf from "../Images/manuf.png";
import strategy from "../Images/strategy.png";
import ship from "../Images/ship.png";
import assembling from "../Images/assembling.png";
import final from "../Images/final.png";
import axios from "axios";
import BACKEND_URL from "../../helper";
import Footer from "../HomePage/footer";

const Service = () => {
  const [services, setServices] = useState([]);
  const [itemsWork, setItemsWork] = useState([]);
  const [design, setDesign] = useState([]);
  const [develop, setDevelop] = useState([]);
  const [deliver, setDeliver] = useState([]);

  useEffect(() => {
    fetchItemsWork();
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchItemsWork = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/service/workProcess`
      );
      setItemsWork(response.data);
      setDesign(itemsWork.filter((item) => item.title === "Design"));
      setDevelop(itemsWork.filter((item) => item.title === "Develop"));
      setDeliver(itemsWork.filter((item) => item.title === "Deliver"));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/service/services`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <img src={service} alt="aboutimg1" className="z-10 w-full top-0" />
      <div className=" w-full md:top-[-1.25rem] top-[0rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div
        style={{ backgroundImage: `url(${contactusbg})` }}
        className="w-full  flex flex-col items-center services"
      >
        <p className="text-[10vw] leading-10 md:text-[5vw] font-bold md:my-8">
          What We Do.
        </p>
        <p className="font-semibold my-2 text-[3vw] md:text-[1.8vw]">
          Transformative, Tailored, Innovative.
        </p>
        <div className="md:mt-12 grid md:gap-8 gap-3 grid-cols-3 md:w-4/5 w-[90%] mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl"
            >
              <img
                src={service.media}
                className="md:h-[30%] h-[98px] w-[98px]"
                alt={service.title}
              />
              <p className="md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4">
                {service.title}
              </p>
              <p className="text-center text-[1.3vw] md:text-[1vw]">
                {service.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[7vw] leading-10 md:text-[4vw] font-bold md:my-8">
        Our Work Process
      </p>
      <p className="font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]">
        Design
      </p>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center">
          <img
            src={design[0]?.media || consultation}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {design[0]?.content || "Consultation"}
          </p>
        </div>
        <img src={arrowservice} alt="arrow" className="w-6 md:w-12" />
        <div className="flex flex-col items-center">
          <img
            src={design[1]?.media || idea}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {design[1]?.content || "Ideation"}
          </p>
        </div>
        <img src={arrowservice} alt="arrow" className="w-6 md:w-12" />
        <div className="flex flex-col items-center">
          <img
            src={design[2]?.media || threed}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {design[2]?.content || "3D Design"}
          </p>
        </div>
      </div>
      <p className="font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]">
        Develop
      </p>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center">
          <img
            src={develop[0]?.media || manuf}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {develop[0]?.content || "In house Manufacturing"}
          </p>
        </div>
        <img src={arrowservice} alt="arrow" className="w-6 md:w-12" />
        <div className="flex flex-col items-center">
          <img
            src={develop[1]?.media || strategy}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {develop[1]?.content || "Strategy Implementation"}
          </p>
        </div>
      </div>
      <p className="font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]">
        Deliver
      </p>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center">
          <img
            src={deliver[0]?.media || ship}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {deliver[0]?.content || "Material Shipping"}
          </p>
        </div>
        <img src={arrowservice} alt="arrow" className="w-6 md:w-12" />
        <div className="flex flex-col items-center">
          <img
            src={deliver[1]?.media || assembling}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {" "}
            {deliver[1]?.content || "Assembling"}
          </p>
        </div>
        <img src={arrowservice} alt="arrow" className="w-6 md:w-12" />
        <div className="flex flex-col items-center">
          <img
            src={deliver[2]?.media || final}
            alt="consultation"
            className="w-1/2"
          />
          <p className="text-[3vw] md:text-[1vw] font-bold">
            {" "}
            {deliver[2]?.content || "Final Delivery"}
          </p>
        </div>
      </div>
      {/* <img src={workprocess} alt="journey" className='w-4/5 mt-8 md:mb-48' /> */}
      <div className="w-full items-center flex flex-col mt-16 my-4">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Service;
