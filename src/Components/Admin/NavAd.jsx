import React, { useState } from 'react'
import '../HomePage/homepage.css'
import { Box, Button, Divider, Flex, Image, Input, List, ListItem, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png'
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import hamburger from '../Images/hamburger.png'
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
      <div className=' flex justify-center  align-middle'>
        <div className='fixed z-[120]  p-2 flex justify-center'>
          <div className="navbar flex justify-between sm:justify-center py-4 items-center w-[95vw]  sm:px-[1.5rem] sm:py-[1.5rem] rounded-[2rem] bg-white  drop-shadow-xl">
            <div className="flex w-full lg:justify-center justify-between  px-10 sm:px-0   sm:gap-[240px]">
              <div className=" flex">
                <img onClick={() => navigate("/admin-home")} src={Logo} className='sm:h-16 h-12 ' />

              </div>
              <div className="flex justify-center align-middle mt-[20px]">
                <ul className=" text-[14px] flex flex-row justify-center gap-[60px] font-bold">
                  <li onClick={() => navigate("/admin-home")} className="div-4 cursor-pointer">Home</li>
                  <li onClick={() => navigate("/admin-about")} className="div-5 cursor-pointer">About</li>
                  <li onClick={() => navigate("/admin-services")} className="div-6 cursor-pointer">Service</li>
                  <li className="div-7 cursor-pointer" onClick={() => navigate("/admin-gallery")}>Gallery</li>
                  <li onClick={() => navigate("/admin-blogs")} className="div-8 cursor-pointer">Blogs</li>
                  <li onClick={() => navigate("/admin-contact-main")} className="div-9 cursor-pointer">Contact Us</li>
                </ul>
              </div>
              <div className=" flex flex-row justify-center items-center ">
                <Box position="relative" >
                  <Popover>
                    <PopoverTrigger>
                      <Image
                        cursor={'pointer'}
                        src={SearchLogo}
                        className="search"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <Input
                        placeholder="Search..."
                        value={searchValue}
                      />
                    </PopoverContent>
                  </Popover>
                </Box>
                <img src={hamburger} className='cursor-pointer xl:hidden  ' onClick={onOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal size={'full'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><input type="text" placeholder='Search..' value={searchValue} /></ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={'larger'} fontWeight={'bolder'}>
            <Divider />
            <div onClick={() => {
              navigate("/admin-home");
              onClose();
            }}>Home</div>
            <Divider />
            <div onClick={() => {
              navigate("/admin-about");
              onClose();
            }}>About</div>
            <Divider />
            <div onClick={() => {
              navigate("/admin-services");
              onClose();
            }}>Service</div>
            <Divider />
            <div onClick={() => {
              navigate("/admin-gallery");
              onClose();
            }}>Gallery</div>
            <Divider />
            <div onClick={() => {
              navigate("/admin-blogs");
              onClose();
            }}>Blogs</div>
            <Divider />
            <div onClick={() => {
              navigate("/admin-contact-main");
              onClose();
            }}>Contact Us</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NavAd
