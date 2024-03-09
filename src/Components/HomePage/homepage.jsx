import React from 'react';
import './homepage.css'
import Navbar from './navbar'
import { Image } from '@chakra-ui/react';
import Back from '../Images/Homepage_back.png'
import Footer from './footer'
const Homepage = () => {
  return (
    <div className='Home' >
      <Navbar />


      <Image position={'relative'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        src={Back} />
      <Footer />
    </div>
  )
}

export default Homepage
