import React from 'react'
import { useEffect, Component } from 'react'
import contactusbanner from '../Images/contactusbanner.png'
import Bookacall from '../AboutUs/bookacall'
import Clientlist from '../AboutUs/clientlist'
import contactusbg from '../Images/contactusbg.png'
import { Button } from '@chakra-ui/react'
import hiring1 from '../Images/hiring1.png'
import hiring2 from '../Images/hiring2.png'
import Navbar from '../HomePage/navbar'


const Gallerypost = () => {
    useEffect(() => {
        // window.scrollTo(0, 0)
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <img src={contactusbanner} alt="aboutimg1" className="z-10 w-full top-0" />
            <div className="md:hidden w-full md:top-[-1.25rem] top-[-1.5rem] flex flex-col items-center relative">
                <Clientlist />
            </div>
            <img src={hiring1} alt="" className="w-3/4 hidden md:block mt-12" />
            <img src={hiring2} alt="" className="w-4/5 top-[-30px] relative block md:hidden" />
            <div className='w-full block md:hidden text-center text-[#2C6856] mb-4 font-semibold text-4xl'>Join us</div>
            <div className='bg-[#F5F5F5] drop-shadow-xl p-[7vw] w-[80%] md:w-auto md:p-[4vw] rounded-2xl md:rounded-[50px] md:mt-16 mb-16'>
                <div className='text-sm md:text-xl font-bold'>Full Name</div>
                <input type='text' className='w-full p-1 my-2' placeholder='' />
                <div className='text-sm md:text-xl mt-6 font-bold'>Email</div>
                <input type='text' className='w-full p-1 my-2' placeholder='' />
                <div className='text-sm md:text-xl mt-6 font-bold'>Contact No</div>
                <input type='text' className='w-full p-1 my-2' placeholder='' />
                <div className='text-sm md:text-xl mt-6 font-bold'>Applying For</div>
                <input type='text' className='w-full p-1 my-2' placeholder='' />
                <div className='text-sm md:text-xl mt-6 font-bold'>Resume/CV link</div>
                <textarea rows={5} cols={60} style={{ resize: "none" }} className='w-full p-1 my-2' placeholder='' />
                <div className='w-full flex flex-col items-center'><Button maxWidth={'120px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>SUBMIT</Button></div>
            </div>
            <div className='w-full items-center flex flex-col my-8'><Bookacall /></div>
        </div>
    )
};

export default Gallerypost;