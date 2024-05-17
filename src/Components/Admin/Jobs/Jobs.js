import React from 'react'
import NavAd from '../NavAd'
import SideNav from '../SideNav'
import { Button, Checkbox, Image, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import clip from '../../Images/clip.png'
import left_align_icon from '../../Images/left_align.png'
import right_align_icon from '../../Images/right_align.png'
import center_align_icon from '../../Images/center_align.png'
import bullet_icon from '../../Images/bullets.png'
import b from '../../Images/b.png'
import del from '../../Images/delete.png'
const Jobs = () => {
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className='flex justify-center mt-[10rem] bg-white'>
        <div className='flex justify-flex-start g-[50px]'>
          <div className='ml-[100px]'>
            <div className='flex gap-[700px] mb-[30px]'>
              <h1 className=' text-[#4a8780] font-bold text-[32px]'>JOB</h1>
              <div className='flex '>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>SAVE CHANGES</Button>
              </div>
            </div>
            <Input className='mb-[30px]' />
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
            <div className=''>
              <h1 className='text-[#4a8780] font-bold text-[32px]'>COLLAB DATA</h1>
              <div style={{ display: "flex", marginTop: "20px", gap: "200px" }}>
                <div style={{ display: "flex", gap: "50px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Checkbox />
                    <Text>SELECT ALL</Text>
                  </div>
                  <Button backgroundColor={'#2C6856'} color={'#fff'}> DELETE</Button>
                  <Button backgroundColor={'#2C6856'} color={'#fff'}>SEND TO MAIL</Button>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Text>FILTER BY</Text>
                    <select style={{ border: "2px black solid", borderRadius: "30px" }}>
                      <option value="someOption">Some option</option>
                      <option value="otherOption">Other option</option>
                    </select>
                    <div>
                      <Input borderRadius={'2rem'} type='search' minWidth={'20px'} placeholder='Search' />

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='mt-[10px]'>
              <TableContainer>
                <Table variant='unstyled' border={'2px'}>
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead >
                    <Tr >
                      <Th border={'2px'}></Th>
                      <Th border={'2px'}>Name/Date</Th>
                      <Th isNumeric border={'2px'}>Contact No</Th>
                      <Th border={'2px'}>Mail</Th>
                      <Th border={'2px'}> Message</Th>
                      {/* <Th border={'2px'}>CV link</Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td border={'2px'}><Checkbox /></Td>
                      <Td border={'2px'}>
                        <Text fontWeight={800}>Robert</Text> <br />
                        <Text color={'#8D8D94'}>26 April 2024</Text>
                      </Td>
                      <Td border={'2px'} fontWeight={800}> 9825215350</Td>
                      <Td border={'2px'}></Td>
                      <Td border={'2px'}></Td>
                      {/* <Td border={'2px'}></Td> */}
                    </Tr>

                  </Tbody>
                  {/* <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot> */}
                </Table>
              </TableContainer>
              <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2rem", marginLeft: "-10rem" }}>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>LOAD MORE</Button>
                <Button backgroundColor={'#2C6856'} color={'#fff'}>EXPORT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
