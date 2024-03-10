import React from 'react'
import clientlist from '../Images/client list.png'

const Clientlist = () => {
    return <div className='rounded-3xl z-20 absolute flex flex-row w-[95%] justify-evenly items-center bg-[#1E443E] h-36 mt-[20vw] drop-shadow-xl'>
        <div className='w-[70%] flex flex-row clientlist overflow-scroll'>
            <img src={clientlist} alt="clientlist" className="" />
            <img src={clientlist} alt="clientlist" className="" />
            <img src={clientlist} alt="clientlist" className="" />
        </div>
        <div className='w-[2px] bg-white h-4/5'></div>
        <div className=' rounded-full bg-white h-fit w-[15vw] text-center py-2 text-[1.3vw] font-bold text-[#1E443E] drop-shadow-xl'>VIEW ALL CLIENTS</div>
    </div>
}

export default Clientlist