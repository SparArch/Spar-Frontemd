import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import './home.css'
import { Button, Input } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
const home = () => {
  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='Titles-main'>
        <div className='Titles'>
          <div>
            <h3>HOME TOP COVER</h3>
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
          <div>
            <h3>OUR CLIENTS</h3>
            <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
            <div className='prev_clients'>
              {/* clients logo pictures */}
            </div>
          </div>
          <div>
            <h3>HELLO.</h3>
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
          <div>
            <h3>WE KNOW EVERY SPACES</h3>
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
          <div>
            <h3>WE SOLVE THE RIGHT PROBLEMS</h3>
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
              {/* <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} /> */}
            </div>
          </div>
          <div>
            <h3>TESTIMONIALS</h3>
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

              <Button marginLeft={'20rem'} paddingRight={'2rem'} paddingLeft={'2rem'} backgroundColor={'#2C6856'} color={'#fff'}>ADD</Button>
            </div>
            <div>
              <Input marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
              <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} />
            </div>
          </div>
          <div>
            <h3>OUR FEATURED PROJECTS</h3>
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
              <Input marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Project Name.........' />
              <Input placeholder='Location.......' borderRadius={'20px'} minHeight={'80px'} />
            </div>
          </div>
          <div>
            <h3>BLOGS</h3>
            <div>
              <Button>ADD</Button>
              <Button>ADD</Button>
              <Button>ADD</Button>
            </div>
          </div>
          <div>
            <h3>JOIN , COLLABORATE AND TRANSFORM TOGETHER</h3>
            <div className='title2'>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
              <Button marginLeft={'20rem'} paddingRight={'2rem'} paddingLeft={'2rem'} backgroundColor={'#2C6856'} color={'#fff'}>ADD</Button>

            </div>
            <Input marginTop={'20px'} placeholder='Title' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
