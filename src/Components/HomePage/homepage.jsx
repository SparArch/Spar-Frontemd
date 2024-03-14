import React from 'react';
import './homepage.css'
import Navbar from './navbar'
import { Button, Image, position } from '@chakra-ui/react';
import Back from '../Images/Homepage_back.png'
import Footer from './footer'
const Homepage = () => {
  return (
    <div className='Home'>
      <div className='img-container'>

        <Image position={'relative'}
          marginLeft={'14rem'}
          src={Back}
          width={'1350px'}
          height={'1081px'}

        />
        <div className='quote-box'>
          <div className='quote-1'>Quick Service Request</div>
          <div className='quote-2'>Get a Free Quote</div>
          <input className='quote-name' type="text" placeholder='Name' style={{ color: '#C4C4C4' }} />
          <input className='quote-num' type="text" placeholder='Phone No.' style={{ color: '#C4C4C4' }} />
          <Button backgroundColor={'#2C6856'}>Send </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage
