import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './homepage.css'
import { Image, List, ListItem } from '@chakra-ui/react';
import Logo from '../Images/SparLogo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
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
            <List className="div-3">
              <ListItem cursor={'pointer'} onClick={() => navigate("/")} className="div-4">Home</ListItem>
              <ListItem cursor={'pointer'} onClick={() => navigate("/about")} className="div-5">About</ListItem>
              <ListItem cursor={'pointer'} onClick={() => navigate("/service")} className="div-6">Service</ListItem>
              <ListItem cursor={'pointer'} className="div-7">Gallery</ListItem>
              <ListItem cursor={'pointer'} className="div-8">Blogs</ListItem>
              <ListItem cursor={'pointer'} className="div-9">Contact Us</ListItem>
            </List>
          </div>
          <div className="column-3">
            <div className="div-10" >
              <Image
                cursor={'pointer'}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6dc452f9f72263f44ec88b171b71b6e5d910581f453de26685cf136064293c7?apiKey=5bec9a7aa31245c0924cf67e237de84d&"
                className="img-2"
              />
              <div className="div-11">Book A Call</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
