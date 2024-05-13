import React, { useEffect, useState } from 'react';
import NavAd from './NavAd';
import SideNav from './SideNav';
import admin1 from '../Images/admin1.png';
import admin2 from '../Images/admin2.png';
import admin3 from '../Images/admin3.png';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import CanvasJSReact from '@canvasjs/react-charts';
const Admin = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Bounce Rate by Week of Year"
    },
    axisY: {
      title: "Bounce Rate",
      suffix: "%"
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 60 },
        { x: 13, y: 55 },
        { x: 14, y: 60 },
        { x: 15, y: 56 },
        { x: 16, y: 60 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 }
      ]
    }]
  }

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
          <div className='w-70vw'>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
