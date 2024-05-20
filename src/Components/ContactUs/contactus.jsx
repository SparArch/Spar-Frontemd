import React, { useState } from "react";
import { useEffect, Component } from "react";
import contactusbanner from "../Images/contactusbanner.png";
import Bookacall from "../AboutUs/bookacall";
import Clientlist from "../AboutUs/clientlist";
import contactusbg from "../Images/contactusbg.png";
import { Button, Image } from "@chakra-ui/react";
import BACKEND_URL from "../../helper";
import axios from "axios";
import Navbar from "../HomePage/navbar";
import ReactWhatsapp from "react-whatsapp";
import whatsappIcon from "../Images/whatapp-icon.png";
import Footer from "../HomePage/footer";

const Gallerypost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    message: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contacts`,
        formData
      );
      alert("Your message has been sent successfully!");
      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        contactNo: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contactPage`);
      setTitle(response.data[0]?.title);
      setDescription(response.data[0]?.content);
    } catch (error) {
      console.error("Error fetching title:", error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <img
        src={contactusbanner}
        alt="aboutimg1"
        className="z-10 w-full top-0"
      />
      <div className=" w-full md:top-[-1.25rem] top-[-1.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div
        style={{ backgroundImage: `url(${contactusbg})` }}
        className="bg w-full flex flex-col items-center"
      >
        <div className="flex flex-col gap-10 md:flex-row md:p-10 p-6 md:mt-[7vw] mb-[3vw]">
          <div className="font-semibold">
            <div className="md:text-6xl font-bold text-3xl text-[#707070] md:my-10 w-full md:text-left text-center">
              {title || "Contact Us"}
            </div>
            <div className="md:text-4xl text-xs mt-4 w-full md:text-left text-center text-[#707070] mr-[5vw]">
              {description ||
                "Feel Free To Contact And Reach Us For More Info!"}
            </div>
            <div className="flex mt-[30px]">
              <a href="https://wa.me/+917678532077" target="_blank">
                <Image height={"80px"} width={"80px"} src={whatsappIcon} />
              </a>
            </div>
          </div>
          <div className="bg-[#F5F5F5] drop-shadow-xl p-[7vw] md:p-[4vw] rounded-2xl md:rounded-[50px]">
            <div className="text-sm md:text-xl font-bold">Full Name</div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-1 my-2"
              placeholder="Enter Your Full Name"
            />
            <div className="text-sm md:text-xl mt-6 font-bold">Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-1 my-2"
              placeholder="Enter Your Email"
            />
            <div className="text-sm md:text-xl mt-6 font-bold">Contact No</div>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full p-1 my-2"
              placeholder="Enter Your Contact No"
            />
            <div className="text-sm md:text-xl mt-6 font-bold">
              Message/Enquiry
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              cols={60}
              style={{ resize: "none" }}
              className="w-full p-1 my-2"
              placeholder="Enter Your Message/Enquiry"
            />
            <div className="w-full flex flex-col items-center">
              <Button
                onClick={handleSubmit}
                maxWidth={"120px"}
                className="my-2"
                backgroundColor={"#2C6856"}
                color={"white"}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-center flex flex-col my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Gallerypost;
