import React, { useState, useEffect } from 'react';
import blogsbg from '../Images/blogsbg.png'
import { Button, Image, Text, background } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Arrow from '../Images/Arrow.png'
import axios from 'axios';
import BACKEND_URL from '../../helper';
const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };
  return (
    <div className='blogs'>
      <img src={blogsbg} alt="aboutimg1" className="z-10 w-full top-0 filter brightness-50" />
      <Text position={'relative'} display={'flex'} justifyContent={'center'} color={'white'} marginTop={'-60px'} fontSize={'40px'} fontWeight={'600'}>BLOGS, CASE STUDIES & MEDIA MENTIONS</Text>
      <div className="blogsec1 flex flex-row gap-6 justify-center rounded-3xl">

        <Tabs display={'flex'} justifyItems={'center'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <TabList>
            <Tab>Blogs</Tab>
            <Tab>Case Studies</Tab>
            <Tab>Media</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className='blog flex flex-row justify-center gap-6'>
              {blogPosts.map(post => (
                  <div key={post._id} className='flex flex-col justify-center'>
                    <Image src={post.image} borderRadius={'30px'} height={'200px'} width={'300px'} alt={''} />
                    <div className='blog-title '>{post.title}</div>
                    <div className='text-[12px] italic'>{post.date}</div>
                    <Button borderRadius={'80px'} backgroundColor={'#D9D9D9'} width={'50px'}>
                      <Image width={'40px'} height={'10px'} src={Arrow} />
                    </Button>
                  </div>
                ))}

              </div>
            </TabPanel>
            <TabPanel>
              <p>
                Case Study Content
              </p>
            </TabPanel>
            <TabPanel>
              <p>Media Content</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default Blogs
