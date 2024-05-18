import React, { useState, useEffect } from 'react';
import blogsbg from '../Images/blogsbg.png'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import Arrow from '../Images/Arrow.png'
import axios from 'axios';
import BACKEND_URL from '../../helper';
import Clientlist from '../AboutUs/clientlist';
import Bookacall from '../AboutUs/bookacall';
import homebg from '../Images/homebg.png'
import Navbar from '../HomePage/navbar';
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
      <Navbar />
      <img src={blogsbg} alt="aboutimg1" className="z-10 w-full top-0 filter brightness-50" />
      <Text position={'relative'} display={'flex'} justifyContent={'center'} color={'white'} className='md:text-[35px] text-[15px] bottom-0 mt-[-30px] md:mt-[-60px] z-20' fontWeight={'600'}>BLOGS, CASE STUDIES & MEDIA MENTIONS</Text>
      <div className=" w-full top-[-0.1rem] md:hidden flex flex-col items-center relative">
        <Clientlist />
      </div>
      <div className="flex flex-col gap-3 md:gap-10 md:my-24 my-4 w-4/5 items-center">
        <div className='flex flex-row gap-2 md:gap-12'>
          <div className='h-[25vw] md:h-[20vw]'>
            <img src={homebg} className=' h-full w-full md:rounded-2xl' />
          </div>
          <div className='flex flex-col justify-between w-2/3'>
            <div className='font-semibold text-[3.5vw] md:text-[2vw]'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE<br />
              <div className='text-[1.5vw] font-bold'>19 AUG 2024  12:00PM</div>
            </div>
            <div className='text-[1vw] md:block hidden'>IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM.IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM</div>
            <div className='text-[2vw] md:mb-0 mb-2 md:text-[1.5vw] p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold'>READ MORE → </div>
          </div>
        </div>
        <div className='flex flex-row gap-2 md:gap-12'>
          <div className='h-[25vw] md:h-[20vw]'>
            <img src={homebg} className=' h-full w-full md:rounded-2xl' />
          </div>
          <div className='flex flex-col justify-between w-2/3'>
            <div className='font-semibold text-[3.5vw] md:text-[2vw]'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE<br />
              <div className='text-[1.5vw] font-bold'>19 AUG 2024  12:00PM</div>
            </div>
            <div className='text-[1vw] md:block hidden'>IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM.IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM</div>
            <div className='text-[2vw] md:mb-0 mb-2 md:text-[1.5vw] p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold'>READ MORE → </div>
          </div>
        </div>
        <div className='flex flex-row gap-2 md:gap-12'>
          <div className='h-[25vw] md:h-[20vw]'>
            <img src={homebg} className=' h-full w-full md:rounded-2xl' />
          </div>
          <div className='flex flex-col justify-between w-2/3'>
            <div className='font-semibold text-[3.5vw] md:text-[2vw]'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE<br />
              <div className='text-[1.5vw] font-bold'>19 AUG 2024  12:00PM</div>
            </div>
            <div className='text-[1vw] md:block hidden'>IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM.IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM</div>
            <div className='text-[2vw] md:mb-0 mb-2 md:text-[1.5vw] p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold'>READ MORE → </div>
          </div>
        </div>
        <div className='flex flex-row gap-2 md:gap-12'>
          <div className='h-[25vw] md:h-[20vw]'>
            <img src={homebg} className=' h-full w-full md:rounded-2xl' />
          </div>
          <div className='flex flex-col justify-between w-2/3'>
            <div className='font-semibold text-[3.5vw] md:text-[2vw]'>THE 15 EMERGING TRENDS IN THE OFFICE SPACE<br />
              <div className='text-[1.5vw] font-bold'>19 AUG 2024  12:00PM</div>
            </div>
            <div className='text-[1vw] md:block hidden'>IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM.IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIM</div>
            <div className='text-[2vw] md:mb-0 mb-2 md:text-[1.5vw] p-1 px-2 md:p-3 md:px-5 md:rounded-xl border-[#4A8780] border-[1px] md:border-2 w-fit font-semibold'>READ MORE → </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full'><Button maxWidth={'120px'} className='md:my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>
      </div>
      <div className='w-full items-center flex flex-col md:my-8'><Bookacall /></div>
    </div>
  )
}

export default Blogs
