import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import '../Home/home.css'
import { Button, Input } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
const about = () => {
  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='Titles-main'>
        <div className='Titles'>
          <div>
            <h3>ABOUT US</h3>
            <div className='title1'>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
              <Button fontWeight={'800'}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={'italic'}>I</Button>
              <Button><img src={clip} alt="clip_logo" /></Button>
              <Button><img src={left_align_icon} alt="clip_logo" /></Button>
              <Button><img src={right_align_icon} alt="clip_logo" /></Button>
              <Button><img src={center_align_icon} alt="clip_logo" /></Button>
              <Button><img src={bullet_icon} alt="clip_logo" /></Button>
              <Button>FONT Options</Button>

              <Button marginLeft={'20rem'} backgroundColor={'#2C6856'} color={'#fff'}>SAVE CHANGES</Button>
            </div>
            <div>
              <Input marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
              <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} />
            </div>
          </div>
          <div>
            <h3>SOLUTIONS</h3>
            <div className='title1'>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
              <Button fontWeight={'800'}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={'italic'}>I</Button>
              <Button><img src={clip} alt="clip_logo" /></Button>
              <Button><img src={left_align_icon} alt="clip_logo" /></Button>
              <Button><img src={right_align_icon} alt="clip_logo" /></Button>
              <Button><img src={center_align_icon} alt="clip_logo" /></Button>
              <Button><img src={bullet_icon} alt="clip_logo" /></Button>
              <Button marginLeft={'20rem'} backgroundColor={'#2C6856'} color={'#fff'}>SAVE CHANGES</Button>
            </div>

            <Input marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
            <div className='title1'>
              {/* <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button> */}
              <Button fontWeight={'800'}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={'italic'}>I</Button>
              <Button><img src={clip} alt="clip_logo" /></Button>
              <Button><img src={left_align_icon} alt="clip_logo" /></Button>
              <Button><img src={right_align_icon} alt="clip_logo" /></Button>
              <Button><img src={center_align_icon} alt="clip_logo" /></Button>
              <Button><img src={bullet_icon} alt="clip_logo" /></Button>
              <Button marginLeft={'28rem'} backgroundColor={'#2C6856'} color={'#fff'} paddingLeft={'2rem'} paddingRight={'2rem'}>ADD</Button>
            </div>
            <Input placeholder='Write...' marginTop={'20px'} marginBottom={'20px'} borderRadius={'20px'} minHeight={'80px'} />
          </div>
          <div>
            <h3>MISSION/ VISION</h3>
            <div className='title1'>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
              <Button fontWeight={'800'}>
                <img src={b} alt="" />
              </Button>
              <Button fontStyle={'italic'}>I</Button>
              <Button><img src={clip} alt="clip_logo" /></Button>
              <Button><img src={left_align_icon} alt="clip_logo" /></Button>
              <Button><img src={right_align_icon} alt="clip_logo" /></Button>
              <Button><img src={center_align_icon} alt="clip_logo" /></Button>
              <Button><img src={bullet_icon} alt="clip_logo" /></Button>

              <Button marginLeft={'20rem'} paddingRight={'2rem'} paddingLeft={'2rem'} backgroundColor={'#2C6856'} color={'#fff'}>ADD</Button>
            </div>
            <div>
              <Input marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
              <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} />
            </div>
          </div>
          <div className='title3'>
            <h3>OUR CLIENTS</h3>
            <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
