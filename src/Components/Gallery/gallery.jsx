import React from 'react'
import gallerybanner from '../Images/gallery banner.png'
import Clientlist from '../AboutUs/clientlist'
import { useEffect } from 'react'
import './gallery.css'


const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='flex flex-col items-center'>
            <img src={gallerybanner} alt="aboutimg1" className="z-10 w-full top-0" />
            <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
                <Clientlist />
            </div>
            <div className='flex flex-col gap-4 my-16 w-[90%]'>
                <div className='w-full gap-4 flex flex-row'>
                    <div className='abcd w-1/2 h-[500px] bg-[#D9D9D9]'>hi</div>
                    <div className='w-full gap-4 flex flex-col'>
                        <div className='w-full gap-4 flex flex-row h-full'>
                            <div className='abcd w-full bg-[#D9D9D9]'>hi</div>
                            <div className='abcd w-full bg-[#D9D9D9]'>hi</div>
                        </div>
                        <div className='w-full gap-4 flex flex-row h-full'>
                            <div className='abcd w-full bg-[#D9D9D9]'>hi</div>
                            <div className='abcd w-full bg-[#D9D9D9]'>hi</div>
                        </div>
                    </div>
                </div>
                <div className='w-full gap-4 flex flex-row'>
                    <div className='w-full gap-4 flex flex-col'>
                        <div className='w-full h-full abcd flex bg-[#D9D9D9] flex-row'>hi</div>
                        <div className='w-full h-full abcd flex bg-[#D9D9D9] flex-row'>hi</div>
                    </div>
                    <div className='abcd w-full h-[700px] bg-[#D9D9D9]'>hi</div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
