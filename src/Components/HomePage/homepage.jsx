import React from 'react';
import './homepage.css'
import Navbar from './navbar'
import { Button, Divider, Image, position } from '@chakra-ui/react';
import Back from '../Images/Homepage_back.png'
import Footer from './footer'
import { useEffect } from 'react';
import Clientlist from '../AboutUs/clientlist';
import midsecback1 from '../Images/home-mid1.png'
import midsecback2 from '../Images/home-mid2.png'
import service1 from '../Images/service1.png'
import service2 from '../Images/service2.png'
import service4 from '../Images/service4.png'
import service5 from '../Images/service5.png'
import service6 from '../Images/midsec2-1.png'
import morebtn from '../Images/midsec2-2.png'
import midsec31 from '../Images/midsec3-1.png'
import midsec32 from '../Images/midsec3-2.png'
import midsec33 from '../Images/midsec3-3.png'
import diff1 from '../Images/diff1.png'
import diff2 from '../Images/diff2.png'
import diff3 from '../Images/diff3.png'
import diff4 from '../Images/diff4.png'
import midsec51 from '../Images/midsec5-1.png'
import midsec52 from '../Images/midsec5-2.png'
import midsec53 from '../Images/midsec5-3.png'
import midsec54 from '../Images/midsec5-4.png'
import midsec55 from '../Images/midsec5-5.png'
import midsec56 from '../Images/midsec5-6.png'
import line from '../Images/line.png'
import midsec71 from '../Images/midsec7-1.png'
import midsec81 from '../Images/midsec8-1.png'
import midsec82 from '../Images/midsec8-2.png'
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Home'>
      <div>

        <Image
          marginLeft={'14rem'}
          src={Back}
          width={'1350px'}
          height={'1081px'}

        />
        <div className='quote-box'>
          <div className='quote-1'>Quick Service Request</div>
          <div className='quote-2'>Get a Free Quote</div>
          <input className='quote-name' type="text" placeholder='Name' style={{ color: '#C4C4C4' }} />
          <input className='quote-num' type="text" placeholder='Phone No.' style={{ color: '#C4C4C4' }} />
          <Button backgroundColor={'#2C6856'} color={'white'}>Send </Button>
        </div>
        {/* <div className='relative bottom-36 -mt-16 -mb-20'><Clientlist /></div> */}
        <div className=" w-full md:top-[-1.25rem] top-[-0.5rem] flex flex-col items-center relative">
          <Clientlist />
        </div>
      </div>
      <div className='midsec1 flex mt-[50px]' >
        <Image src={midsecback1} width={'250px'} height={'165px'} position={'absolute'} marginLeft={'100px'} marginTop={'-100px'} />
        <Image src={midsecback2} width={'780px'} height={'466px'} marginLeft={'200px'} />
        <div className='relative ml-[-195px] mt-[50px] '>
          <div className='midsec2 flex flex-col bg-[#fff] p-[60px] z-20 pb-[90px]' >
            <div className='midsec2-title text-3xl font-bold mb-[2vh]'>
              How We are Different?
            </div>
            <div className='midsec2-content'>
              "Discover excellence with SPAR TechnoVet! Based in India, we specialize in top-notch fit-out services and bespoke furniture. Our seasoned professionals bring vast expertise in crafting exceptional commercial and residential spaces. From captivating retail areas to functional offices, we turn visions into reality. At SPAR TechnoVet, we blend innovation with precision, delivering unparalleled results. Elevate your space with us – Where Vision Meets Expertise!"
            </div>
            <Button maxWidth={'140px'} backgroundColor={'#2C6856'} color={'white'}>
              KNOW MORE
            </Button>
          </div>
        </div>
      </div>
      <div className="midsec22 flex justify-center">
        <div className='mt-12 grid md:gap-10 gap-3 grid-cols-2 md:grid-cols-3 md:w-2/3 w-[90%] mb-12'>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service1} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Retail interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Elevate your retail experience with SPAR TechnoVet. We design spaces that captivate, engage, and reflect your brand identity. Transform your retail environment with us."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service2} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Office interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Transform your workspace with SPAR TechnoVet. Innovative, functional, and tailored office interiors for elevated productivity."</p>
          </div>
          <div className=' flex flex-col justify-start'>
            <p className='md:text-[2vw] text-sm text-center font-bold my-1 md:my-4'>Services Provided By Us</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>We have been providing great
              interior solutions service.</p>
            <Button color={'white'} backgroundColor={'#2C6856'} maxWidth={'6vw'}>Learn More</Button>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service4} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Restaurant interior</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"Experience dining differently with SPAR TechnoVet. We create inviting restaurant interiors that elevate your culinary journey."</p>
          </div>
          <div className=' bg-white flex flex-col items-center px-4 md:px-10 py-2 md:py-6 rounded-xl md:rounded-3xl'>
            <img src={service5} className='md:h-[30%] h-10' alt="" />
            <p className='md:text-[1.2vw] text-sm text-center font-semibold my-1 md:my-4'>Turnkey Retail Fit-out</p>
            <p className='text-center text-[8px] md:text-[0.8vw]'>"SPAR Technovet excels in turnkey retail fitouts, providing end-to-end solutions for seamless and efficient design-to-execution services."</p>
          </div>
          <div className=' bg-[#2C6856] flex flex-row md:rounded-3xl text-white '>
            <div>
              <p className='md:text-[1.6vw] text-sm text-center font-semibold my-1 md:my-4 p-[6vh] pl-[0] pt-[8vh] pb-0'>+4</p>
              <p className='md:text-[2vw] text-sm text-center font-semibold my-1 md:my-4 p-[6vh] pt-1'>More</p>
            </div>
            <div className='flex flex-col'>
              <Image width={'60px'} height={'125px'} src={service6} alt="" />
              <Image width={'30px'} height={'30px'} margin={'50px'} src={morebtn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="midsec3 mt-20 flex flex-row gap-6 justify-center align-text-bottom">
        <div className='flex flex-col max-w-[400px]'>
          <p className='text-[40px] font-bold'>
            Creative Solutions by Professional
          </p>
          <p className='max-w-[600px]'>
            SPAR Technovet stands out for seamlessly integrating design and execution, offering end-to-end solutions with efficient project management, transparent pricing, and a comprehensive approach. The company's expertise includes in-house manufacturing, proven project success, and strategic labor optimization for optimal timelines and quality results.
          </p>
          <div display={'flex'} justifyContent={'center'} >
            <Image margin={'1.2rem'} width={'300px'} height={'70px'} src={midsec33} />
          </div>

        </div>
        <div>
          <Image width={'300px'} height={'370px'} src={midsec31} />
        </div>
        <div>
          <Image width={'300px'} height={'460px'} src={midsec32} />
        </div>
      </div>
      <div className='midsec4 flex justify-center mt-10'>
        <div className='flex flex-row w-4/5 justify-evenly'>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff1} className='mb-2 h-24' alt="" />
            Highly committed to Work
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff2} className='mb-2 h-24' alt="" />
            Own team and supply unit
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff3} className='mb-2 h-24' alt="" />
            Controlled Customization cost
          </div>
          <div className='flex flex-col items-center text-2xl w-52 text-center font-semibold text-[#1E443E]'>
            <img src={diff4} className='mb-2 h-24' alt="" />
            End to end solution
          </div>
        </div>
      </div>
      <div className='midsec5 flex flex-col p-[100px] bg-zinc-100 justify-center'>

        <div className='flex flex-row justify-center gap-[50vw] mb-8'>
          <p className='text-[35px] font-bold'>Our Featured Projects</p>
          <Button maxWidth={'120px'} backgroundColor={'#2C6856'} color={'white'}>View More</Button>
        </div>
        <div className='flex flex-col gap-4 justify-center ml-[100px] mr-[auto]'>
          <Image width={'170px'} height={'250px'} position={'absolute'} marginTop={'200px'} marginLeft={'-120px'} src={midsec56} />
          <div className='flex flex-row gap-4'>
            <Image width={'700px'} height={'410px'} src={midsec51} />
            <div className='flex flex-col gap-4'>
              <Image width={'400px'} height={'200px'} src={midsec52} />
              <Image width={'400px'} height={'200px'} src={midsec53} />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <Image width={'720px'} height={'200px'} src={midsec54} />
            <Image width={'380px'} height={'200px'} src={midsec55} />
          </div>
        </div>
      </div>
      <div className="midsec6 mb-[100px]">
        <div className='title flex justify-center font-bold text-[30px]'>
          How we Work
        </div>
        <div className='flex flex-row justify-center gap-8 mt-6'>
          <div className='flex flex-col pl-[20px] pr-[45px] pt-[20px] pb-[30px] max-w-[80vh] gap-2'>
            <p className='text-[40px] font-bold'>01</p>
            <p className='text-[18px] font-bold max-w-[120px]'>Initial Consultation
            </p>
            <p className='max-w-[160px] text-[12px]'>Begin with a detailed discussion to comprehend the client's vision and requirements.</p>
          </div>
          <div className='work2 flex flex-col pl-[20px] pr-[45px] pt-[20px] pb-[30px] max-w-[80vh] gap-2'>
            <p className='text-[40px] font-bold'>02</p>
            <p className='text-[18px] font-bold max-w-[120px]'>Concept Development
            </p>
            <p className='max-w-[160px] text-[12px]'>Create innovative and personalized design concepts based on client input.
            </p>
          </div>
          <div className='flex flex-col pl-[20px] pr-[45px] pt-[20px] pb-[30px] max-w-[80vh] gap-2'>
            <p className='text-[40px] font-bold'>03</p>
            <p className='text-[18px] font-bold max-w-[120px]'>Design
              Approval
            </p>
            <p className='max-w-[160px] text-[12px]'>Present design proposals for client feedback and secure design approval.
            </p>
          </div>
          <div className='btn flex flex-col mt-[80px]'>
            <Button padding={'20px'} backgroundColor={'#2C6856'} color={'white'}>KNOW MORE</Button>

          </div>
        </div>
        <Image src={midsecback1} width={'230px'} height={'145px'} position={'absolute'} marginLeft={'1120px'} marginTop={'-120px'} />

      </div>
      <div className='midsec7 mb-10'>
        <div className='flex flex-col justify-center'>
          <div className='midsec7-title flex justify-center text-[40px] font-bold'>60 Days Journey From Design to Final Handover</div>
          <Divider />
          {/* <div className='line flex flex-col justify-center'><Image maxWidth={'500px'} src={line} /></div> */}
          <div className='flex justify-center p-10'>
            <Image width={'180vh'} height={'25vh'} src={midsec71} />
          </div>
        </div>

      </div>
      <div className='midsec8'>
        <div className='midsec8-title flex justify-center text-[35px] font-bold '>
          Latest Posts
        </div>
        <div className='flex flex-row justify-center gap-8 mt-8'>
          <div className='flex flex-col gap-4 max-w-[250px]'>
            <div className='text-[#4B4B4B]'>23 jun 2019</div>
            <div className='font-bold'>We’ll your next project, because nobody wants.....</div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <div className='flex flex-row gap-4'>
              <p className='text-[#4A8780]'>Read more </p>
              <Image marginTop={'10px'} height={'8px'} width={'10px'} src={midsec81} />
            </div>
          </div>
          <div className='midse8-post2 flex flex-col gap-4 max-w-[250px] rounded'>
            <div className='text-[#4B4B4B]'>23 jun 2019</div>
            <div className='font-bold'>We'll your next project, because nobody wants.....</div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <div className='flex flex-row gap-4'>
              <p className='text-[#4A8780]'>Read more </p>
              <Image marginTop={'10px'} height={'8px'} width={'10px'} src={midsec81} />
            </div>
          </div>
          <div className='flex flex-col gap-4 max-w-[250px]'>
            <div className='text-[#4B4B4B]'>23 jun 2019</div>
            <div className='font-bold'>We’ll your next project, because nobody wants.....</div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
            <div className='flex flex-row gap-4'>
              <p className='text-[#4A8780]'>Read more </p>
              <Image marginTop={'10px'} height={'8px'} width={'10px'} src={midsec81} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Homepage
