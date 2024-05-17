import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import { Button, Image, Input } from '@chakra-ui/react'
import instaIcon from '../../Images/insta-icon.png'
import linkedIcon from '../../Images/linkedin-icon.png'
import twitterIcon from '../../Images/twitter-icon.png'
import faceIcon from '../../Images/facebook-icon.png'

const Social = () => {
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className='flex justify-center mt-[10rem] bg-white'>
        <div className='flex justify-flex-start gap-[50px]'>
          <div className='flex-col justify-center ml-[100px] gap-[100px]' >
            <div className='flex text-center  justify-center gap-10'>
              <Image src={instaIcon} />
              <Input width={'600px'} />
              <Button> ADD LINK</Button>
            </div>
            <div className='flex text-center justify-center gap-10'>
              <Image src={linkedIcon} />
              <Input width={'600px'} />
              <Button> ADD LINK</Button></div>
            <div className='flex text-center justify-center gap-10'>
              <Image src={faceIcon} />
              <Input width={'600px'} />
              <Button> ADD LINK</Button></div>
            <div className='flex text-center justify-center gap-10'>
              <Image src={twitterIcon} />
              <Input width={'600px'} />
              <Button> ADD LINK</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
