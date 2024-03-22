import React, { useState } from 'react'
import aboutimg1 from '../Images/About img1.png'
import aboutusphone from '../Images/aboutus phone.png'
import aboutus from '../Images/aboutus.png'
import aboutgraphic from '../Images/aboutgraphic.png'
import testimonialimage from '../Images/testimonial image.png'
import './aboutus.css'
import Clientlist from './clientlist'
import { useEffect } from 'react'
import axios from 'axios'
import BACKEND_URL from '../../helper'


const Aboutus = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [about,setAbout]=useState('');
  const [pic,setPic]=useState('');
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
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={aboutimg1} alt="aboutimg1" className="-z-20 w-full relative" />
      <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className=' w-full md:mt-[-3rem] mt-[-2rem] flex flex-col md:flex-row justify-between'>
        <img src={pic} alt="aboutus" className="w-[40%] -z-30 flex-shrink-0 md:block hidden" />
        <div className='flex flex-col w-full px-8 md:py-10 md:mt-12'>
          <div className='text-[#707070] text-4xl md:text-[4rem] flex flex-row justify-between font-bold '>
            <div className='mt-[7vw] flex-shrink-0 w-full mb-4 md:mb-0 text-center md:w-auto'>About Us</div>
            <img src={aboutgraphic} alt="aboutgraphic" className='md:block w-[20vw] hidden' />
          </div>
          <img src={aboutusphone} alt="aboutusphone" className='md:hidden block w-full' />
          <div className='text-[#5C675A] text-[9px] leading-[10px] md:text-xl mb-4 md:mb-0 font-normal md:font-medium md:w-[90%] mt-4'>
            {about}</div>
        </div>
      </div>
      <div className=' font-bold text-xs md:text-4xl pt-2 md:pt-12 bg-[#F8F8F8] w-full text-center'>TESTIMONIALS</div>
      <div className='text-4xl md:text-8xl text-[#2C6856] font-bold bg-[#F8F8F8] w-full text-center py-2 md:py-6'>PEOPLE SAYS</div>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 md:gap-y-12 w-2/3 md:w-4/5 mb-6 md:mb-36'>
      {testimonials.map(testimonial => (
          <div key={testimonial._id} className='w-[100%] p-4 shade rounded-lg'>
            <div className='italic text-xs md:text-lg'>" {testimonial.content} "</div>
            <div className='flex flex-row items-center mt-4'>
              <img src={testimonial.image} className='md:w-auto w-8' alt="" />
              <div className='italic text-xs md:text-lg ml-4'>{testimonial.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutus
