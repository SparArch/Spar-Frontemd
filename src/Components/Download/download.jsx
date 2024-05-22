import React from "react";
import { useEffect, Component } from "react";
import contactusbanner from "../Images/contactusbanner.png";
import Bookacall from "../AboutUs/bookacall";
import Clientlist from "../AboutUs/clientlist";
import { Button, useToast } from "@chakra-ui/react";
import download from "../Images/download.png";
import { useState } from "react";
import "./download.css";
import Navbar from "../HomePage/navbar";
import axios from "axios";
import BACKEND_URL from "../../helper";
import Footer from "../HomePage/footer";

const Gallerypost = () => {
  useEffect(() => {
    fetchItemsDownload();
  }, []);
  const [itemsDownload, setItemsDownload] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const toast = useToast();

  const [form, setForm] = useState("closed");
  const handleChange = () => {
    setForm("open");
  };
  const handleSubmit = async () => {
    try {
      await axios.post(`${BACKEND_URL}/send-email`, {
        fullName,
        email,
        projectName: selectedItem.projectName,
        content: selectedItem.content,
        media: selectedItem.media,
      });
      toast({
        title: "Email sent!",
        description: "The e-catalog has been sent to your email.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setForm("thankyou");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send the email.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Error sending email:", error);
    }
  };

  const fetchItemsDownload = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/downloads`);
      setItemsDownload(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      {form == "open" && (
        <div className="w-[100vw] flex flex-col items-center justify-center h-[100vh] z-50 fixed bgdrop">
          <div className="bg-[#2C6856] flex flex-col justify-evenly w-4/5 md:w-2/5 drop-shadow-xl p-[7vw] md:p-[4vw] rounded-2xl md:rounded-[50px] text-white">
            <div className="text-sm md:text-xl font-bold">Full Name</div>
            <input
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="w-full p-1 my-2"
              placeholder="Enter Your Full Name"
              style={{ color: "black" }}
            />
            <div className="text-sm md:text-xl mt-6 font-bold">Email</div>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full p-1 my-2"
              placeholder="Enter Your Email"
              style={{ color: "black" }}
            />
            <div className="text-sm md:text-xl mt-6 font-bold">Contact No</div>
            <input
              name="contactNo"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              className="w-full p-1 my-2"
              placeholder="Enter Your Contact No"
              style={{ color: "black" }}
            />
            <div className="w-full flex flex-col items-center">
              <Button
                maxWidth={"120px"}
                className="my-2"
                onClick={() => {
                  setForm("thankyou");
                  handleSubmit();
                }}
                backgroundColor={"black"}
                color={"white"}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      )}
      {form == "thankyou" && (
        <div
          onClick={() => {
            setForm("closed");
          }}
          className="w-[100vw] flex flex-col items-center justify-center h-[100vh] z-50 fixed bgdrop"
        >
          <div className="bg-[#2C6856] flex flex-col justify-evenly items-center w-4/5 md:w-2/5 drop-shadow-xl p-[7vw] md:p-[4vw] rounded-2xl md:rounded-[50px] text-white">
            <div className="text-3xl md:text-7xl text-center">Thank You</div>

            <div className="text-sm md:text-xl text-center mt-6">
              for your details, you will automatically be emailed the e-catalog.
              Look for an email from info@spartechnovet.com . If it's not in
              your inbox, please check your spam folder or connect with us on
              +44 7881424598
            </div>
          </div>
        </div>
      )}
      <img
        src={contactusbanner}
        alt="aboutimg1"
        className="z-10 w-full top-0"
      />
      <div className="w-full md:top-[-1.25rem] top-[1.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="w-full mt-[24px] text-center font-bold md:text-4xl text-xl">
        Download Resources
      </div>
      <div className="grid gap-2 md:gap-4 w-[90%] mt-8 md:mt-12 grid-cols-3 mb-48">
        {itemsDownload.map((item) => (
          <div
            style={{ backgroundImage: `url(${item.media})` }}
            className="flex flex-row items-end justify-between p-1 md:p-3 h-[18vw] md:h-[15vw] bg-cover rounded-xl md:rounded-3xl font-bold"
          >
            <div className="text-sm md:text-4xl leading-3 text-white">
              Catalog
              <br />
              <p className="md:text-[14px] text-[8px] font-normal">
                {item.projectName}
              </p>
            </div>
            <div>
              <img
                style={{ cursor: "pointer" }}
                src={download}
                onClick={() => {
                  setForm("open");
                  setSelectedItem(item);
                }}
                alt="catalog"
                className="w-4 md:w-8"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full items-center flex flex-col my-8">
        <Bookacall />
      </div>
      <Footer />
    </div>
  );
};

export default Gallerypost;
