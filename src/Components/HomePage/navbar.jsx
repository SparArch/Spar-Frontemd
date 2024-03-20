import React from 'react'
import './homepage.css'
import { Image, List, ListItem } from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png'
import { useNavigate } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SearchLogo from '../Images/SearchIcon.png'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='NavBar flex justify-center'>
      <div className='fixed z-[120] w-full p-2 flex justify-center'>
        <div className="navbar drop-shadow-xl">
          <div className="div-2">
            <div className="column">
              <Image
                cursor={'pointer'}
                loading="lazy"
                src={Logo}
                className="img"
              />
            </div>
            <div className="column-2">
              <ul className="div-3">
                <li cursor={'pointer'} onClick={() => navigate("/")} className="div-4">Home</li>
                <li cursor={'pointer'} onClick={() => navigate("/about")} className="div-5">About</li>
                <li cursor={'pointer'} onClick={() => navigate("/service")} className="div-6">Service</li>
                <li cursor={'pointer'} className="div-7">Gallery</li>
                <li cursor={'pointer'} onClick={() => navigate("/blogs")} className="div-8">Blogs</li>
                <li cursor={'pointer'} className="div-9">Contact Us</li>
              </ul>
            </div>
            <div className="column-3">
              <div className="div-10" >
                <Image
                  cursor={'pointer'}
                  loading="lazy"
                  src={SearchLogo}
                  className="search"
                />
                <div className="bookbtn">Book A Call</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
