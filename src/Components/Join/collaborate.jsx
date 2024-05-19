import React, { useState } from 'react'
import { useEffect, Component } from 'react'
import contactusbanner from '../Images/contactusbanner.png'
import Bookacall from '../AboutUs/bookacall'
import Clientlist from '../AboutUs/clientlist'
import contactusbg from '../Images/contactusbg.png'
import { Button } from '@chakra-ui/react'
import hiring1 from '../Images/hiring1.png'
import hiring2 from '../Images/hiring2.png'
import Navbar from '../HomePage/navbar'
import axios from "axios";
import BACKEND_URL from "../../helper";
import { useNavigate } from 'react-router-dom'

const Gallerypost = () => {
  const navigate = useNavigate();
  const [itemsJobs, setItemsJobs] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  useEffect(() => {
    fetchItemsJobs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contacts/collab`,
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

  const fetchItemsJobs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts/jobs`);
      setItemsJobs(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <img
        src={contactusbanner}
        alt="aboutimg1"
        className="z-10 w-full top-0"
      />
      <div className="md:hidden w-full md:top-[-1.25rem] top-[-1.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="w-full hidden md:block text-center text-[#2C6856] mt-12 mb-24 font-bold text-7xl">
        JOIN US
      </div>
      <img src={hiring2} alt="" className="w-3/4 relative" />
      <div className="grid gap-3 md:gap-6 w-3/4 mt-8 md:mt-12 grid-cols-2 md:grid-cols-3">
        {itemsJobs.map(item => <div
          style={{ backgroundImage: `url(${contactusbanner})` }}
          className="flex flex-col items-center justify-between p-4 h-28 md:h-36 bg-cover font-bold"
        >
          <div className="text-2xl md:text-4xl text-white">{item.title}</div>
          <div
          style={{cursor:"pointer"}}
           onClick={()=>{
            navigate('/apply')
          }} className="text-xs md:text-xl bg-[#2C6856] py-1 px-4 rounded-full text-white">
            Apply Now
          </div>
        </div>)}
       
       
      </div>
      <div className="w-full text-center text-[#2C6856] mb-6 mt-6 md:mt-12 font-bold text-3xl md:text-6xl">
        Collaborate
      </div>
      <div className="bg-[#F5F5F5] drop-shadow-xl p-[7vw] w-[80%] md:w-auto md:p-[4vw] rounded-2xl md:rounded-[50px] md:mb-16">
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
        <div className="text-sm md:text-xl mt-6 font-bold">Message/Enquiry</div>
        <textarea
        name="message"
        value={formData.message}
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
    </div>
  );
};

export default Gallerypost;
