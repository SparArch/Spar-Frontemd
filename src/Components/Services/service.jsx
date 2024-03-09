import React from 'react'
import Navbar from '../HomePage/navbar'
import service from '../Images/service banner.png'
import clientlist from '../Images/client list.png'
import Footer from '../HomePage/footer'


const Service = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='p-2 w-full'><div className='drop-shadow-xl'><Navbar page = "about"/></div></div>
      <img src={service} alt="aboutimg1" className="absolute -z-20 w-full top-0"/>
      <div className='w-full bg-transparent'></div>
      <div className='rounded-3xl absolute flex flex-row w-[95%] justify-evenly items-center bg-[#1E443E] h-36 mt-[20vw] drop-shadow-xl'>
        <img src={clientlist} alt="clientlist" className="w-[80%]"/>
        <div className='w-[2px] bg-white h-4/5'></div>
        <div className=' rounded-full bg-white h-fit px-6 py-2 text-[1rem] font-bold text-[#1E443E] drop-shadow-xl'>VIEW ALL CLIENTS</div>
      </div>
      <div className='h-[100vh]'></div>
      <Footer/>
    </div>
  )
}

export default Service
