import React from 'react';
import './homepage.css'
import Navbar from './navbar'
import { Image, position } from '@chakra-ui/react';
import Back from '../Images/Homepage_back.png'
const Homepage = () => {
  return (
    <div className='Home'>

      <Image position={'relative'}
        top={0}
        // backgroundRepeat={'no-repeat'}
        // backgroundPosition={'center'}
        // display={'flex'}
        // justifyContent={'flex-end'}
        // alignItems={'flex-end'}
        src={Back} />
      Home

    </div>
  )
}

export default Homepage
