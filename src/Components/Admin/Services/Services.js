import React, { useState } from 'react'
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
import './services.css'
const Services = () => {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    const boldText = `<b>${text}</b>`; // Wrap text in <b> HTML tag for bold formatting
    const data = { text: boldText };
    console.log(data);
    //   axios.post('your-backend-endpoint', data)
    //     .then(response => {
    //     console.log('Response from backend:', response.data);
    //     // Handle response as needed
    //   })
    // .catch(error => {
    //   console.error('Error sending data to backend:', error);
    //   // Handle error
    // });
  }
  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='services-main'>
        <div className='service'>
          <div>
            <h3>SERVICES</h3>
            <div className='title1'>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
              <Button onClick={handleButtonClick} fontWeight={'800'}>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>OUR WORK PROCESS</h3>
              <Button paddingLeft={'2rem'} paddingRight={"2rem"} backgroundColor={'#2C6856'} color={'#fff'}>ADD</Button>
            </div>
            <div>
              <Input onChange={(e) => {
                setText(e.target.value)
                console.log(text)
              }} value={text} marginTop={'20px'} borderRadius={'50px'} marginBottom={'20px'} placeholder='Title' />
              <Input placeholder='Write...' borderRadius={'20px'} minHeight={'80px'} />
            </div>
            <div>
              <div className='work-process'>
                <div style={{ padding: '10px' }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <h3>CERTIFICATES</h3>
              <Button backgroundColor={'#2C6856'} color={'#fff'}>ADD MEDIA</Button>
            </div>
            <div>
              <div className='certificates'>
                <div style={{ padding: '10px' }}><Image cursor={'pointer'} src={del} height={'30px'} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
