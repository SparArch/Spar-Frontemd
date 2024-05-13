import React, { useState } from 'react'
import aboutimg1 from '../Images/About img1.png'
import aboutusphone from '../Images/aboutus phone.png'
import aboutus from '../Images/aboutus.png'
import './aboutus.css'
import Clientlist from './clientlist'
import { useEffect } from 'react'
import axios from 'axios'
import BACKEND_URL from '../../helper'
import diff1 from '../Images/diff1.png'
import diff2 from '../Images/diff2.png'
import diff3 from '../Images/diff3.png'
import diff4 from '../Images/diff4.png'
import diff5 from '../Images/diff5.png'
import Bookacall from './bookacall'
import { Button } from '@chakra-ui/react'


const Aboutus = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [about, setAbout] = useState('');
  const [pic, setPic] = useState('');
  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/testimonials`);
      const response_about = await axios.get(`${BACKEND_URL}/api/about`);
      setTestimonials(response.data);
      setAbout(response_about.data[0].content);
      setPic(response_about.data[0].image);

    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={aboutimg1} alt="aboutimg1" className="-z-20 w-full relative" />
      <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='text-[10vw] md:hidden block my-2 font-bold'>About Us</div>
        <img src={aboutusphone} alt="aboutusphone" className="w-[90%] md:w-3/4" />
        <div className='text-[7vw] font-bold md:block hidden'>About Us</div>
        <div className='text-center text-[#5C675A] text-[9px] my-2 md:text-xl font-semibold w-[85%] md:w-3/4'>SPAR is a leading provider of bespoke solutions for a wide range of spaces, including retail, hospitality, corporate, and more. With a focus on innovation and quality, we offer end-to-end services from concept to installation, ensuring that every project meets the highest standards of excellence. Our team of experts is committed to delivering tailored solutions that not only meet but exceed our clients' expectations. Join us on a journey of transformation and let us bring your vision to life.</div>
      </div>
      
      <div className='md:text-[4vw] text-xl md:mt-12 my-2 font-bold'>We Solve the Right Problems.</div>
      <div className='flex gap-4 md:gap-12 flex-col mt-4 md:my-12 items-center w-[95%] md:w-[90%]'>
        <div className='flex w-full justify-evenly flex-row md:gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <img src={diff1} alt="aboutus" className="w-12 md:w-20" />
            <div className='text-center font-semibold text-[10px] md:text-3xl'>Highly Committed to Work</div>
          </div>
          <div className='text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5'>We are dedicated to delivering exceptional results and ensuring customer satisfaction.</div>
        </div>
        <div className='flex w-full justify-evenly flex-row-reverse md:gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <img src={diff2} alt="aboutus" className="w-12 md:w-20" />
            <div className='text-center font-semibold text-[10px] md:text-3xl'>Own Team and Supply Unit</div>
          </div>
          <div className='text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#4A8780] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5'>With our in-house team and supply unit, we have full control over the quality and timeline of our projects.</div>
        </div>
        <div className='flex w-full justify-evenly flex-row md:gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <img src={diff3} alt="aboutus" className="w-12 md:w-20" />
            <div className='text-center font-semibold text-[10px] md:text-3xl'>Controlled Customization Cost</div>
          </div>
          <div className='text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5'> We offer cost-effective solutions without compromising on quality, ensuring that customization remains affordable.</div>
        </div>
        <div className='flex w-full justify-evenly flex-row-reverse md:gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <img src={diff4} alt="aboutus" className="w-12 md:w-20" />
            <div className='text-center font-semibold text-[10px] md:text-3xl'>End-to-End Solution</div>
          </div>
          <div className='text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#4A8780] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5'>From concept to completion, we provide comprehensive services, handling every aspect of the project.</div>
        </div>
        <div className='flex w-full justify-evenly flex-row md:gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <img src={diff5} alt="aboutus" className="w-12 md:w-20" />
            <div className='text-center font-semibold text-[10px] md:text-3xl'>Prototype and Mockup to Roll Out</div>
          </div>
          <div className='text-white text-[10px] md:text-[1.5vw] md:text-left text-center bg-[#2C6856] p-2 md:p-6 px-4 md:px-12 rounded-full w-[70%] md:w-3/5'>Our process includes creating prototypes and mockups to ensure that the final product meets your expectations before full-scale rollout.</div>
        </div>
      </div>
      <div className='md:w-4/5 w-[90%] grid grid-cols-2 md:hidden p-4 pt-8 pb-6 md:p-12 rounded-[40px] mt-6 shade mb-3 md:mb-0'>
        <div className='px-3 pb-6 border-r-[1px] border-black'>
          <p className='md:text-2xl text-[11px] font-bold mb-2'>Our Mission</p>
          <p className='text-[10px] md:text-[20px]'>To Digitize the Construction Supply Chain to bring in the control and predictability in construction project management.</p>
        </div>
        <div className='px-3 pb-6 border-black'>
          <p className='md:text-2xl text-[11px] font-bold mb-2'>Our Vision</p>
          <p className='text-[10px] md:text-[20px]'>To be the fastest ever construction company in India for small and medium scale projects.</p>
        </div>
        <div className='px-3 pb-6 border-r-[1px] border-black'>
          <p className='md:text-2xl text-[11px] font-bold mb-2'>Our Values</p>
          <p className='text-[10px] md:text-[20px]'>Infuse the idea of Leadership, Collaboration, Integrity, Accountability & Passion in each individual.</p>
        </div>
        <div className='px-3 pb-6'>
          <p className='md:text-2xl text-[11px] font-bold mb-2'>Our Culture</p>
          <p className='text-[10px] md:text-[20px]'>Create a strong culture where the entire team lifts each other up in good & bad times.</p>
        </div>
      </div>
      <div className='text-[10vw] my-2 font-bold'>Our Clients</div>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-8 w-[90%]'>
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full hidden md:block rounded-xl md:rounded-3xl" />
      </div>
      <div className='flex flex-col items-center mt-4 w-full'><Button padding={'20px'} fontSize={'20px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>
      <div className='text-[6vw] hidden md:block my-2 font-bold'>Our Certification</div>
      <div className='hidden md:grid grid-cols-6 mb-24 gap-8 w-[90%]'>
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
        <img src={aboutus} alt="aboutus" className="w-full rounded-xl md:rounded-3xl" />
      </div>
      <div className='w-full items-center flex flex-col md:my-8'><Bookacall /></div>
    </div>
  )
}

export default Aboutus
