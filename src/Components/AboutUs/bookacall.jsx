import { Button } from '@chakra-ui/react'
import React from 'react'

const Bookacall = () => {
    return <div className='md:rounded-3xl rounded-md z-20 md:flex flex-row w-[75%] justify-evenly items-center bg-[#1E443E] drop-shadow-xl p-2 md:p-6 hidden'>
        <div className='w-[70%] md:text-[2vw] font-semibold text-white'>
            Ready To Get Started With Your Next Project?
        </div>
        <Button><div className=' rounded-lg bg-white h-fit w-[14vw] text-center md:py-2 py-1 text-[1.6vw] font-bold text-[#2C6856] drop-shadow-xl'><a href="tel://+447881424598">BOOK A CALL</a></div>
        </Button>  </div>
}

export default Bookacall