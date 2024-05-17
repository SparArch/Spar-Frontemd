import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import { Button, Image, Input } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
import del from '../../Images/delete.png'
const Downloads = () => {
  return (
    <div className='bg-[#D9E2DF]'>
      <NavAd />
      <SideNav />
      <div className='flex justify-center mt-[10rem] bg-white'>
        <div className='flex justify-flex-start g-[50px]'>
          <div className=' mt-[20px] ml-[-100px]'>
            <div className='flex gap-[500px] mb-[30px]'>
              <h1 className=' text-[#4a8780] font-bold text-[32px]'>Add New File</h1>
              <div className='flex gap-5'>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>Publish</Button>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>Back</Button>
              </div>
            </div>
            <Input className='mb-[30px]' />
            <Button marginBottom={'30px'} backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
            <div className='flex gap-2'>
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
              <Button>FONT Options</Button>
            </div>
            <div>
              <Input marginTop={'30px'} placeholder='Write...' borderRadius={'20px'} minHeight={'200px'} />
                 


            </div>
            <div className='flex justify-end mt-[20px] mb-[100px] h-[200px] w-[300px] bg-[#dedcdc] rounded-xl'>
              <div style={{ padding: '10px' }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
