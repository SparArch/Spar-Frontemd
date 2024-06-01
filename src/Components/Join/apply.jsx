import React, { useState } from 'react'
import { useEffect, Component } from 'react'
import contactusbanner from '../Images/contactusbanner.png'
import Bookacall from '../AboutUs/bookacall'
import Clientlist from '../AboutUs/clientlist'
import contactusbg from '../Images/contactusbg.png'
import { Button, Image } from '@chakra-ui/react'
import hiring1 from '../Images/hiring1.png'
import hiring2 from '../Images/hiring2.png'
import Navbar from '../HomePage/navbar'
import axios from "axios";
import BACKEND_URL from "../../helper";
import Footer from '../HomePage/footer'
import whatsappIcon from "../Images/whatapp-icon.png";
import ReactGa from 'react-ga'

const Gallerypost = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    apply: "",
    resume: "",
  });

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
        `${BACKEND_URL}/api/contacts/join`,
        formData
      );
      alert("Your message has been sent successfully!");
      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        contactNo: "",
        apply: "",
        resume: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
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
        src={contactusbanner}
        alt="aboutimg1"
        className="z-10 w-full top-0"
      />
      <div className="md:hidden w-full md:top-[-1.25rem] top-[1.3rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <img src={hiring1} alt="" className="w-3/4 hidden md:block mt-12" />
      <img
        src={hiring2}
        alt=""
        className="w-4/5 top-[6px] relative block md:hidden"
      />
      <div className="w-full block md:hidden text-center text-[#2C6856] mb-4 font-semibold text-4xl">
        Join us
      </div>
      <div className="bg-[#F5F5F5] drop-shadow-xl p-[7vw] w-[80%] md:w-auto md:p-[4vw] rounded-2xl md:rounded-[50px] md:mt-16 mb-16">
        <div className="text-sm md:text-xl font-bold">Full Name</div>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          type="text"
          className="w-full p-1 my-2"
          placeholder=""
        />
        <div className="text-sm md:text-xl mt-6 font-bold">Email</div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          className="w-full p-1 my-2"
          placeholder=""
        />
        <div className="text-sm md:text-xl mt-6 font-bold">Contact No</div>
        <input
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          type="text"
          className="w-full p-1 my-2"
          placeholder=""
        />
        <div className="text-sm md:text-xl mt-6 font-bold">Applying For</div>
        <input
          name="apply"
          value={formData.apply}
          onChange={handleChange}
          type="text"
          className="w-full p-1 my-2"
          placeholder=""
        />
        <div className="text-sm md:text-xl mt-6 font-bold">Resume/CV link</div>
        <textarea
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          rows={5}
          cols={60}
          style={{ resize: "none" }}
          className="w-full p-1 my-2"
          placeholder=""
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
      <div className="w-full items-center flex flex-col my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Gallerypost;
