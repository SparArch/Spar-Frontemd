import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png';
import { useNavigate } from 'react-router-dom';
import hamburger from '../Images/hamburger.svg';
import SearchLogo from '../Images/SearchIcon.png';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Divider } from '@chakra-ui/react';

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);






  return (
    <>
      <div className=' flex justify-center  align-middle'>
        <div className='fixed z-[120]  p-0 sm:p-2 flex justify-center'>
          <div className="navbar flex justify-between sm:justify-center py-3 items-center w-[95vw]  sm:px-[1.5rem] sm:py-[1.5rem] rounded-[2rem] bg-white  drop-shadow-xl">
            <div className="flex w-full lg:justify-center justify-between  px-10 sm:px-0   sm:gap-[240px]">
              <div className=" flex">
                <img onClick={() => navigate("/")} src={Logo} className='sm:h-16 h-12 cursor-pointer' />

              </div>
              <div className="flex justify-center align-middle mt-[20px]">
                <ul className=" text-[14px] flex flex-row justify-center gap-[60px] font-bold">
                  <li onClick={() => navigate("/")} className="div-4 cursor-pointer">Home</li>
                  <li onClick={() => navigate("/about")} className="div-5 cursor-pointer">About</li>
                  <li onClick={() => navigate("/service")} className="div-6 cursor-pointer">Service</li>
                  <li className="div-7 cursor-pointer" onClick={() => navigate("/gallery")}>Gallery</li>
                  <li onClick={() => navigate("/blogs")} className="div-8 cursor-pointer">Blogs</li>
                  <li onClick={() => navigate("/contactus")} className="div-9 cursor-pointer">Contact Us</li>
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
                <button className="bookbtn" ><a href="tel://+447881424598">Book a Call</a></button>
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
              navigate("/service");
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
            <div onClick={() => {
              navigate("/contactus");
              onClose();
            }}>Contact Us</div>
            <button className="bookbtnalt"><a href="tel://+447881424598">Book a Call</a></button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Navbar;
