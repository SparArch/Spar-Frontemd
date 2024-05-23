import React, { useState } from "react";
import "./homepage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Divider, Image, position } from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect } from "react";
import Clientlist from "../AboutUs/clientlist";
import service6 from "../Images/midsec2-1.png";
import joinus from "../Images/joinhome.png";
import Bookacall from "../AboutUs/bookacall";
import morebtn from "../Images/midsec2-2.png";
import next from "../Images/next.png";
import prev from "../Images/prev.png";
import next1 from "../Images/next1.png";
import prev1 from "../Images/prev1.png";
import Navbar from "./navbar";
import axios from "axios";
import BACKEND_URL from "../../helper";
import blankimg from "../Images/black-img.png";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import contactusbg from "../Images/contactusbg.png"; 

const Homepage = () => {
  const navigate = useNavigate();
  const [itemsTopCover, setItemsTopCover] = useState([]);
  const [itemsHello, setItemsHello] = useState([]);
  const [itemsSpaces, setItemsSpaces] = useState([]);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsTestimonials, setItemsTestimonials] = useState([]);
  const [itemsJoin, setItemsJoin] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetchItemsSpaces();
  }, []);

  useEffect(() => {
    fetchItemsSolve();
  }, []);

  useEffect(() => {
    fetchItemsTestimonials();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    fetchItemsTopCover();
  }, []);

  useEffect(() => {
    fetchItemsHello();
  }, []);

  useEffect(() => {
    fetchDataBlogs();
  }, []);

  useEffect(() => {
    fetchDataJoin();
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
    return `${formattedDate}`;
  };
  const fetchDataBlogs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const fetchDataJoin = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/home/joinCollaborateTransform`
      );
      setItemsJoin(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };
  const fetchItemsTopCover = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/topCover`);
      setItemsTopCover(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const fetchItemsHello = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/hello`);
      setItemsHello(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const fetchItemsSolve = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/home/solveForRightProblems`
      );
      setItemsSolve(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchItemsSpaces = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/home/knowEverySpaces`
      );
      setItemsSpaces(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchItemsTestimonials = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/testimonials`);
      setItemsTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/home/featuredProjects`
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0)
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
        style={{ ...style, display: "block", top: "100px" }}
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
        style={{ ...style, display: "block", top: "100px" }}
        onClick={onClick}
      >
        <img className="w-3 md:w-auto" src={prev} alt="" />
      </div>
    );
  }

  const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  let helloIndex = itemsHello.length - 1;
  let topCoverCount = itemsTopCover.length;
  const homecontent = itemsHello[helloIndex]?.content;

  let joinIndex = itemsJoin.length - 1;

  const slider = React.useRef(null);
  // const homecontent="";
  return (
    <div className="Home">
      <Navbar />
      <div className=" ">
        {/* <div className='w-full'>
          <img src={homebg} className='w-full' />
        </div> */}
        {topCoverCount > 1 && <div className="w-full flex flex-row absolute z-30 md:px-10 px-4 justify-between md:top-[30vw] top-[40vw]">
          <button onClick={() => slider?.current?.slickPrev()}>
            <img src={prev1} className="w-3 md:w-auto" alt="" />
          </button>
          <button onClick={() => slider?.current?.slickNext()}>
            <img src={next1} className="w-3 md:w-auto" alt="" />
          </button>
        </div>}
        <div className="w-full flex md:mt-0 mt-12 flex-col items-center">
          {topCoverCount === 1 && (
            <div className="relative flex items-center justify-center">
              <div className="">
                <img src={itemsTopCover[0]?.media} alt="" className="w-full brightness-75" />
              </div>
              <div className="absolute w-full h-full flex flex-col items-center justify-center text-center text-white bottom-0">
                <div className="font-bold text-[4vw] z-40">
                  {itemsTopCover[0]?.title}
                </div>
                <div className="text-[2vw] w-1/2 z-40">
                  {itemsTopCover[0]?.content}
                </div>
                <div className="flex flex-row">
                  <button
                    onClick={() => {
                      navigate("/download");
                    }}
                    className="font-semibold text-white bg-transparent border-2 border-white p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center"
                  >
                    DOWNLOAD
                  </button>
                  <button className="font-semibold text-white bg-[#2C6856] p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center">
                    <a href="https://wa.me/+917678532077" target="_blank">
                      {" "}
                      GET A QUOTE
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
          {topCoverCount > 1 && (
            <Slider
              ref={slider}
              {...settings2}
              className="w-[105%] my-8 md:my-16"
            >
              {itemsTopCover.map((testimonial) => (
                <div className="relative flex items-center justify-center">
                  <div className="p-1 md:p-4">
                    <img src={testimonial.media} alt="" className="w-full brightness-75" />
                  </div>
                  <div className="absolute w-full h-full flex flex-col items-center justify-center text-center text-white bottom-0">
                    <div className="font-bold text-[4vw] z-40">
                      {testimonial.title}
                    </div>
                    <div className="text-[2vw] w-1/2 z-40">
                      {testimonial.content}
                    </div>
                    <div className="flex flex-row">
                      <button
                        onClick={() => {
                          navigate("/download");
                        }}
                        className="font-semibold text-white bg-transparent border-2 border-white p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center"
                      >
                        DOWNLOAD
                      </button>
                      <button className="font-semibold text-white bg-[#2C6856] p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center">
                        <a href="https://wa.me/+917678532077" target="_blank">
                          {" "}
                          GET A QUOTE
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
        {/* <div className='relative bottom-36 -mt-16 -mb-20'><Clientlist /></div> */}
        <div className=" w-full md:top-[-1.25rem] top-[-2rem] flex flex-col items-center relative">
          <Clientlist />
        </div>
        <div className="w-full flex items-center overflow-y-none top-[-5rem] md:top-0 justify-center  relative">
          <img
            src={itemsHello[helloIndex]?.media}
            className="w-full hidden md:block brightness-75"
          />
          <div className="h-[70vw] block md:hidden">
          <img
            src={itemsHello[helloIndex]?.media}
            className="w-full h-full object-cover block md:hidden brightness-75"
          /></div>
          {homecontent && (
            <>
            <div className="absolute w-[90%] md:w-1/2 mt-12 rounded-xl p-2 md:p-[2vw] text-white flex flex-col items-center justify-center text-center text-[2vw] md:text-[1.2vw] duration-500 hover:bg-black/50">
              <div className="text-[8vw] md:text-[6vw] w-full text-center mb-[30vw] md:mb-[10vw] font-bold">
                {itemsHello[helloIndex]?.title}
              </div>
              <div className="w-full flex flex-col items-center justify-evenly h-full opacity-0 hover:opacity-100 duration-500 absolute">
                <div className="w-4/5 mt-[15vw] md:mt-[10vw]">{homecontent}</div>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="font-semibold text-white bg-[#2C6856] p-2 md:px-4 py-1 md:py-2 mt-2 md:m-4 md:rounded-xl rounded text-center text-[3vw] md:text-[1.2vw] flex flex-col items-center justify-center"
              >
                KNOW MORE
              </button></div>
            </div>
            {/* <div style={{ backgroundImage: `url(${itemsHello[helloIndex]?.media})` }} className="w-full h-full text-[10vw] md:text-[7vw] font-bold text-white duration-500 absolute items-center justify-center flex hover:hidden">{itemsHello[helloIndex]?.title}</div> */}
            </>
          )}
          {!homecontent && (
            <div className="text-[10vw] md:text-[10vw] font-bold absolute text-white mb-4">
              {itemsHello[helloIndex]?.title}
            </div>
          )}
        </div>
      </div>

      {/* We Know Every Spaces */}
      <div style={{ backgroundImage: `url(${contactusbg})` }} className="midsec22 flex flex-col items-center justify-center">
        <div className="text-3xl md:text-5xl font-bold mt-8 text-center">
          We Know Every Spaces.
        </div>
        <div className="text-base md:text-xl font-semibold mt-4 text-center">
          Transformative, Tailored, Innovative.
        </div>
        <div className="mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] md:mb-12">
          {itemsSpaces.slice(0, 5).map((item) => (
            <div
              key={item._id}
              className="bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl"
            >
              <img
                src={item.media || blankimg}
                className="md:h-[30%] h-10"
                alt=""
              />
              <p className="md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4">
                {item.title}
              </p>
              <p className="text-center text-[8px] md:text-[0.8vw]">
                {item.content}
              </p>
            </div>
          ))}
          <div
            onClick={() => {
              navigate("/service");
            }}
            className="bg-[#2C6856] flex flex-row rounded-xl md:rounded-3xl text-white"
            style={{ cursor: "pointer" }}
          >
            <div className="ml-3">
              <p className="md:text-[1.6vw] text-sm text-center font-semibold my-1 md:my-4 pl-[0] pt-14 md:pt-20 pb-0">
                +4
              </p>
              <p
                onClick={() => {
                  navigate("/service");
                }}
                className="md:text-[1.6vw] text-sm font-semibold my-1 md:my-10 pl-[0] pb-0"
              >
                Learn More
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={service6}
                alt=""
                className="md:w-[60px] md:h-[125px] h-[70px] w-[50px]"
              />
              <div>
                <img
                  onClick={() => {
                    navigate("/service");
                  }}
                  src={morebtn}
                  alt=""
                  className="h-[20px] md:h-auto m-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Solve the Right Problems. */}
      <div className="w-full my-8 flex flex-col items-center">
        <div className="text-2xl font-bold my-4 md:my-12 md:text-4xl">
          We Solve the Right Problems.
        </div>
        <div className="grid md:grid-cols-5 gap-8 grid-cols-2 w-[80%]">
          {itemsSolve.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]"
            >
              <img
                src={item.media || blankimg}
                className="mb-2 h-12 md:h-24"
                alt=""
              />
              {item.title}
            </div>
          ))}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/about");
            }}
            className="md:hidden text-[1rem] font-bold text-white bg-[#2C6856] m-4 rounded-xl text-center text-xl flex flex-col items-center justify-center"
          >
            KNOW
            <br /> MORE
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/about");
          }}
          className="font-bold text-white bg-[#2C6856] p-4 m-4 rounded-xl text-center text-xl hidden md:flex flex-col items-center justify-center"
        >
          KNOW MORE
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="text-2xl font-bold md:text-4xl">Testimonials</div>
        <div className="text-base my-2 md:my-6 font-semibold md:text-xl">
          Where Excellence Meets Execution
        </div>
        <Slider {...settings} className="w-[98%] md:w-[90%] max-w-[1100px]">
          {itemsTestimonials.map((testimonial) => (
            <div className="p-1 md:p-4" key={testimonial._id}>
              <div className=" md:p-5 p-3 text-white bg-[#4A8780] h-[50vw] md:h-[30vw] lg:h-96 flex flex-col justify-between rounded-lg">
                <div className="italic text-[2vw] md:text-[1.3vw] lg:text-base">
                  " {testimonial.content} "
                </div>
                <div className="flex flex-row items-center mt-4">
                  <img src={testimonial.image} className="md:w-16 w-5" alt="" />
                  <div className="italic text-[8px] md:text-lg ml-4">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="midsec5 flex items-center flex-col p-[40px] md:p-[100px] justify-center">
        <div className="flex flex-row justify-center mx-auto w-[80vw] mb-2 md:mb-8">
          <p className="md:text-[35px] flex-shrink-0 text-[20px] font-bold">
            Our Featured Projects
          </p>
        </div>
        <div className="flex flex-col gap-1 w-[80vw] font-semibold md:gap-4 items-center">
          <div className="flex flex-row gap-1 md:gap-4">
            <div className="relative">
              <Image
                className=" sm:h-[464px] w-[937px] rounded-xl"
                src={projects[0]?.media || blankimg}
              />
              <div className="w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0">
                <div className="flex absolute text-white bottom-0 flex-col p-1 md:p-3">
                  <p className="text-[3cqw] md:text-[2cqw] font-bold">
                    {projects[0]?.projectName || "Example"}
                  </p>
                  <p className="text-[2cqw] md:text-[1cqw] md:my-2">
                    Location:- {projects[0]?.location || "Example"}
                  </p>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/gallery");
                    }}
                    className="text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-4">
              <div className="relative">
                <Image
                  className="sm:h-[200px] w-[451px] rounded-xl"
                  src={projects[1]?.media || blankimg}
                />
                <div className="w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0">
                  <div className="flex absolute text-white bottom-0 flex-col p-1 md:p-3">
                    <p className="text-[3cqw] md:text-[2cqw] font-bold">
                      {projects[1]?.projectName || "Example"}
                    </p>
                    <p className="text-[2cqw] md:text-[1cqw] md:my-2">
                      Location:- {projects[1]?.location || "Example"}
                    </p>
                    <button style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/gallery");
                      }} className="text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2">
                      View More
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="sm:h-[233px] w-[451px] rounded-xl"
                  src={projects[2]?.media || blankimg}
                />
                <div className="w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0">
                  <div className="flex absolute text-white bottom-0 flex-col p-1 md:p-3">
                    <p className="text-[3cqw] md:text-[2cqw] font-bold">
                      {projects[2]?.projectName || "Example"}
                    </p>
                    <p className="text-[2cqw] md:text-[1cqw] md:my-2">
                      Location:- {projects[2]?.location || "Example"}
                    </p>
                    <button style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/gallery");
                      }} className="text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-1 md:gap-4">
            <div className="relative">
              <Image
                className="sm:h-[288px] w-[816px] rounded-xl"
                src={projects[3]?.media || blankimg}
              />
              <div className="w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0">
                <div className="flex absolute text-white bottom-0 flex-col p-1 md:p-3">
                  <p className="text-[3cqw] md:text-[2cqw] font-bold">
                    {projects[3]?.projectName || "Example"}
                  </p>
                  <p className="text-[2cqw] md:text-[1cqw] md:my-2">
                    Location:- {projects[3]?.location || "Example"}
                  </p>
                  <button style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/gallery");
                    }} className="text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="sm:h-[290px] w-[575px] rounded-xl"
                src={projects[4]?.media || blankimg}
              />
              <div className="w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0">
                <div className="flex absolute text-white bottom-0 flex-col p-1 md:p-3">
                  <p className="text-[3cqw] md:text-[2cqw] font-bold">
                    {projects[4]?.projectName || "Example"}
                  </p>
                  <p className="text-[2cqw] md:text-[1cqw] md:my-2">
                    Location:- {projects[4]?.location || "Example"}
                  </p>
                  <button style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/gallery");
                    }} className="text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Button
            maxWidth={"120px"}
            className="my-2"
            backgroundColor={"#2C6856"}
            color={"white"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/gallery");
            }}
          >
            View More
          </Button>
        </div>
      </div>
      <div className="md:w-4/5 w-[95%] flex flex-col items-center mx-auto">
        <div className="md:text-[35px] text-center text-[20px] font-bold mb-6">
          Read Our Blog.
        </div>
        <div className="grid gap-4 md:gap-10 grid-cols-3">
          {blogPosts.map((item) => (
            <div className="bg-[#D9D9D9] flex flex-col md:gap-4 gap-1 rounded-lg md:rounded-3xl">
              <div key={item._id} className="relative">
                <div className="w-full h-24 md:h-[15vw]"><img src={item.media} className="rounded-lg object-cover w-full h-full md:rounded-3xl" /></div>
                <div className="md:text-base text-[8px] absolute bottom-0 m-1 md:m-4 text-white">
                  {formatDate(item.date)}
                </div>
              </div>
              <div className="font-bold text-[10px] md:text-xl px-1 md:px-4">
                {item.title}
              </div>
              <div className="text-[8px] md:text-base px-1 md:px-4">
                {truncateText(item.content, 12)}
              </div>
              <button
                onClick={() => {
                  navigate(`/blogs/${item._id}`);
                }}
                className="font-semibold text-white w-fit bg-[#2C6856] px-2 py-1 md:py-2 md:px-4 mx-1 md:mx-4 mb-4 md:mb-6 rounded my-1 md:rounded-xl text-[9px] md:text-lg"
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 flex flex-col items-center mx-auto">
        <div className="md:text-[35px] text-center mt-8 text-[20px] font-bold">
          {itemsJoin[joinIndex]?.title ||
            "Join, Collaborate, and Transform Together!"}
        </div>
        <img
          src={itemsJoin[joinIndex]?.media || joinus}
          className="md:w-3/5 w-full my-4 md:my-8"
          alt=""
        />
        <div className="flex flex-col items-center w-full">
          <Button
            maxWidth={"120px"}
            className="my-2"
            backgroundColor={"#2C6856"}
            color={"white"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/collaborate");
            }}
          >
            View More
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

export default Homepage;
