import React from 'react';
import './homepage.css'
import { Button, Divider, Image, position } from '@chakra-ui/react';
import Slider from 'react-slick';
import homebg from '../Images/homebg.png'
import homebg2 from '../Images/homebg2.png'
import homebg2phone from '../Images/homebg2phone.png'
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
import joinus from '../Images/joinhome.png'
import Bookacall from '../AboutUs/bookacall'
import morebtn from '../Images/midsec2-2.png'
import midsec51 from '../Images/midsec5-1.png'
import midsec52 from '../Images/midsec5-2.png'
import midsec53 from '../Images/midsec5-3.png'
import midsec54 from '../Images/midsec5-4.png'
import midsec55 from '../Images/midsec5-5.png'
import next from '../Images/next.png'
import prev from '../Images/prev.png'
import next1 from '../Images/next1.png'
import prev1 from '../Images/prev1.png'
import diff1 from '../Images/diff1.png'
import diff2 from '../Images/diff2.png'
import diff3 from '../Images/diff3.png'
import diff4 from '../Images/diff4.png'
import diff5 from '../Images/diff5.png'
import Navbar from './navbar';
const Homepage = () => {
  useEffect(() => {
    // window.scrollTo(0, 0)
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
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "100px"}}
        onClick={onClick}
      >
        <img className='w-3 md:w-auto' src={next} alt="" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "100px"}}
        onClick={onClick}
      >
        <img className='w-3 md:w-auto' src={prev} alt="" />
      </div>
    );
  }

  const images = [homebg, homebg, homebg];

  const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000
  };

  const homecontent = "Welcome to SPAR, a leading provider of  fittings, fixtures, and end-to-end solutions for all Spaces .With years of experience and a commitment to excellence, we have become a trusted partner looking to enhance their interior environments.";
  const slider = React.useRef(null);
  // const homecontent="";
  return (
    <div className='Home'>
    <Navbar />
      <div className=' '>
        {/* <div className='w-full'>
          <img src={homebg} className='w-full' />
        </div> */}
        <div className='w-full flex flex-row absolute z-30 md:px-10 px-4 justify-between md:top-[30vw] top-[40vw]'>
          <button onClick={() => slider?.current?.slickPrev()}><img src={prev1} className='w-3 md:w-auto' alt="" /></button>
          <button onClick={() => slider?.current?.slickNext()}><img src={next1} className='w-3 md:w-auto' alt="" /></button>
        </div>
        <div className='w-full flex flex-col items-center'>
          <Slider ref={slider} {...settings2} className='w-full my-8 md:my-16'>
            {images.map(testimonial => (
              <div className='relative flex items-center justify-center'>
                <div className='p-1 md:p-4'>
                  <img src={testimonial} alt="" className="w-full" />
                </div>
                <div className='absolute w-full h-full flex flex-col items-center justify-center text-center text-white bottom-0'>
                  <div className='font-bold text-[4vw] z-40'>CRAFTING UNIQUE SPACES</div>
                  <div className='text-[2vw] w-1/2 z-40'>EXPERTS IN INTERIOR FITTINGS, FIXTURES, AND END-TO-END SOLUTIONS</div>
                  <div className='flex flex-row'>
                    <button className='font-semibold text-white bg-transparent border-2 border-white p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center'>DOWNLOAD</button>
                    <button className='font-semibold text-white bg-[#2C6856] p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center'>GET A QUOTE</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className='relative bottom-36 -mt-16 -mb-20'><Clientlist /></div> */}
        <div className=" w-full md:top-[-1.25rem] top-[-4rem] flex flex-col items-center relative">
          <Clientlist />
        </div>
        <div className='w-full flex items-center top-[-5rem] md:top-0 justify-center  relative'>
          <img src={homebg2} className='w-full hidden md:block brightness-75' />
          <img src={homebg2phone} className='w-full block md:hidden brightness-75' />
          {homecontent && <div className='absolute w-[90%] md:w-1/2 rounded-xl p-4 md:p-[2vw] text-white font-semibold flex flex-col items-center justify-center text-center text-[10px] md:text-[1vw] bg-home-2'>
            <div className='text-[10vw] md:text-[7vw] font-bold mb-4'>Hello.</div>
            {homecontent}
            <button className='font-semibold text-white bg-[#2C6856] p-2 md:p-4 mt-4 md:m-4 rounded-xl text-center text-xs md:text-[1.2vw] flex flex-col items-center justify-center'>KNOW MORE</button>
          </div>}
          {!homecontent && <div className='text-[10vw] md:text-[10vw] font-bold absolute text-white mb-4'>Hello.</div>}
        </div>
      </div>
      <div className="midsec22 flex flex-col items-center justify-center">
        <div className=' text-3xl md:text-5xl font-bold mt-8 text-center'>We Know Every Space.</div>
        <div className=' text-base md:text-xl font-semibold mt-4 text-center'>Transformative, Tailored, Innovative.</div>
        <div className='mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] md:mb-12'>
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
              <button><img src={morebtn} alt=""
                className='h-[20px] md:h-auto m-4'
              /></button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full my-8 flex flex-col items-center'>
        <div className='text-2xl font-bold my-4 md:my-12 md:text-4xl'>We Solve the Right Problems.</div>
        <div className='grid md:grid-cols-5 gap-8 grid-cols-2 w-[80%]'>
          <div className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={diff1} className='mb-2 h-12 md:h-24' alt="" />
            Highly committed to Work
          </div>
          <div className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={diff2} className='mb-2 h-12 md:h-24' alt="" />
            Own team and supply unit
          </div>
          <div className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={diff3} className='mb-2 h-12 md:h-24' alt="" />
            Controlled Customization cost
          </div>
          <div className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={diff4} className='mb-2 h-12 md:h-24' alt="" />
            End to end solution
          </div>
          <div className='flex flex-col items-center justify-center text-base md:text-xl text-center font-semibold text-[#1E443E]'>
            <img src={diff5} className='mb-2 h-12 md:h-24' alt="" />
            Prototype/Mock-up to Roll-out.
          </div>
          <button className='md:hidden font-bold text-white bg-[#2C6856] m-4 rounded-xl text-center text-xl flex flex-col items-center justify-center'>KNOW<br /> MORE</button>
        </div>
        <button className='font-bold text-white bg-[#2C6856] p-4 m-4 rounded-xl text-center text-xl hidden md:flex flex-col items-center justify-center'>KNOW MORE</button>
      </div>

      <div className='w-full flex flex-col items-center overflow-hidden'>
        <div className='text-2xl font-bold md:text-4xl'>Testimonials</div>
        <div className='text-base my-2 md:my-6 font-semibold md:text-xl'>Where Excellence Meets Execution</div>
        <Slider {...settings} className='w-[98%] md:w-[90%] max-w-[1100px]'>
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

      <div className='midsec5 flex items-center flex-col p-[40px] md:p-[100px] justify-center'>

        <div className='flex flex-row justify-start w-[80vw] mb-2 md:mb-8'>
          <p className='md:text-[35px] flex-shrink-0 text-[20px] font-bold'>Our Featured Projects</p>

        </div>
        <div className='flex flex-col gap-1 w-[80vw] font-semibold md:gap-4 items-center'>

          <div className='flex flex-row gap-1 md:gap-4'>
            <div className='relative'>
              <Image src={midsec51} />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>Project Name</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- UK</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1 md:gap-4'>
              <div className='relative'>
                <Image src={midsec52} />
                <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                  <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                    <p className='text-[3cqw] md:text-[2cqw] font-bold'>Project Name</p>
                    <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- UK</p>
                    <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <Image src={midsec53} />
                <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                  <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                    <p className='text-[3cqw] md:text-[2cqw] font-bold'>Project Name</p>
                    <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- UK</p>
                    <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-1 md:gap-4'>
            <div className='relative'>
              <img src={midsec54} />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>Project Name</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- UK</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src={midsec55} />
              <div className='w-full h-full opacity-0 duration-500 hover:opacity-100 bg-black/50 absolute top-0'>
                <div className='flex absolute text-white bottom-0 flex-col p-1 md:p-3'>
                  <p className='text-[3cqw] md:text-[2cqw] font-bold'>Project Name</p>
                  <p className='text-[2cqw] md:text-[1cqw] md:my-2'>Location:- UK</p>
                  <button className='text-[2cqw] md:text-[1cqw] w-fit bg-opacity-30 bg-white rounded-sm md:rounded-lg border-white border-[1px] md:border-2 px-1 md:px-4 md:py-2'>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full'><Button maxWidth={'120px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>

      </div>
      <div className='md:w-4/5 w-[95%] flex flex-col items-center mx-auto'>
        <div className='md:text-[35px] text-center text-[20px] font-bold mb-6'>Read Our Blog.</div>
        <div className='grid gap-4 md:gap-10 grid-cols-3'>
          <div className='bg-[#D9D9D9] flex flex-col md:gap-4 gap-1 rounded-lg md:rounded-3xl'>
            <div className='relative'>
              <img src={homebg} className='rounded-lg md:rounded-3xl' />
              <div className='md:text-base text-[8px] absolute bottom-0 m-1 md:m-4 text-white'>23 jun 2019</div>
            </div>
            <div className='font-bold text-[10px] md:text-xl px-1 md:px-4'>We'll your next project, because nobody wants.....</div>
            <div className='text-[8px] md:text-base px-1 md:px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <button className='font-semibold text-white w-fit bg-[#2C6856] px-2 py-1 md:py-2 md:px-4 mx-1 md:mx-4 mb-4 md:mb-6 rounded my-1 md:rounded-xl text-[9px] md:text-lg'>READ MORE</button>
          </div>
          <div className='bg-[#D9D9D9] flex flex-col md:gap-4 gap-1 rounded-lg md:rounded-3xl'>
            <div className='relative'>
              <img src={homebg} className='rounded-lg md:rounded-3xl' />
              <div className='md:text-base text-[8px] absolute bottom-0 m-1 md:m-4 text-white'>23 jun 2019</div>
            </div>
            <div className='font-bold text-[10px] md:text-xl px-1 md:px-4'>We'll your next project, because nobody wants.....</div>
            <div className='text-[8px] md:text-base px-1 md:px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <button className='font-semibold text-white w-fit bg-[#2C6856] px-2 py-1 md:py-2 md:px-4 mx-1 md:mx-4 mb-4 md:mb-6 rounded my-1 md:rounded-xl text-[9px] md:text-lg'>READ MORE</button>
          </div>
          <div className='bg-[#D9D9D9] flex flex-col md:gap-4 gap-1 rounded-lg md:rounded-3xl'>
            <div className='relative'>
              <img src={homebg} className='rounded-lg md:rounded-3xl' />
              <div className='md:text-base text-[8px] absolute bottom-0 m-1 md:m-4 text-white'>23 jun 2019</div>
            </div>
            <div className='font-bold text-[10px] md:text-xl px-1 md:px-4'>We'll your next project, because nobody wants.....</div>
            <div className='text-[8px] md:text-base px-1 md:px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <button className='font-semibold text-white w-fit bg-[#2C6856] px-2 py-1 md:py-2 md:px-4 mx-1 md:mx-4 mb-4 md:mb-6 rounded my-1 md:rounded-xl text-[9px] md:text-lg'>READ MORE</button>
          </div>
        </div>
      </div>
      <div className='w-4/5 flex flex-col items-center mx-auto'>
        <div className='md:text-[35px] text-center mt-8 text-[20px] font-bold'>Join, Collaborate, and Transform Together!</div>
        <img src={joinus} className='md:w-3/5 w-full my-4 md:my-8' alt="" />
        <div className='flex flex-col items-center w-full'><Button maxWidth={'120px'} className='my-2' backgroundColor={'#2C6856'} color={'white'}>View More</Button></div>
      </div>
      <div className='w-full items-center flex flex-col my-8'><Bookacall /></div>

    </div >
  )
}

export default Homepage
