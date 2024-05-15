import React from 'react'
import gallerybanner from '../Images/gallery banner.png'
import { useEffect, Component } from 'react'
import Slider from 'react-slick';
import next from '../Images/next.png'
import prev from '../Images/prev.png'
import homebg from '../Images/homebg.png'
import Bookacall from '../AboutUs/bookacall'


const Contactus = () => {
    useEffect(() => {
        // window.scrollTo(0, 0)
    }, []);
    const gallerypost = {title:"The Ayurveda Experience", content:"Engineering Consultancy, Supply and Production of Furniture for The Ayurveda Experience. The entire fixtures to be made modular and was shipped to USA", scope:"Bespoke Furniture", location:"Del Amo Fashion Centre, California, United States", images:[homebg, homebg, homebg]}
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
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
                style={{ ...style, display: ""}}
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
                style={{ ...style, display: "block"}}
                onClick={onClick}
            >
                <img className='w-3 md:w-auto' src={prev} alt="" />
            </div>
        );
    }
    return (
        <div className='flex flex-col items-center'>
            <img src={gallerybanner} alt="aboutimg1" className="z-10 w-full top-0" />
            <Slider {...settings} className='w-[85%] md:w-[90%] my-8 md:my-16'>
                {gallerypost.images.map(testimonial => (
                    <div className='p-1 md:p-4'>
                        <img src={testimonial} alt="" className="w-full" />
                    </div>
                ))}
            </Slider>
            <div className='w-[82%] md:w-[88%] md:text-left text-center text-3xl md:text-6xl font-semibold'>{gallerypost.title}</div>
            <div className='w-[82%] md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold my-4'>{gallerypost.content}</div>
            <div className='w-[82%] mt-8 md:mt-16 md:w-[88%] md:text-left text-center text-3xl md:text-6xl font-semibold'>Project Detail</div>
            <div className='w-[82%] md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold mt-4'>Scope: {gallerypost.scope}</div>
            <div className='w-[82%] mb-4 md:mb-8 md:w-[88%] text-gray-500 text-xs md:text-2xl font-semibold'>Location: {gallerypost.location}</div>
            <div className='w-full items-center flex flex-col my-8'><Bookacall/></div>
        </div>
    )
};

export default Contactus;