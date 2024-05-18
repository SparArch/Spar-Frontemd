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
          <div className='flex-col content-center justify-center items-center ml-[100px] ' >
            <div className='flex  gap-10'>
              <Image src={instaIcon} />
              <Input width={'600px'} />
              <Button backgroundColor={'#2C6856'} color={'#fff'}> ADD LINK</Button>
            </div>
            <div className='flex gap-10'>
              <Image src={linkedIcon} />
              <Input width={'600px'} />
              <Button backgroundColor={'#2C6856'} color={'#fff'}> ADD LINK</Button></div>
            <div className='flex gap-10 ml-3'>
              <Image paddingRight={'11px'} src={faceIcon} />
              <Input width={'600px'} />
              <Button backgroundColor={'#2C6856'} color={'#fff'}> ADD LINK</Button></div>
            <div className='flex gap-10'>
              <Image src={twitterIcon} />
              <Input width={'600px'} />
              <Button backgroundColor={'#2C6856'} color={'#fff'}> ADD LINK</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
