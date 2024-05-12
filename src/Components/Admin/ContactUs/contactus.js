import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import './contactus.css'
import { Button, Input } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
const contactus = () => {
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className='contact-main'>
        <div className='contact'>
          <div style={{ display: "flex", alignItems: "center", gap: "40rem" }}>
            <h3>ADD NEW POST</h3>
            <Button backgroundColor={'#2C6856'} color={'#fff'}>
              PUBLISH
            </Button>


          </div>
          <div>
            <Input maxW={'100%'} marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
          </div>
          <div className='blogs1'>
            <Button fontWeight={'800'}>
              <img src={b} alt="" />
            </Button>
            <Button fontStyle={'italic'}>I</Button>
            <Button><img src={clip} alt="clip_logo" /></Button>
            <Button><img src={left_align_icon} alt="clip_logo" /></Button>
            <Button><img src={right_align_icon} alt="clip_logo" /></Button>
            <Button><img src={center_align_icon} alt="clip_logo" /></Button>
            <Button><img src={bullet_icon} alt="clip_logo" /></Button>
            <Button>FONT OPTION</Button>
            {/* <Button marginLeft={'20rem'} paddingRight={'2rem'} paddingLeft={'2rem'} backgroundColor={'#2C6856'} color={'#fff'}>ADD</Button> */}
          </div>
          <div>
            <Input minHeight={'150px'} maxW={'100%'} marginTop={'20px'} borderRadius={'10px'} marginBottom={'20px'} placeholder='Write......' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactus
