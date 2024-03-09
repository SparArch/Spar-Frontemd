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
    return <div className='bg-[#1D1D1D] w-full flex flex-col items-center py-20 px-32'>
        <div className="flex flex-row justify-between w-full">
            <div className="text-white text-lg w-56 mt-12">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <div className="flex flex-col h-48 justify-between mb-16">
                <div className="text-white text-lg">Service</div>
                <div className="text-white text-sm">Architecture</div>
                <div className="text-white text-sm">Interior Design</div>
                <div className="text-white text-sm">Lighting Installation</div>
                <div className="text-white text-sm">Floor Planning</div>
            </div>
            <div className="flex flex-col h-48 justify-between mb-16">
                <div className="text-white text-lg">About Us</div>
                <div className="text-white text-sm">About Us</div>
                <div className="text-white text-sm">Our Team</div>
                <div className="text-white text-sm">Testimonials</div>
                <div className="text-white text-sm">Contact</div>
            </div>
            <div className="text-white text-lg">
                Recent Work
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex flex-row justify-between w-full mt-4">
            <div className="text-white text-lg">Copyright @ 2024 SPAR. All rights reserved</div>
            <div className="flex flex-row w-[15%] justify-between">
                <img src={insta} className="h-6" alt="" />
                <img src={linkedin} className="h-6" alt="" />
                <img src={fb} className="h-6" alt="" />
                <img src={twitter} className="h-6" alt="" />
            </div>
        </div>
    </div>
}

export default Footer;