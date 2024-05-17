import React, { useEffect, useState } from 'react';
import NavAd from './NavAd';
import SideNav from './SideNav';
import admin1 from '../Images/admin1.png';
import admin2 from '../Images/admin2.png';
import admin3 from '../Images/admin3.png';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import ReactApexCharts from 'react-apexcharts';
const Admin = () => {

  const seriesData = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }];

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  return (
    <div className='bg-[#D9E2DF]'>
      <NavAd />
      <SideNav />
      <div className='flex justify-center mt-[10rem] bg-white'>
        <div className='flex-col justify-flex-start g-[50px] ml-[90px]'>
          <div className='flex gap-[140px] mt-10'>
            <div className='flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl '>
              <img className='h-[80px]' src={admin1} alt="" />
              <div className='flex-col align-center justify-center'>
                <div className=' font-bold'>14925</div>
                <div>Total visits</div>
              </div>
            </div>
            <div className='flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl'>
              <img className='h-[80px]' src={admin2} alt="" />
              <div className='flex-col align-center justify-center'>
                <div className=' font-bold'>14925</div>
                <div className='w-full'>Total visits</div>
              </div>
            </div >
            <div className='flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl'>
              <img className='h-[80px]' src={admin3} alt="" />
              <div className='flex-col align-center justify-center'>
                <div className=' font-bold'>14925</div>
                <div>Total visits</div>
              </div>
            </div>
          </div>
          <div className=' flex justify-center mt-10 align-middle gap-[170px]'>
            <div className='mr-600px flex align-center'>
              <ReactApexCharts options={chartOptions} series={seriesData} type="line" height={350} width={500} />
            </div>
            <div className='flex-col'>
              <div className='flex gap-12 mb-10' >
                <h3 className='font-bold'>New Visits <br /> Avg per month</h3>
                <div className='flex-col align-middle justify-center'>
                  <h1 className='font-bold text-[25px] text-[#8D8D94]'>19</h1>
                  <h1 className='text-[#00FFA3]'>0.24%</h1>
                </div>
              </div>
              <div className='flex-col'>
                <div className='flex gap-20'>
                  <h3>Top Pages</h3>

                </div>
                <div className='flex gap-20'>
                  <h3 className='text-[#8D8D94]'>Home</h3>
                  <div className='flex jusify-center align-middle' >
                    <div className='text-[25px] text-[#707070]'>19</div>
                    <div className='text-[#00FFA3]'>0.24%</div>
                  </div>
                </div>
                <div className='flex gap-20'><h3 className='text-[#8D8D94]'>About</h3>
                  <div className='flex gap-4 align-middle ' >
                    <div className='text-[25px] text-[#707070]'>19</div>
                    <div className='text-[#00FFA3]'>0.24%</div>
                  </div></div>
                <div className='flex gap-20'><h3 className='text-[#8D8D94]'>Gallery</h3><div className='flex gap-4 align-middle ' >
                  <div className='text-[25px] text-[#707070]'>19</div>
                  <div className='text-[#00FFA3]'>0.24%</div>
                </div></div>
                <div className='flex gap-20'><h3 className='text-[#8D8D94]'>Blogs</h3><div className='flex gap-4 align-middle ' >
                  <div className='text-[25px] text-[#707070]'>19</div>
                  <div className='text-[#00FFA3]'>0.24%</div>
                </div></div>
                <div className='flex gap-20'><h3 className='text-[#8D8D94]'>Services</h3><div className='flex gap-4 align-middle ' >
                  <div className='text-[25px] text-[#707070]'>19</div>
                  <div className='text-[#00FFA3]'>0.24%</div>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Admin;
