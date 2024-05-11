import React, { useState } from 'react'
import '../HomePage/homepage.css'
import { Box, Button, Divider, Flex, Image, Input, List, ListItem, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png'
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import hamburger from '../Images/hamburger.svg'
import SearchLogo from '../Images/SearchIcon.png'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
const NavAd = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className='NavBar flex justify-center'>
        <div className='fixed z-[120]  p-2 flex justify-center'>
          <div className="navbar drop-shadow-xl">
            <div className="div-2 flex flex-row justify-center gap-[240px]">
              <div className="column flex">
                <Image
                  cursor={'pointer'}
                  src={Logo}
                  className="img"
                />
              </div>
              <div className="column-2 flex justify-center align-middle mt-[20px]">
                <ul className="div-3 text-[14px] flex flex-row justify-center gap-[60px] font-bold">
                  <li onClick={() => navigate("/admin-home")} className="div-4 cursor-pointer">Home</li>
                  <li onClick={() => navigate("/admin-about")} className="div-5 cursor-pointer">About</li>
                  <li onClick={() => navigate("/admin-services")} className="div-6 cursor-pointer">Service</li>
                  <li className="div-7 cursor-pointer" onClick={() => navigate("/admin-gallery")}>Gallery</li>
                  <li onClick={() => navigate("/admin-blogs")} className="div-8 cursor-pointer" >Blogs</li>
                  <li onClick={() => navigate("/admin-contact-main")} className="div-9 cursor-pointer">Contact Us</li>
                </ul>
              </div>
              <div className="column-3 flex flex-row justify-center md:ml-[-100px]">
                <Box position="relative" marginTop={'15px'}>
                  <Popover>
                    <PopoverTrigger>
                      <Image
                        cursor={'pointer'}
                        src={SearchLogo}
                        className="search"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <Input placeholder="Search..."
                        value={searchValue}
                        onChange={handleInputChange}
                      />
                    </PopoverContent>
                  </Popover>
                </Box>
                {/* <button className="bookbtn">Book A Call</button> */}
                <Image className='hamburger' cursor={'pointer'} onClick={onOpen} src={hamburger} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Modal size={'full'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><input type="text" placeholder='Search..' /></ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={'larger'}
            fontWeight={'bolder'}>
            <Divider />
            <div onClick={() => {
              navigate("/");
              onClose();
            }}>Home</div>
            <Divider />
            <div onClick={() => {
              navigate("/about");
              onClose();
            }}>About</div>
            <Divider />
            <div onClick={() => {
              navigate("/services");
              onClose();
            }}>Service</div>
            <Divider />
            <div onClick={() => {
              navigate("/gallery");
              onClose();
            }}>Gallery</div>
            <Divider />
            <div onClick={() => {
              navigate("/blogs");
              onClose();
            }}>Blogs</div>
            <Divider />
            <div>Contact Us</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NavAd
