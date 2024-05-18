import React, { useEffect, useState } from 'react';
import NavAd from './NavAd';
import SideNav from './SideNav';
import admin1 from '../Images/admin1.png';
import admin2 from '../Images/admin2.png';
import admin3 from '../Images/admin3.png';
import ReactApexCharts from 'react-apexcharts';
import axios from 'axios';
import dayjs from 'dayjs';

const Admin = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [pageTotals, setPageTotals] = useState({});

  useEffect(() => {
    // Fetch visit counts from the server
    axios.get('/api/visits')
      .then(response => {
        const data = response.data;

        // Prepare data for the home page, aggregated by month
        const aggregatedData = {};

        data['/'].forEach(entry => {
          const month = dayjs(entry.date).format('YYYY-MM');
          if (!aggregatedData[month]) {
            aggregatedData[month] = 0;
          }
          aggregatedData[month] += 1;
        });

        const categories = Object.keys(aggregatedData).sort();

        const series = [{
          name: 'Home Page Visits',
          data: categories.map(month => aggregatedData[month])
        }];

        setSeriesData(series);

        // Prepare page totals
        const totals = {
          '/': data['/'].length,
          '/about': data['/about'] ? data['/about'].length : 0,
          '/gallery': data['/gallery'] ? data['/gallery'].length : 0
        };
        setPageTotals(totals);
      })
      .catch(error => console.error('Error fetching visit counts:', error));
  }, []);

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
      curve: 'smooth'
    },
    title: {
      text: 'Home Page Visits Over Time',
      align: 'left'
    },
    xaxis: {
      categories: Object.keys(seriesData[0]?.data || []),
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Number of Visits'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
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
                <div className=' font-bold'>{pageTotals['/'] || 0}</div>
                <div>Total visits</div>
              </div>
            </div>
            <div className='flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl'>
              <img className='h-[80px]' src={admin2} alt="" />
              <div className='flex-col align-center justify-center'>
                <div className=' font-bold'>{pageTotals['/about'] || 0}</div>
                <div>Total visits</div>
              </div>
            </div >
            <div className='flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl'>
              <img className='h-[80px]' src={admin3} alt="" />
              <div className='flex-col align-center justify-center'>
                <div className=' font-bold'>{pageTotals['/gallery'] || 0}</div>
                <div>Total visits</div>
              </div>
            </div>
          </div>
          <div className=' flex justify-center mt-10 align-middle gap-[170px]'>
            <div className='mr-600px flex align-center'>
              <ReactApexCharts options={chartOptions} series={seriesData} type="line" height={350} width={500} />
            </div>
            <div className='flex-col align-middle items-center'>
              <div className='flex gap-12 mb-10 align-middle items-center' >
                <h3 className='font-bold'>New Visits <br /> Avg per month</h3>
                <div className='flex-col align-middle items-center justify-center'>
                  <h1 className='font-bold text-[25px] text-[#8D8D94]'>19</h1>
                  <h1 className='text-[#00FFA3]'>0.24%</h1>
                </div>
              </div>
              <div className='flex-col align-middle items-center justify-center'>
                <div className='flex gap-20 '>
                  <h3>Top Pages</h3>
                </div>
                <div className='flex gap-20 align-middle items-center justify-center'>
                  <h3 className='text-[#8D8D94]'>Home</h3>
                  <div className='flex align-middle items-center justify-center' >
                    <div className='text-[25px] text-[#707070]'>{pageTotals['/'] || 0}</div>
                    <div className='text-[#00FFA3]'>0.24%</div>
                  </div>
                </div>
                <div className='flex gap-20 align-middle items-center justify-center'><h3 className='text-[#8D8D94]'>About</h3>
                  <div className='flex gap-4 align-middle items-center justify-center' >
                    <div className='text-[25px] text-[#707070]'>{pageTotals['/about'] || 0}</div>
                    <div className='text-[#00FFA3]'>0.24%</div>
                  </div></div>
                <div className='flex gap-20'><h3 className='text-[#8D8D94]'>Gallery</h3><div className='flex gap-4 align-middle ' >
                  <div className='text-[25px] text-[#707070]'>{pageTotals['/gallery'] || 0}</div>
                  <div className='text-[#00FFA3]'>0.24%</div>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
