import React, { useState } from 'react';
import './homepage.css'
import { Button, Divider, Image, position } from '@chakra-ui/react';
import Slider from 'react-slick';
import homebg from '../Images/homebg.png'
import homebg2 from '../Images/homebg2.png'
import { useEffect } from 'react';
import Clientlist from '../AboutUs/clientlist'
import service1 from '../Images/service1.png'
import service2 from '../Images/service2.png'
import service3 from '../Images/service3.png'
import service4 from '../Images/service4.png'
import service5 from '../Images/service5.png'
import service6 from '../Images/midsec2-1.png'
import rightprob from '../Images/rightprob.png'
import rightprobphone from '../Images/rightprobphone.png'
import joinus from '../Images/joinus.png'
import Bookacall from '../AboutUs/bookacall'
import morebtn from '../Images/midsec2-2.png'
import midsec51 from '../Images/midsec5-1.png'
import midsec52 from '../Images/midsec5-2.png'
import midsec53 from '../Images/midsec5-3.png'
import midsec54 from '../Images/midsec5-4.png'
import midsec55 from '../Images/midsec5-5.png'
import midsec71 from '../Images/midsec7-1.png'
import midsec81 from '../Images/midsec8-1.png'
import diff1 from '../Images/diff1.png'
import diff2 from '../Images/diff2.png'
import diff3 from '../Images/diff3.png'
import diff4 from '../Images/diff4.png'
import diff5 from '../Images/diff5.png'
import axios from 'axios';
import BACKEND_URL from '../../helper';
import blankimg from "../Images/black-img.png";
const Homepage = () => {
  const [itemsSpaces, setItemsSpaces] = useState([]);
  const [itemsSolve, setItemsSolve] = useState([]);
  const [itemsTestimonials, setItemsTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);

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

  const fetchItemsSolve = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/solveForRightProblems`);
      setItemsSolve(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchItemsSpaces = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/knowEverySpaces`);
      setItemsSpaces(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchItemsTestimonials = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/knowEverySpaces`);
      setItemsTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/home/featuredProjects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };


  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='Home'>
      <div className=' '>
        <div className='w-full'>
          <img src={homebg} className='w-full' />
        </div>
        {/* <div className='relative bottom-36 -mt-16 -mb-20'><Clientlist /></div> */}
        <div className=" w-full md:top-[-1.25rem] top-[-1.5rem] flex flex-col items-center relative">
          <Clientlist />
        </div>
        <div className='w-full'>
          <img src={homebg2} className='w-full' />
        </div>
      </div>
      
     {/* We Know Every Spaces */}
    <div className="midsec22 flex flex-col items-center justify-center">
      <div className='text-3xl md:text-5xl font-bold mt-8 text-center'>We Know Every Spaces.</div>
      <div className='text-base md:text-xl font-semibold mt-4 text-center'>Transformative, Tailored, Innovative.</div>
      <div className='mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] md:mb-12'>
        {itemsSpaces.slice(0, 5).map(item => (
          <div key={item._id} className='bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={item.media || blankimg} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>{item.title}</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>{item.content}</p>
          </div>
        ))}
        <div className='bg-[#2C6856] flex flex-row rounded-xl md:rounded-3xl text-white'>
          <div className='ml-3'>
            <p className='md:text-[1.6vw] text-sm text-center font-semibold my-1 md:my-4 pl-[0] pt-14 md:pt-20 pb-0'>+4</p>
            <p className='md:text-[1.6vw] text-sm font-semibold my-1 md:my-10 pl-[0] pb-0'>Learn More</p>
          </div>
          <div className='flex flex-col'>
            <img src={service6} alt="" className='md:w-[60px] md:h-[125px] h-[70px] w-[50px]' />
            <div><img src={morebtn} alt="" className='h-[20px] md:h-auto m-4' /></div>
          </div>
        </div>
      </div>
    </div>

    {/* We Solve the Right Problems. */}
    <div className='w-full my-8 flex flex-col items-center'>
      <div className='text-2xl font-bold my-4 md:my-12 md:text-4xl'>We Solve the Right Problems.</div>
      <div className='grid md:grid-cols-5 gap-8 grid-cols-2 w-[80%]'>
        {itemsSolve.slice(0, 5).map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={item.media || blankimg} className='mb-2 h-12 md:h-24' alt="" />
            {item.title}
          </div>
        ))}
        <div className='md:hidden font-bold text-white bg-[#2C6856] m-4 rounded-xl text-center text-xl flex flex-col items-center justify-center'>
          KNOW<br /> MORE
        </div>
      </div>
      <div className='font-bold text-white bg-[#2C6856] p-4 m-4 rounded-xl text-center text-xl hidden md:flex flex-col items-center justify-center'>
        KNOW MORE
      </div>
    </div>
    {/* Testimonials */}
      <div className='w-full flex flex-col items-center overflow-hidden'>
        <div className='text-2xl font-bold md:text-4xl'>Testimonials</div>
        <div className='text-base my-2 md:my-6 font-semibold md:text-xl'>Where Excellence Meets Execution</div>
        <Slider {...settings} className='w-[98%] md:w-[90%] max-w-[1100px]'>
          {itemsTestimonials.map(testimonial => (
            <div className='p-1 md:p-4'>
              <div key={testimonial._id} className=' md:p-5 p-3 text-white bg-[#4A8780] rounded-lg'>
                <div className='italic text-[8px] md:text-lg'>" {testimonial.content} "</div>
                <div className='flex flex-row items-center mt-4'>
                  <img src={testimonial.image} className='md:w-16 w-5' alt="" />
                  <div className='italic text-[8px] md:text-lg ml-4'>{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='midsec5 flex items-center flex-col p-[40px] md:p-[100px] bg-zinc-100 justify-center'>

        <div className='flex flex-row justify-between mb-2 md:mb-8'>
          <p className='md:text-[35px] flex-shrink-0 text-[15px] font-bold'>Our Featured Projects</p>

        </div>
        <div className='flex flex-col gap-1 w-[80vw] font-semibold md:gap-4 items-center'>

          <div className='flex flex-row gap-1 md:gap-4'>
            <div className='relative'>
              <Image className='h-[464px] w-[937px] rounded-xl' src={projects[0]?.media||blankimg} />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>{projects[0]?.projectName|| "Example"}</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- {projects[0]?.location|| "Example"}</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1 md:gap-4'>
              <div className='relative'>
                <Image className='h-[200px] w-[451px] rounded-xl' src={projects[1]?.media||blankimg} />
                <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>{projects[1]?.projectName|| "Example"}</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- {projects[1]?.location|| "Example"}</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
              </div>
              <div className='relative'>
                <Image className='h-[233px] w-[451px] rounded-xl' src={projects[2]?.media||blankimg} />
                <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>{projects[2]?.projectName|| "Example"}</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- {projects[2]?.location|| "Example"}</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-1 md:gap-4'>
            <div className='relative'>
              <Image className='h-[288px] w-[816px] rounded-xl' src={projects[3]?.media || blankimg}  />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>{projects[3]?.projectName || "Example"}</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- {projects[3]?.location || "Example"}</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
            <div className='relative'>
              <Image className='h-[290px] w-[575px] rounded-xl' src={projects[4]?.media || blankimg} />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>{projects[4]?.projectName|| "Example"}</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- {projects[4]?.location|| "Example"}</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full'><Button maxWidth={'120px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>

      </div>

      <div>
        <img src={joinus} className='w-full my-4 md:my-8' alt="" />
      </div>
      <div className='w-full items-center flex flex-col my-8'><Bookacall /></div>

    </div >
  )
}

export default Homepage
