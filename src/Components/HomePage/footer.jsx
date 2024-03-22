import React from "react";
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.png"
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
import fb from "../Images/fb.png"
import insta from "../Images/insta.png"
import linkedin from "../Images/linkedin.png"
import twitter from "../Images/twitter.png"


const Footer = () => {
    return <div className='bg-[#1D1D1D] w-full flex flex-col items-center py-2 pb-6 px-6 md:py-20 md:px-32'>
        <div className="flex md:flex-row flex-row-reverse justify-between w-full">
            <div className="text-white md:block hidden text-lg w-56 mt-12">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <div className="md:flex hidden flex-col h-48 justify-between mb-16">
                <div className="text-white text-lg">Service</div>
                <div className="text-white text-sm cursor-pointer">Architecture</div>
                <div className="text-white text-sm cursor-pointer">Interior Design</div>
                <div className="text-white text-sm cursor-pointer">Lighting Installation</div>
                <div className="text-white text-sm cursor-pointer">Floor Planning</div>
            </div>
            <div className="flex flex-col md:h-48 justify-between mb-6 md:mb-16">
                <div className="text-white text-lg">About Us</div>
                <div className="text-white text-sm cursor-pointer">About Us</div>
                <div className="text-white text-sm cursor-pointer">Our Team</div>
                <div className="text-white text-sm cursor-pointer">Testimonials</div>
                <div className="text-white text-sm cursor-pointer">Contact</div>
            </div>
            <div className="text-white text-lg">
                Recent Work
                <div className="grid grid-cols-3 gap-2 mr-3 md:gap-4 mt-6 mb-6 cursor-pointer">
                    <img src={img1} alt="" className="w-12 md:w-16" />
                    <img src={img2} alt="" className="w-12 md:w-16" />
                    <img src={img3} alt="" className="w-12 md:w-16" />
                    <img src={img4} alt="" className="w-12 md:w-16" />
                    <img src={img5} alt="" className="w-12 md:w-16" />
                    <img src={img6} alt="" className="w-12 md:w-16" />
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex flex-row justify-between w-full mt-1 md:mt-4">
            <div className="text-white text-sm md:text-lg">Copyright @ 2024 SPAR. All rights reserved</div>
            <div className="md:flex flex-row w-[15%] hidden justify-between">
                <img src={insta} className="h-6 cursor-pointer" alt="" />
                <img src={linkedin} className="h-6 cursor-pointer" alt="" />
                <img src={fb} className="h-6 cursor-pointer" alt="" />
                <img src={twitter} className="h-6 cursor-pointer" alt="" />
            </div>
        </div>
    </div>
}

export default Footer;