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
    return <div className='w-full flex flex-col items-center py-2 pb-6 px-6'>
        <div className="w-full h-[1px] bg-black mb-4"></div>
        <div className="flex flex-row text-[#666666] justify-between w-full md:w-[90%]">
        <div className="flex flex-col h-48">
                <div className="text-base md:text-xl font-bold">Community</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Blogs</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Case Studies</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Media</div>
            </div>
            <div className="flex flex-col h-48">
                <div className="text-base md:text-xl font-bold">Company</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">About Us</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Testimonials</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Gallery</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Contact</div>
            </div>
            <div className="flex flex-col md:h-48">
                <div className="text-base md:text-xl font-bold">Useful Links</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Privacy Policy</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Testimonials</div>
                <div className="md:text-base mt-3 font-semibold text-xs cursor-pointer">Terms & Conditions</div>
            </div>
            <div className="md:block hidden text-xl font-bold">
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
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-1 md:mt-4">
            <div className=" text-xs md:text-xl">Copyright @ 2024 SPAR. All rights reserved</div>
            <div className="flex flex-row w-2/5 my-3 md:w-[15%] justify-between">
                <img src={insta} className="h-4 md:h-6 cursor-pointer" alt="" />
                <img src={linkedin} className="h-4 md:h-6 cursor-pointer" alt="" />
                <img src={fb} className="h-4 md:h-6 cursor-pointer" alt="" />
                <img src={twitter} className="h-4 md:h-6 cursor-pointer" alt="" />
            </div>
        </div>
    </div>
}

export default Footer;