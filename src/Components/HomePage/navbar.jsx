import React from 'react'
import './homepage.css'
import { Image, List, ListItem } from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png'
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import hamburger from '../Images/hamburger.svg'
import SearchLogo from '../Images/SearchIcon.png'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='NavBar flex justify-center'>
      <div className='fixed z-[120]  p-2 flex justify-center'>
        <div className="navbar drop-shadow-xl">
          <div className="div-2 flex flex-row justify-center gap-[15vw]">
            <div className="column flex justify-start">
              <Image
                cursor={'pointer'}
                src={Logo}
                className="img"

              />
            </div>
            <div className="column-2 flex justify-center align-middle mt-[20px]">
              <ul className="div-3 flex flex-row justify-center align-middle gap-[50px] font-bold">
                <li onClick={() => navigate("/")} className="div-4 cursor-pointer">Home</li>
                <li onClick={() => navigate("/about")} className="div-5 cursor-pointer">About</li>
                <li onClick={() => navigate("/service")} className="div-6 cursor-pointer">Service</li>
                <li className="div-7 cursor-pointer" onClick={() => navigate("/gallery")}>Gallery</li>
                <li onClick={() => navigate("/blogs")} className="div-8 cursor-pointer" >Blogs</li>
                <li className="div-9 cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div className="column-3 flex flex-row justify-center">
              <Image
                cursor={'pointer'}
                src={SearchLogo}
                className="search"
              />
              <div className="bookbtn">Book A Call</div>
              <Image className='hamburger' cursor={'pointer'} src={hamburger} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
