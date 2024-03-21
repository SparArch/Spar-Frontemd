import React from 'react'
import service from '../Images/service banner.png'
import Clientlist from '../AboutUs/clientlist'
import service1 from '../Images/service1.png'
import service2 from '../Images/service2.png'
import service4 from '../Images/service4.png'
import service5 from '../Images/service5.png'
import service6 from '../Images/service6.png'
import diff1 from '../Images/diff1.png'
import diff2 from '../Images/diff2.png'
import diff3 from '../Images/diff3.png'
import diff4 from '../Images/diff4.png'
import journey from '../Images/Group 120.png'
import './services.css'
import { useEffect } from 'react'


const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <img src={service} alt="aboutimg1" className="z-10 w-full top-0" />
      <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className='w-full md:mt-[-8rem] mt-[-2rem] flex flex-col items-center services'> {/*need the edited image for the background here*/}
        <p className='text-4xl md:block hidden font-semibold mt-36 mb-16'>Services provided by us</p>
        <div className='mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] mb-12'>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Retail interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Elevate your retail experience with SPAR TechnoVet. We design spaces that captivate, engage, and reflect your brand identity. Transform your retail environment with us."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service2} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Office interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Transform your workspace with SPAR TechnoVet. Innovative, functional, and tailored office interiors for elevated productivity."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Customized Furniture</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Elevate your retail experience with SPAR TechnoVet. We design spaces that captivate, engage, and reflect your brand identity. Transform your retail environment with us."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service4} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Restaurant interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Experience dining differently with SPAR TechnoVet. We create inviting restaurant interiors that elevate your culinary journey."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service5} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Turnkey Retail Fit-out</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"SPAR Technovet excels in turnkey retail fitouts, providing end-to-end solutions for seamless and efficient design-to-execution services."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service6} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Museums</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Experience dining differently with SPAR TechnoVet. We create inviting restaurant interiors that elevate your culinary journey."</p>
          </div>
        </div>
      </div>
      <div className='w-full md:flex flex-col items-center mb-32 hidden'>
        <p className='text-4xl font-semibold my-16'>How We are Different?</p>
        <div className='flex flex-row w-4/5 justify-evenly'>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff1} className='mb-2 h-24' alt="" />
            Highly committed to Work
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff2} className='mb-2 h-24' alt="" />
            Own team and supply unit
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff3} className='mb-2 h-24' alt="" />
            Controlled Customization cost
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff4} className='mb-2 h-24' alt="" />
            End to end solution
          </div>
        </div>
      </div>
      <img src={journey} className="w-4/5 mb-32 hidden md:block" alt="" />
      <div className='md:w-4/5 w-[90%] grid grid-cols-2 md:grid-cols-4 p-4 pt-8 pb-6 md:p-12 rounded-[40px] md:rounded-[60px] shade mb-3 md:mb-0'>
        <div className='px-3 md:px-8 md:pb-0 pb-6 border-r-2 border-gray-400'>
          <p className='md:text-2xl text-[11px] font-bold mb-4'>Our Mission</p>
          <p className='text-[10px] md:text-[20px]'>To Digitize the Construction Supply Chain to bring in the control and predictability in construction project management.</p>
        </div>
        <div className='px-3 md:px-8 md:pb-0 pb-6 md:border-r-2 border-gray-400'>
          <p className='md:text-2xl text-[11px] font-bold mb-4'>Our Vision</p>
          <p className='text-[10px] md:text-[20px]'>To be the fastest ever construction company in India for small and medium scale projects.</p>
        </div>
        <div className='px-3 md:px-8 md:pb-0 pb-6 border-r-2 border-gray-400'>
          <p className='md:text-2xl text-[11px] font-bold mb-4'>Our Values</p>
          <p className='text-[10px] md:text-[20px]'>Infuse the idea of Leadership, Collaboration, Integrity, Accountability & Passion in each individual.</p>
        </div>
        <div className='px-3 md:px-8 md:pb-0 pb-6'>
          <p className='md:text-2xl text-[11px] font-bold mb-4'>Our Culture</p>
          <p className='text-[10px] md:text-[20px]'>Create a strong culture where the entire team lifts each other up in good & bad times.</p>
        </div>
      </div>
      <div className='w-3/4 hidden md:flex flex-row items-center justify-between bg-[#1E443E] text-4xl py-8 px-24 rounded-2xl mt-[60px] mb-[-40px] z-10 font-semibold'>
        <p className='text-white'>Ready To Get Started With Your Next Project?</p>
        <div className='text-[#1E443E] cursor-pointer bg-white rounded-full text-2xl py-2 px-4 font-bold'>TALK TO US</div>
      </div>
      <img src={journey} className="w-[90%] mb-2 block md:hidden" alt="" />
    </div>
  )
}

export default Service
