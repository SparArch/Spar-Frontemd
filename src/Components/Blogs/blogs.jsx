import React from 'react'
import blogsbg from '../Images/blogsbg.png'
import { Button, Image, Text, background } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const blogs = () => {
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
                <Image backgroundColor={'grey'} borderRadius={'30px'} height={'200px'} width={'300px'} alt={''} />
                <div className='flex flex-col justify-center'>
                  <div className='blog-title '>The 15 Emerging Trends in the Office Space</div>
                  <div>Dec 19,2024</div>
                  <Button></Button>
                </div>

              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default blogs
