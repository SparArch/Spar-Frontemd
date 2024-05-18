import React from 'react'
import SideNav from '../SideNav'
import NavAd from '../NavAd'
import { Button, Checkbox, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

const NewJoin = () => {
  return (
    <div>
      <NavAd />
      <SideNav />
      <div className='flex justify-center mt-[10rem] bg-white'>
        <div className='flex-col justify-flex-start g-[50px]'>
          <div className='flex-col ml-[240px]'>
            <h1 className='text-[#4a8780] font-bold text-[32px]'>JOIN</h1>
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
          <div className='mt-[10px] ml-[200px]'>
            <TableContainer>
              <Table variant='unstyled' border={'2px'}>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead >
                  <Tr >
                    <Th border={'2px'}></Th>
                    <Th border={'2px'}>Name/Date</Th>
                    <Th isNumeric border={'2px'}>Contact No</Th>
                    <Th border={'2px'}>Mail</Th>
                    <Th border={'2px'}> Job Position</Th>
                    <Th border={'2px'}>CV link</Th>
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
                    <Td border={'2px'}></Td>
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
  )
}

export default NewJoin
