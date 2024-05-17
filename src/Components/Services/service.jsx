import React from 'react'
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
import consultation from '../Images/consultation.png'
import idea from '../Images/idea.png'
import threed from '../Images/3d.png'
import arrowservice from '../Images/arrowservice.png'
import manuf from '../Images/manuf.png'
import strategy from '../Images/strategy.png'
import ship from '../Images/ship.png'
import assembling from '../Images/assembling.png'
import final from '../Images/final.png'

const Service = () => {
  useEffect(() => {
    // window.scrollTo(0, 0)
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
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Bespoke Solutions</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>Customized design solutions tailored to fit the unique requirements and branding of each space.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service2} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Roll-Out Services</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>Strategic planning and execution of multi-location rollouts, maintaining consistency and quality across all spaces.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Sustainable Services</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>Committed to sustainable practices, offering Eco-friendly solutions for retail environments.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service4} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Manufacturing</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>High-quality manufacturing of fixtures, fittings, and furniture to bring designs to life.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service5} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>End-to-End Solutions</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'> Offers comprehensive end-to-end solutions for all interiors, covering everything from initial design concepts to final installation.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service6} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Branding and Signage</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>Store Branding and Signage services enhance your brand's visibility with impactful, custom solutions for a cohesive brand experience.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service6} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Design and Decor</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'> Interior Design and Decor services create inviting retail spaces that enhance the customer experience, reflecting your brand identity and leaving a lasting impression.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service6} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Fixture Installation</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'> Fixture Installation service ensures a professional setup of all interior fixtures, enhancing the visual appeal and functionality of your store.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-1 md:px-6 py-2 md:py-4 rounded-xl md:rounded-3xl'>
            <img src={service6} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-xs text-center font-bold my-1 md:my-4'>Bespoke Furniture</p>
            <p className='text-center text-[1.3vw] md:text-[1vw]'>custom-designed bespoke furniture, tailored to your exact specifications for a unique and functional space.</p>
          </div>
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
