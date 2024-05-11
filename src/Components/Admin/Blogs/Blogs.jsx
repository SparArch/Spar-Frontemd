import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import { Button, Checkbox, Image, Input, Text } from '@chakra-ui/react'
import './blogs.css'
import blankimg from '../../Images/black-img.png'
import { useNavigate } from 'react-router-dom'
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#D9E2DF" }}>
      <NavAd />
      <SideNav />
      <div className='blogs-main'>
        <div className='blogs-comp'>
          <div className='blogs-btn'>
            <Button onClick={() => navigate("/add-new-blog")} backgroundColor={'#2C6856'} color={'#fff'}>ADD NEW</Button>
            <Button backgroundColor={'#2C6856'} color={'#fff'}>DELETE</Button>
          </div>
          <div className='blogs-filter'>
            <div className='blogs-check'>
              <Checkbox />
              <Text>SELECT ALL</Text>
            </div>
            <div className='blogs-fil'>
              <div className='blogs-fil1' >
                <div>FILTER BY</div>
                <select style={{ border: "2px black solid", borderRadius: "30px" }}>
                  <option value="someOption">Some option</option>
                  <option value="otherOption">Other option</option>
                </select>
              </div>
              <div>
                <Input borderRadius={'2rem'} type='search' minWidth={'20px'} placeholder='Search' />

              </div>
            </div>
          </div>
        </div>
        <div className='blogs-cards'>
          <div className='card'>
            <Checkbox />
            <Image src={blankimg} />
            <div className='card-detail'>
              <h3>Title</h3>
              <h1>date</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae, veniam nemo iste sint, maiores itaque id eos accusantium, qui explicabo a blanditiis commodi! Reiciendis dolor vitae perferendis error illo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
