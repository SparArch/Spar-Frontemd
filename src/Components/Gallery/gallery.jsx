import React from 'react'
import gallerybanner from '../Images/gallery banner.png'
import Clientlist from '../AboutUs/clientlist'
import { useEffect } from 'react'
import homepagebackground from '../Images/Homepage_back.png'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, Image, Text, background } from '@chakra-ui/react'
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
            <div className="blogsec1 flex flex-col gap-6 items-center rounded-3xl">
                <Tabs display={'flex'} justifyItems={'center'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <TabList>
                        <Tab><p className='md:text-lg text-xs'>All</p></Tab>
                        <Tab><p className='md:text-lg text-xs'>Architecture</p></Tab>
                        <Tab><p className='md:text-lg text-xs'>Interiors</p></Tab>
                        <Tab><p className='md:text-lg text-xs'>Commercial</p></Tab>
                        <Tab><p className='md:text-lg text-xs'>F&B</p></Tab>
                        <Tab><p className='md:text-lg text-xs'>Retail Fit-Out</p></Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel display={'flex'} alignItems={'center'} flexDirection={'column'}>
                            <div className='hidden md:flex flex-col gap-4 my-16 w-[90%]'>
                                <div className='w-full gap-4 flex flex-row'>
                                    <div className='w-1/2 bg-[#D9D9D9]'>
                                        <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div className='w-full gap-4 flex flex-col'>
                                        <div className='w-full gap-4 flex flex-row h-full'>
                                            <div className='w-full bg-[#D9D9D9]'>
                                                <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                            </div>
                                            <div className='w-full bg-[#D9D9D9]'>
                                                <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                            </div>
                                        </div>
                                        <div className='w-full gap-4 flex flex-row h-full'>
                                            <div className='w-full bg-[#D9D9D9]'>
                                                <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                            </div>
                                            <div className='w-full bg-[#D9D9D9]'>
                                                <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full gap-4 flex flex-row'>
                                    <div className='w-full gap-4 flex flex-col'>
                                        <div className='w-full h-full flex bg-[#D9D9D9] flex-row'>
                                            <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                        </div>
                                        <div className='w-full h-full flex bg-[#D9D9D9] flex-row'>
                                            <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                    <div className='w-full bg-[#D9D9D9]'>
                                        <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden w-full h-[600px] my-8 grid gap-2 grid-rows-6 grid-cols-2'>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className='h-full bg-[#d9d9d9]'>
                                    <img src={homepagebackground} alt="" className="object-cover w-full h-full" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>four!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>five!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>six!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Button marginBottom={'100px'} backgroundColor={'#2C6856'} color={'white'} className='hover:text-black '><p className='md:text-xl'>View More</p></Button>
            </div>

        </div>
    )
}

export default Gallery
