import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import { Button, Input } from '@chakra-ui/react'
import './newblog.css'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
const newblog = () => {
  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='blogs-main'>
        <div className="blogs">
          <div style={{ display: 'flex', flexDirection: "column", gap: '20px' }}>
            <div style={{ display: "flex", alignItems: "center", gap: "40rem" }}>
              <h3>ADD NEW POST</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>
                  PUBLISH
                </Button>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>BACK</Button>
              </div>

            </div>
            <div><Input maxW={'90%'} marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
            </div>
            <div>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>

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
              <Input maxWidth={'90%'} placeholder='Write...' borderRadius={'20px'} minHeight={'300px'} />
            </div>
            <div>
              <h3>Tags</h3>
            </div>
            <div>
              <Input maxWidth={'90%'} borderRadius={'20px'} minHeight={'80px'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default newblog
