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
import Bookacall from '../AboutUs/bookacall'
import Navbar from '../HomePage/navbar'
import consultation from '../Images/consultation.png'
import idea from '../Images/idea.png'
import threed from '../Images/3d.png'
import arrowservice from '../Images/arrowservice.png'
import manuf from '../Images/manuf.png'
import strategy from '../Images/strategy.png'
import ship from '../Images/ship.png'
import assembling from '../Images/assembling.png'
import final from '../Images/final.png'
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
    // window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
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
      <p className='text-[7vw] leading-10 md:text-[4vw] font-bold md:my-8'>Our Work Process</p>
      <p className='font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]'>Design</p>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-center'>
          <img src={consultation} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Consultation</p>
        </div>
        <img src={arrowservice} alt="arrow" className='w-6 md:w-12' />
        <div className='flex flex-col items-center'>
          <img src={idea} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Ideation</p>
        </div>
        <img src={arrowservice} alt="arrow" className='w-6 md:w-12' />
        <div className='flex flex-col items-center'>
          <img src={threed} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>3D Design</p>
        </div>
      </div>
      <p className='font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]'>Develop</p>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-center'>
          <img src={manuf} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>In house Manufacturing</p>
        </div>
        <img src={arrowservice} alt="arrow" className='w-6 md:w-12' />
        <div className='flex flex-col items-center'>
          <img src={strategy} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Strategy Implementation</p>
        </div>
      </div>
      <p className='font-semibold my-6 md:my-12 text-[5vw] md:text-[3vw]'>Deliver</p>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-center'>
          <img src={ship} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Material Shipping</p>
        </div>
        <img src={arrowservice} alt="arrow" className='w-6 md:w-12' />
        <div className='flex flex-col items-center'>
          <img src={assembling} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Assembling</p>
        </div>
        <img src={arrowservice} alt="arrow" className='w-6 md:w-12' />
        <div className='flex flex-col items-center'>
          <img src={final} alt="consultation" className='w-1/2' />
          <p className='text-[3vw] md:text-[1vw] font-bold'>Final Delivery</p>
        </div>
      </div>
      {/* <img src={workprocess} alt="journey" className='w-4/5 mt-8 md:mb-48' /> */}
      <div className='w-full items-center flex flex-col mt-16 my-4'><Bookacall /></div>
    </div>
  )
}

export default Service
