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
import hamburger from '../Images/hamburger.png';
import SearchLogo from '../Images/SearchIcon.png';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Divider } from '@chakra-ui/react';
import './navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);






  return (
    <>
      <div className=' flex justify-center  align-middle'>
        <div className='fixed z-[120]  p-0 sm:p-0 flex justify-center'>
          <div className="navbar flex justify-between sm:justify-center py-1 items-center w-[100vw]  sm:px-[1.5rem] sm:py-[1.5rem]  bg-[rgb(0,0,0,0.6)]  ">
            <div className="flex w-full lg:justify-between justify-between  px-4 sm:px-0   sm:gap-[10%]">
              <div className=" flex ">
                <img onClick={() => navigate("/")} src={Logo} className='ml-[0] md:ml-[4rem] sm:h-16 h-10 cursor-pointer' />

              </div>
              {/* <div className="flex justify-center align-middle mt-[20px]">
                <ul className=" text-[14px] flex flex-row justify-center gap-[60px] font-bold">
                  <li onClick={() => navigate("/")} className="div-4 cursor-pointer">Home</li>
                  <li onClick={() => navigate("/about")} className="div-5 cursor-pointer">About</li>
                  <li onClick={() => navigate("/service")} className="div-6 cursor-pointer">Service</li>
                  <li className="div-7 cursor-pointer" onClick={() => navigate("/gallery")}>Gallery</li>
                  <li onClick={() => navigate("/blogs")} className="div-8 cursor-pointer">Blogs</li>
                  <li onClick={() => navigate("/contactus")} className="div-9 cursor-pointer">Contact Us </li>
                </ul>
              </div> */}
              <div className=" flex flex-row justify-center items-center ">

                <img src={hamburger} className='hamburger cursor-pointer h-4 md:h-6 md:mr-[4rem]' onClick={onOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>

          <ModalCloseButton />
          <ModalBody display={'flex'} flexDirection={'column'} gap={'1rem'} fontSize={'larger'} fontWeight={'bolder'}>
            <Divider />

            <div className='cursor-pointer flex flex-col justify-end items-end gap-4 px-[50px] mt-4 mb-[50px]'>
              <div>
                <input className='rounded-[0] w-[full] md:w-[20vw]' type="text" placeholder='Search..' value={searchValue} />
              </div>
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

            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Navbar;
