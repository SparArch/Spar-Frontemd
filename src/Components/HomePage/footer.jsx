import React, { useState, useEffect } from "react";

import fb from "../Images/facebook-icon.png"
import insta from "../Images/insta-icon.png"
import linkedin from "../Images/linkedin-icon.png"
import twitter from "../Images/twitter-icon.png"
import axios from "axios";
import BACKEND_URL from "../../helper";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const [itemsSocial, setItemsSocial] = useState({})
    useEffect(() => {
        fetchSocial()
    }, [])

    const fetchSocial = async () => {
        try {
            const response = await axios.get(
                `${BACKEND_URL}/api/social-media`
            );
            setItemsSocial(response.data);

        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };
    return <div className='w-full flex flex-col items-center py-2 pb-6 px-6'>
        <div className="w-full h-[1px] bg-black mb-4"></div>
        <div className="flex flex-row text-[#666666] justify-between w-full md:w-[90%]">
            <div className="flex flex-col h-48">
                <div className="text-base md:text-xl font-bold">Community</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/blogs') }}>Blogs</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/blogs') }}>Case Studies</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/blogs') }}>Media</div>
            </div>
            <div className="flex flex-col h-48">
                <div className="text-base md:text-xl font-bold">Company</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/about') }}>About Us</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/') }}>Testimonials</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/gallery') }}>Gallery</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/contactus') }}>Contact</div>
            </div>
            <div className="flex flex-col md:h-48">
                <div className="text-base md:text-xl font-bold">Useful Links</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Privacy Policy</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer" onClick={() => { navigate('/') }}>Testimonials</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Terms & Conditions</div>
            </div>
            <div className="hidden md:flex flex-col gap-6 mt-6 mb-6 mr-[10%] cursor-pointer">
                <div className="flex gap-8 align-middle items-center justify-center"><a href={itemsSocial.instagram} target="_blank"> <img src={insta} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                    <a href={itemsSocial.linkedin} target="_blank"> <img src={linkedin} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                </div>
                <div className="flex gap-8 align-middle items-center justify-center"><a href={itemsSocial.facebook} target="_blank"> <img src={fb} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                    <a href={itemsSocial.twitter} target="_blank"> <img src={twitter} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[90%] mt-1 md:mt-4">
            <div className="flex md:hidden gap-6 p-4">
                <a href={itemsSocial.instagram} target="_blank"> <img src={insta} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                <a href={itemsSocial.linkedin} target="_blank"> <img src={linkedin} className="h-4 md:h-6 cursor-pointer" alt="" /></a>

                <a href={itemsSocial.facebook} target="_blank"> <img src={fb} className="h-4 md:h-6 cursor-pointer" alt="" /></a>
                <a href={itemsSocial.twitter} target="_blank"> <img src={twitter} className="h-4 md:h-6 cursor-pointer" alt="" /></a>

            </div>
            <div className=" text-xs md:text-xl">Copyright @ 2024 SPAR. All rights reserved</div>

        </div >
    </div >
}

export default Footer;