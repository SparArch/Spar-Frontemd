import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import './home.css'
import { Button, Image, Input, Text } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
import del from '../../Images/delete.png'
import solImage from '../../Images/solution1.png'
import homeSpace from '../../Images/home-spaces.png'
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
          <div style={{ display: "flex", borderRadius: "1rem", height: "240px", width: "300px", backgroundColor: "grey" }}>
            <div style={{ position: "absolute", padding: '10px', zIndex: "100" }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>
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
            <div className='bg-slate-300 p-[20px] rounded-xl flex-col max-w-[300px] align-middle justify-center text-justify items-center'>
              <div className='flex justify-center'><Image src={homeSpace} /></div>
              <div className='flex justify-center'><h3>Retail Interior</h3></div>
              <Text fontSize={'12px'}>"Elevate your retail experience with SPAR TechnoVet. We design spaces that captivate, engage, and reflect your brand identity. Transform your retail environment with us."

              </Text>
              <div style={{ position: "relative", marginLeft: "235px", zIndex: "100" }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>

            </div>
            <div></div>
            <div></div>
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
          <div className='flex-col gap-4'>
            <div className='bg-[gray] max-w-[300px] rounded-xl'>

              <div style={{ position: "relative", marginLeft: "250px", zIndex: "100" }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>

              <div className='flex-col p-[20px] justify-center'>
                <Image paddingLeft={'70px'} src={solImage} />
                <Text fontSize={'30px'} fontWeight={'800'} color={"#1E443E"}>Highly Commited <br /> to Work</Text>
              </div>
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
          <div className='flex'>
            <div className='flex-col max-w-[300px] bg-slate-300 p-[20px] rounded-xl'>
              <div style={{ position: "relative", marginLeft: "220px", zIndex: "100" }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>
              <Text fontStyle={'italic'} fontWeight={'700'}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</Text>
              <div className='flex align-middle items-center gap-2'>
                <Image src={homeSpace} borderRadius={'50%'} />
                <Text fontStyle={'italic'} fontWeight={'600'}>Alan david</Text>
              </div>
            </div>
            <div></div>
            <div></div>
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
          <div className='flex'>
            <div className='w-[300px] h-[200px] bg-slate-300 p-[20px] rounded-xl' >
              <div style={{ position: "relative", marginLeft: "230px", zIndex: "100" }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>

            </div>
            <div></div>
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
