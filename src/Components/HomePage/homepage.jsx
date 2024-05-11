import React from 'react';
import './homepage.css'
import { Button, Divider, Image, position } from '@chakra-ui/react';
import Slider from 'react-slick';
import homebg from '../Images/homebg.png'
import homebg2 from '../Images/homebg2.png'
import { useEffect } from 'react';
import Clientlist from '../AboutUs/clientlist'
import service1 from '../Images/service1.png'
import service2 from '../Images/service2.png'
import service3 from '../Images/service3.png'
import service4 from '../Images/service4.png'
import service5 from '../Images/service5.png'
import service6 from '../Images/midsec2-1.png'
import rightprob from '../Images/rightprob.png'
import rightprobphone from '../Images/rightprobphone.png'
import joinus from '../Images/joinus.png'
import Bookacall from '../AboutUs/bookacall'
import morebtn from '../Images/midsec2-2.png'
import midsec51 from '../Images/midsec5-1.png'
import midsec52 from '../Images/midsec5-2.png'
import midsec53 from '../Images/midsec5-3.png'
import midsec54 from '../Images/midsec5-4.png'
import midsec55 from '../Images/midsec5-5.png'
import midsec71 from '../Images/midsec7-1.png'
import midsec81 from '../Images/midsec8-1.png'
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //sample testimonials
  const testimonials = [{ _id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Alan David', image: "" },
  { _id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Alan David', image: "" },
  { _id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Alan David', image: "" },];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='Home'>
      <div className=' '>
        <div className='w-full'>
          <img src={homebg} className='w-full' />
        </div>
        {/* <div className='relative bottom-36 -mt-16 -mb-20'><Clientlist /></div> */}
        <div className=" w-full md:top-[-1.25rem] top-[-1.5rem] flex flex-col items-center relative">
          <Clientlist />
        </div>
        <div className='w-full'>
          <img src={homebg2} className='w-full' />
        </div>
      </div>
      <div className="midsec22 flex flex-col items-center justify-center">
        <div className=' text-3xl md:text-5xl font-bold mt-8 text-center'>We Know Every Space.</div>
        <div className=' text-base md:text-xl font-semibold mt-4 text-center'>Transformative, Tailored, Innovative.</div>
        <div className='mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] mb-12'>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Bespoke Solutions</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>Customized design solutions tailored to fit the unique requirements and branding of each space.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service2} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Roll-out Pervices</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>Strategic planning and execution of multi-location rollouts, maintaining consistency and quality across all spaces.</p>
          </div>
          <div className=' bg-white hidden md:flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service3} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Sustainable Practices</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>Committed to sustainable practices, offering Eco-friendly solutions for retail environments.</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service4} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Manufacturing</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>High-quality manufacturing of fixtures, fittings, and furniture to bring designs to life.</p>
          </div>
          <div className=' bg-white hidden md:flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service5} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>End-to-End Solutions</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'> Offers comprehensive end-to-end solutions for all interiors, covering everything from initial design concepts to final installation.</p>
          </div>
          <div className=' bg-[#2C6856] flex flex-row rounded-xl md:rounded-3xl text-white '>
            <div className='ml-3'>
              <p className='md:text-[1.6vw] text-sm text-center font-semibold my-1 md:my-4 pl-[0] pt-14 md:pt-20 pb-0'>+4</p>
              <p className='md:text-[1.6vw] text-sm font-semibold my-1 md:my-10 pl-[0] pb-0'>Learn More</p>
            </div>
            <div className='flex flex-col'>
              <img src={service6} alt="" className='md:w-[60px] md:h-[125px] h-[70px] w-[50px]' />
              <div><img src={morebtn} alt=""
                className='h-[20px] md:h-auto m-4'
              /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full my-8 flex flex-col items-center'>
        <img src={rightprob} onClick={{}} className='hidden w-4/5 md:block'></img>
        <img src={rightprobphone} onClick={{}} className='md:hidden w-4/5 block'></img>
      </div>

      <div className='w-full flex flex-col items-center overflow-hidden'>
        <div className='text-2xl font-bold md:text-4xl'>Testimonials</div>
        <div className='text-base my-2 md:my-6 font-semibold md:text-xl'>Where Excellence Meets Execution</div>
        <Slider {...settings} className='w-[98%] md:w-[90%]'>
          {testimonials.map(testimonial => (
            <div className='p-1 md:p-4'>
              <div key={testimonial._id} className=' md:p-5 p-3 text-white bg-[#4A8780] rounded-lg'>
                <div className='italic text-[8px] md:text-lg'>" {testimonial.content} "</div>
                <div className='flex flex-row items-center mt-4'>
                  <img src={testimonial.image} className='md:w-16 w-5' alt="" />
                  <div className='italic text-[8px] md:text-lg ml-4'>{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='midsec5 flex flex-col p-[40px] md:p-[100px] bg-zinc-100 justify-center'>

        <div className='flex flex-row justify-between mb-2 md:mb-8'>
          <p className='md:text-[35px] flex-shrink-0 text-[15px] font-bold'>Our Featured Projects</p>

        </div>
        <div className='flex flex-col gap-1 w-[80vw] md:gap-4 items-center'>

          <div className='flex flex-row gap-1 md:gap-4'>
            <div><Image src={midsec51} /></div>
            <div className='flex flex-col gap-1 md:gap-4'>
              <div><Image src={midsec52} /></div>
              <div><Image src={midsec53} /></div>
            </div>
          </div>

          <div className='flex flex-row w-full gap-1 md:gap-4'>
            <div><img src={midsec54} /></div>
            <div><img src={midsec55} /></div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full'><Button maxWidth={'120px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>
        
      </div>

      <div>
        <img src={joinus} className='w-full my-4 md:my-8' alt="" />
      </div>
      <div className='w-full items-center flex flex-col my-8'><Bookacall/></div>
      
    </div >
  )
}

export default Homepage
