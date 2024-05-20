import React, { useState } from "react";
import gallerybanner from "../Images/gallery banner.png";
import { useEffect } from "react";
import homepagebackground from "../Images/Homepage_back.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, Image, Text, background } from "@chakra-ui/react";
import "./gallery.css";
import Navbar from "../HomePage/navbar";
import axios from "axios";
import BACKEND_URL from "../../helper";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePage/footer";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchDataGallery();
  }, []);

  const fetchDataGallery = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/project`);
      setGallery(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <img src={gallerybanner} alt="aboutimg1" className="z-10 w-full top-0" />

      <div className="blogsec1 flex flex-col gap-6 items-center rounded-3xl">
        <Tabs
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <TabList>
            <Tab>
              <p className="md:text-lg text-xs">All</p>
            </Tab>
            <Tab>
              <p className="md:text-lg text-xs">Architecture</p>
            </Tab>
            <Tab>
              <p className="md:text-lg text-xs">Interiors</p>
            </Tab>
            <Tab>
              <p className="md:text-lg text-xs">Commercial</p>
            </Tab>
            <Tab>
              <p className="md:text-lg text-xs">F&B</p>
            </Tab>
            <Tab>
              <p className="md:text-lg text-xs">Retail Fit-Out</p>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              {viewMore === false && (
                <div className="hidden md:flex flex-col gap-4 my-16 w-[90%]">
                  <div className="w-full gap-4 flex flex-row">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${gallery[0]?._id}`);
                      }}
                      className="w-1/2 bg-[#D9D9D9] relative"
                    >
                      <img
                        src={gallery[0]?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {gallery[0]?.name}
                      </div>
                    </div>
                    <div className="w-full gap-4 flex flex-col">
                      <div className="w-full gap-4 flex flex-row h-full">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/gallery/${gallery[1]?._id}`);
                          }}
                          className="w-full bg-[#D9D9D9] relative"
                        >
                          <img
                            src={gallery[1]?.media[0]}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                          <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                            {gallery[1]?.name}
                          </div>
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/gallery/${gallery[2]?._id}`);
                          }}
                          className="w-full bg-[#D9D9D9] relative"
                        >
                          <img
                            src={gallery[2]?.media[0]}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                          <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                            {gallery[2]?.name}
                          </div>
                        </div>
                      </div>
                      <div className="w-full gap-4 flex flex-row h-full">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/gallery/${gallery[3]?._id}`);
                          }}
                          className="w-full bg-[#D9D9D9] relative"
                        >
                          <img
                            src={gallery[3]?.media[0]}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                          <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                            {gallery[3]?.name}
                          </div>
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/gallery/${gallery[4]?._id}`);
                          }}
                          className="w-full bg-[#D9D9D9] relative"
                        >
                          <img
                            src={gallery[4]?.media[0]}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                          <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                            {gallery[4]?.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full gap-4 flex flex-row">
                    <div className="w-full gap-4 flex flex-col">
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(`/gallery/${gallery[5]?._id}`);
                        }}
                        className="w-full h-full flex bg-[#D9D9D9] flex-row relative"
                      >
                        <img
                          src={gallery[5]?.media[0]}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                        <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                          {gallery[5]?.name}
                        </div>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(`/gallery/${gallery[6]?._id}`);
                        }}
                        className="w-full h-full flex bg-[#D9D9D9] flex-row relative"
                      >
                        <img
                          src={gallery[6]?.media[0]}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                        <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                          {gallery[6]?.name}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${gallery[7]?._id}`);
                      }}
                      className="w-full bg-[#D9D9D9] relative"
                    >
                      <img
                        src={gallery[7]?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {gallery[7]?.name}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMore === true && (
                <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                  {gallery.map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="md:hidden w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery.map((item) => (
                  <div
                    key={item._id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/gallery/${item._id}`);
                    }}
                    className="h-full bg-[#d9d9d9] relative"
                  >
                    <img
                      src={item?.media[0]}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                    <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>

              {viewMore === false && (
                <Button
                  onClick={() => {
                    setViewMore(true);
                  }}
                  marginBottom={"100px"}
                  backgroundColor={"#2C6856"}
                  color={"white"}
                  className="hover:text-black "
                >
                  <p className="md:text-xl">View More</p>
                </Button>
              )}
            </TabPanel>
            <TabPanel
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery
                  .filter((item) => item.keywords === "Architecture")
                  .map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery
                  .filter((item) => item.keywords === "Interiors")
                  .map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery
                  .filter((item) => item.keywords === "Commercial")
                  .map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery
                  .filter((item) => item.keywords === "F&B")
                  .map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" w-full my-8 grid gap-2 grid-rows-6 grid-cols-2">
                {gallery
                  .filter((item) => item.keywords === "Retail Fit-Out")
                  .map((item) => (
                    <div
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/gallery/${item._id}`);
                      }}
                      className="h-full bg-[#d9d9d9] relative"
                    >
                      <img
                        src={item?.media[0]}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                      <div className="flex items-center justify-center font-bold bg-black/50 absolute w-full h-full top-0 text-white text-[3vw] text-center hover:opacity-100 opacity-0 duration-200 p-4">
                        {item.name}
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
