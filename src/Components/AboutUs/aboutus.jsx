import React from 'react'
import Navbar from '../HomePage/navbar'
import aboutimg1 from '../Images/About img1.png'
import aboutus from '../Images/aboutus.png'
import aboutgraphic from '../Images/aboutgraphic.png'
import testimonialimage from '../Images/testimonial image.png'
import './aboutus.css'
import Footer from '../HomePage/footer'
import Clientlist from './clientlist'
import clientlist from '../Images/client list.png'


const Aboutus = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src={aboutimg1} alt="aboutimg1" className="-z-20 w-full top-0"/>
      <Clientlist /> 
      <div className='mt-16 w-full flex flex-row justify-between'>
        <img src={aboutus} alt="aboutus" className="w-[40%]"/>
        <div className='flex flex-col w-full p-10 mt-12'>
          <div className='text-[#707070] text-[4rem] flex flex-row justify-between font-bold '>
            <div className='mt-[7vw] flex-shrink-0'>About Us</div>
            <img src={aboutgraphic} alt="aboutgraphic" className=''/>
          </div>
          <div className='text-[#5C675A] text-xl font-medium w-[90%] mt-4'>Once upon a time in the realm of architectural dreams, a remarkable team emerged – SPAR Technovet, the wizards of construction, enchanting the world by bringing ideas to life. In Act 1, they addressed a common woe – brilliant concepts confined to paper. SPAR Technovet stepped in as the magical solution, transforming dreams into tangible reality. Act 2 unfolded as a tale of teamwork magic, where designers and builders collaborated seamlessly, ensuring projects flowed effortlessly from inception to completion. Act 3 revealed their wizardry in crafting magical building materials, each detail brewed in their workshop with a secret recipe for quality. Act 4 showcased a collection of completed projects, not just buildings but enchanting experiences. SPAR Technovet turned imagination into touchable reality. Act 5 featured their special spell – an end-to-end solution, simplifying the journey from dream to reality. In the finale, SPAR Technovet emerged as the conductor of an architectural orchestra, turning chaos into a harmonious dance. Join the magic at SPAR Technovet, where dreams evolve from paper to lasting masterpieces. It's a world where every building holds a touch of magic, and every client's dream becomes a reality. Step into the enchanting realm where architecture meets magic, and dreams are transformed into tangible wonders.</div>
        </div>
      </div>
      <div className=' font-bold text-4xl mt-12'>TESTIMONIALS</div>
      <div className=' text-8xl text-[#2C6856] font-bold my-6'>PEOPLE SAYS</div>
      <div className=' grid grid-cols-2 gap-x-20 gap-y-12 w-4/5 mb-36'>
        <div className='w-[100%] p-4 shade rounded-lg'>
          <div className=' italic text-lg'>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
          <div className='flex flex-row items-center mt-4'>
            <img src={testimonialimage} className='' alt="" />
            <div className='italic text-lg ml-4'>Alan david</div>
          </div>
        </div>
        <div className='w-[100%] p-4 shade rounded-lg'>
          <div className=' italic text-lg'>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
          <div className='flex flex-row items-center mt-4'>
            <img src={testimonialimage} className='' alt="" />
            <div className='italic text-lg ml-4'>Alan david</div>
          </div>
        </div>
        <div className='w-[100%] p-4 shade rounded-lg'>
          <div className=' italic text-lg'>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
          <div className='flex flex-row items-center mt-4'>
            <img src={testimonialimage} className='' alt="" />
            <div className='italic text-lg ml-4'>Alan david</div>
          </div>
        </div>
        <div className='w-[100%] p-4 shade rounded-lg'>
          <div className=' italic text-lg'>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
          <div className='flex flex-row items-center mt-4'>
            <img src={testimonialimage} className='' alt="" />
            <div className='italic text-lg ml-4'>Alan david</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutus
