import React, { useEffect, useState } from "react";
import NavAd from "./NavAd";
import SideNav from "./SideNav";
import admin1 from "../Images/admin1.png";
import admin2 from "../Images/admin2.png";
import admin3 from "../Images/admin3.png";
import ReactApexCharts from "react-apexcharts";
import axios from "axios";
import BACKEND_URL from "../../helper";
import dayjs from 'dayjs';

const Admin = () => {
  const [visitCounts, setVisitCounts] = useState({});
  const [seriesData, setSeriesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalNewVisits, setTotalNewVisits] = useState(0);
  const [averageNewVisits, setAverageNewVisits] = useState(0);
  const [totalNewContacts, setTotalNewContacts] = useState(0);

  useEffect(() => {
    // Fetch visit counts from the server
    axios
      .get(`${BACKEND_URL}/api/visits`)
      .then((response) => {
        setVisitCounts(response.data);

        // Aggregate visits by month for the home page
        const homePageVisits = response.data['/'] || { dates: [] };
        const aggregatedData = {};

        homePageVisits.dates.forEach(date => {
          const month = dayjs(date).format('YYYY-MM');
          if (!aggregatedData[month]) {
            aggregatedData[month] = 0;
          }
          aggregatedData[month] += 1;
        });

        const sortedMonths = Object.keys(aggregatedData).sort();
        setCategories(sortedMonths);
        setSeriesData([{
          name: 'Home Page Visits',
          data: sortedMonths.map(month => aggregatedData[month])
        }]);

        // Calculate total new visits for today
        const today = dayjs().format('YYYY-MM-DD');
        const todayVisits = homePageVisits.dates.filter(date => dayjs(date).format('YYYY-MM-DD') === today);
        setTotalNewVisits(todayVisits.length);

        // Calculate average new visits per month
        const totalMonths = sortedMonths.length;
        const totalVisits = sortedMonths.reduce((acc, month) => acc + aggregatedData[month], 0);
        const averageVisits = totalMonths !== 0 ? totalVisits / totalMonths : 0;
        setAverageNewVisits(averageVisits);
      })
      .catch((error) => console.error("Error fetching visit counts:", error));

    // Fetch new contacts for the current date
    axios
      .get(`${BACKEND_URL}/api/contacts`)
      .then((response) => {
        const today = dayjs().format('YYYY-MM-DD');
        const newContacts = response.data.filter(contact => dayjs(contact.date).format('YYYY-MM-DD') === today);
        setTotalNewContacts(newContacts.length);
      })
      .catch((error) => console.error("Error fetching new contacts:", error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderVisitDates = (dates) => (
    <ul>
      {dates.map((date, index) => (
        <li key={index}>{formatDate(date)}</li>
      ))}
    </ul>
  );

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Home Page Visits Over Time",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: categories,
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
    <div className="bg-[#D9E2DF]">
      <NavAd />
      <SideNav />
      <div className="flex justify-center mt-[10rem] bg-white">
        <div className="flex-col justify-flex-start g-[50px] ml-[90px]">
          <div className="flex gap-[140px] mt-10">
            <div className="flex align-center justify-center bg-[grey] px-10 py-6 rounded-2xl ">
              <img className="h-[80px]" src={admin1} alt="" />
              <div className="flex-col align-center justify-center">
                <div className=" font-bold">{visitCounts["/"]?.count || 0}</div>
                <div>Total visits</div>
                {/* {visitCounts["/"] && renderVisitDates(visitCounts["/"].dates)} */}
              </div>
            </div>
            <div className="flex align-center justify-center bg-[grey] px-8 py-6 rounded-2xl">
              <img className="h-[80px]" src={admin2} alt="" />
              <div className="flex-col align-center justify-center">
                <div className=" font-bold">{totalNewVisits}</div>
                <div>Total new visits</div>
                {/* {visitCounts["/about"] && renderVisitDates(visitCounts["/about"].dates)} */}
              </div>
            </div>
            <div className="flex align-center justify-center bg-[grey] px-8 py-6 rounded-2xl">
              <img className="h-[80px]" src={admin3} alt="" />
              <div className="flex-col align-center justify-center">
                <div className=" font-bold">{totalNewContacts}</div>
                <div>Total new contacts</div>
                {/* {visitCounts["/gallery"] &&
                  renderVisitDates(visitCounts["/gallery"].dates)} */}
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-10 align-middle gap-[170px]">
            <div className="mr-600px flex align-center">
              <ReactApexCharts
                options={chartOptions}
                series={seriesData}
                type="line"
                height={350}
                width={500}
              />
            </div>
            <div className="flex-col align-middle items-center">
              <div className="flex gap-12 mb-10 align-middle items-center">
                <h3 className="font-bold">
                  New Visits <br /> Avg per month
                </h3>
                <div className="flex-col align-middle items-center justify-center">
                  <h1 className="font-bold text-[25px] text-[#8D8D94]">{averageNewVisits.toFixed(2)}</h1>
                </div>
              </div>
              <div className="flex-col align-middle items-center justify-center">
                <div className="flex gap-20 ">
                  <h3>Top Pages</h3>
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col gap-4 text-[#8D8D94]">
                    <div>HOME</div>
                    <div>ABOUT</div>
                    <div>GALLERY</div>
                    <div>BLOGS</div>
                    <div>SERVICES</div>
                  </div>
                  <div className=" flex flex-col text-[25px] text-[#707070]">
                    <div>{visitCounts["/"]?.count || 0}</div>
                    <div>{visitCounts["/about"]?.count || 0}</div>
                    <div>{visitCounts["/gallery"]?.count || 0}</div>
                    <div>{visitCounts["/blogs"]?.count || 0}</div>
                    <div>{visitCounts["/service"]?.count || 0}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
