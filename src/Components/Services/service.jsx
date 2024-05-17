import React, { useState } from 'react'
import service from '../Images/service banner.png'
import Clientlist from '../AboutUs/clientlist'
import service1 from '../Images/service1.png'
import service2 from '../Images/service2.png'
import service4 from '../Images/service4.png'
import service5 from '../Images/service5.png'
import service6 from '../Images/service6.png'
import './services.css'
import { useEffect } from 'react'
import contactusbg from '../Images/contactusbg.png'
import workprocess from '../Images/workprocess.png'
import Bookacall from '../AboutUs/bookacall'
import axios from 'axios'
import BACKEND_URL from '../../helper'


const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/service/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <img src={service} alt="aboutimg1" className="z-10 w-full top-0" />
      <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div style={{ backgroundImage: `url(${contactusbg})` }} className='w-full  flex flex-col items-center services'> 
        <p className='text-[10vw] leading-10 md:text-[5vw] font-bold md:my-8'>What We Do.</p>
        <p className='font-semibold my-2 text-[3vw] md:text-[1.8vw]'>Transformative, Tailored, Innovative.</p>
        <div className='md:mt-12 grid md:gap-8 gap-3 grid-cols-3 md:w-4/5 w-[90%] mb-12'>
      {services.map((service, index) => (
        <div key={index} className='bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
          <img src={service.media} className='md:h-[30%] h-[98px] w-[98px]' alt={service.title} />
          <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>{service.title}</p>
          <p className='text-center text-[1.3vw] md:text-[1vw]'>{service.content}</p>
        </div>
      ))}
    </div>
      </div>
      <img src={workprocess} alt="journey" className='w-4/5 mt-8 md:mb-48' />
      <div className='w-full items-center flex flex-col my-4'><Bookacall /></div>
    </div>
  )
}

export default Service
