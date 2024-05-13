import React, { useState, useEffect } from 'react';
import blogsbg from '../Images/blogsbg.png'
import {Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import Arrow from '../Images/Arrow.png'
import axios from 'axios';
import BACKEND_URL from '../../helper';
import Clientlist from '../AboutUs/clientlist';
import Bookacall from '../AboutUs/bookacall';
import homebg from '../Images/homebg.png'
const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <img src={blogsbg} alt="aboutimg1" className="z-10 w-full top-0 filter brightness-50" />
      <Text position={'relative'} display={'flex'} justifyContent={'center'} color={'white'} className='md:text-[35px] text-[15px] bottom-0 mt-[-30px] md:mt-[-60px] z-20' fontWeight={'600'}>BLOGS, CASE STUDIES & MEDIA MENTIONS</Text>
      <div className=" w-full top-[-0.1rem] md:hidden flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="flex flex-col gap-3 md:gap-10 md:my-16 my-4 w-[90%] md:w-4/5 items-center">
        <div className='md:text-4xl text-sm text-center font-semibold'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE</div>
        <img src={homebg} className='w-full' alt="" />
        <div className='text-[10px] leading-3 md:text-lg'>Once upon a time in the realm of architectural dreams, a remarkable team emerged - SPAR Technovet, the wizards of construction, enchanting the world by bringing ideas to life. In Act 1, they addressed a common woe - brilliant concepts confined to paper. SPAR Technovet stepped in as the magical solution, transforming dreams into tangible reality. Act 2 unfolded as a tale of teamwork magic, where designers and builders collaborated seamlessly, ensuring projects flowed effortlessly from inception to completion. Act 3 revealed their wizardry in crafting magical building materials, each detail brewed in their workshop with a secret recipe for quality. Act 4 showcased a collection of completed projects, not just buildings but enchanting experiences. SPAR Technovet turned imagination into touchable reality. Act 5 featured their special spell - an end-to-end solution, simplifying the journey from dream to reality. In the finale, SPAR Technovet emerged as the conductor of an architectural orchestra, turning chaos into a harmonious dance. Join the magic at SPAR Technovet, where dreams evolve from paper to lasting masterpieces. It's a world where every building holds a touch of magic, and every client's dream becomes a reality. Step into the enchanting realm where architecture meets magic, and dreams are transformed into tangible wonders.oin the magic at SPAR Technovet, where dreams evolve from paper to lasting masterpieces. It's a world where every building holds a touch of magic, and every client's dream becomes a reality. Step into the enchanting realm where architecture meets magic, and dreams are transformed into tangible wonders.</div>
        <div className='grid grid-cols-4 gap-2 md:gap-6 h-[20vw] md:h-[15vw]'>
            <div className='relative flex flex-col items-start justify-center object-cover'>
                <img src={homebg} className='object-cover w-full h-full' alt="" />
                <div className='text-[2.5vw] md:text-[1.5vw] w-full font-bold text-white absolute p-1 md:p-4'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE</div>
            </div>
            <div className='relative flex flex-col items-start justify-center object-cover'>
                <img src={homebg} className='object-cover w-full h-full' alt="" />
                <div className='text-[2.5vw] md:text-[1.5vw] w-full font-bold text-white absolute p-1 md:p-4'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE</div>
            </div>
            <div className='relative flex flex-col items-start justify-center object-cover'>
                <img src={homebg} className='object-cover w-full h-full' alt="" />
                <div className='text-[2.5vw] md:text-[1.5vw] w-full font-bold text-white absolute p-1 md:p-4'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE</div>
            </div>
            <div className='relative flex flex-col items-start justify-center object-cover'>
                <img src={homebg} className='object-cover w-full h-full' alt="" />
                <div className='text-[2.5vw] md:text-[1.5vw] w-full font-bold text-white absolute p-1 md:p-4'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE</div>
            </div>
        </div>
      </div>
      <div className='w-full items-center flex flex-col md:my-8'><Bookacall /></div>
    </div>
  )
}

export default Blogs
