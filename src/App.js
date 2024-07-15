import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { BsFiletypePdf } from "react-icons/bs";
import {
  FaChartLine,
  FaFileAlt,
  FaFilePdf,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { IoBarChartOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function App() {
  const doughnutData = {
    labels: ["Pension", "Equity", "Cash"],
    datasets: [
      {
        data: [41, 41, 41],
        backgroundColor: ["#005262", "#8ec7b7", "#bde5ac"], // Using the colors from the wireframe
        hoverBackgroundColor: ["#7cb342", "#00acc1", "#ffeb3b"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "50%", // Creates the donut shape
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "My InvestMent Center",
        data: [22, 28, 34, 44, 55, 65, 59, 51, 43, 22, 40, 37],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const bardata = {
    labels: [
      "UK Gilts",
      "Sterling Corporate Bonds",
      "Global Boods",
      "UK Equities",
      "North American Equities",
      "European Equities",
    ],
    datasets: [
      {
        label: "Asset Alloc Cash",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#005262",
        borderColor: "#005262",
        borderWidth: 1,
      },
      {
        label: "Asset Alloc Bonds",
        data: [8, 15, 6, 7, 3, 4],
        backgroundColor: "#8ec7b7",
        borderColor: "#8ec7b7",
        borderWidth: 1,
      },
      {
        label: "Asset Alloc Equities",
        data: [5, 10, 9, 6, 4, 3],
        backgroundColor: "#bde5ac",
        borderColor: "#bde5ac",
        borderWidth: 1,
      }
    ]
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* ----Sidebar---- */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="p-4 flex flex-col items-center">
              <img
                className="w-36 h-36 rounded-full mt-6 border-4 border-blue-500 object-cover"
                src="pexels-photo-2182970.webp"
                alt="Profile"
              />
              <h2 className="mt-4 text-sm/[35px] font-light">Mark Boss</h2>
              <button className="mt-2 px-3 py-1 bg-gray-600 text-white border border-blue-500 rounded-full">
                Update Profile
              </button>
            </div>
            <div className="p-6 flex flex-col items-center">
              <FaChartLine className="mr-2 w-12 h-16 font-light" />
              <h6 className="font-light text-sm">My Portfolio</h6>
            </div>
            <div className="p-6 flex flex-col items-center">
              <FaFileAlt className="mr-2 w-12 h-16 font-light" />
              <h6 className="font-light text-sm mt-2">My Documents</h6>
            </div>
            <div className="p-6 flex flex-col items-center">
              <FaUserCircle className="mr-2 w-12 h-16 font-light" />
              <h6 className="font-light text-sm">My Portfolio</h6>
            </div>
          </div>
        </div>

        {/* ----Main-Content---- */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* ----Header---- */}
          <div className="flex items-center justify-between h-20 bg-slate-300 border-b border-gray-200">
            <div className="flex items-center px-4">
              <img
                className="h-14 w-36 object-cover"
                src="2584139.jpg"
                alt="Logo"
              />
            </div>
            <div className="flex items-center pr-4 space-x-4">
              <FaSignOutAlt className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          {/* -----Dashboard---- */}
          <div className="p-4 grid grid-cols-3 gap-4 grid-flow-col-dense h-full">
            <div className="row-span-7 border p-4  bg-white-200 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mt-2">
                Total Portfolio Value
              </h2>
              <p className="text-xl font-bold mt-2">£1,50,000.30</p>
              <p className="text-lg font-semibold mt-2">Portfolio Split</p>
              <div className="mt-2 flex items-center justify-center">
                <div className="max-w-full max-h-full">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-12 p-4 rounded-2xl shadow mt-4 lg:mt-0 bg-white">
              <h2 className="text-lg font-semibold">Valuation History</h2>
              <div className="sm:hidden mt-2">
                <label for="tabs" className="sr-only">
                  Select your country
                </label>
                <select
                  id="tabs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Profile</option>
                  <option>Dashboard</option>
                  <option>setting</option>
                  <option>Invoioce</option>
                </select>
              </div>
              <ul class="mt-2 hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li class="w-full focus-within:z-10">
                  <a
                    href="#"
                    class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-white-700 dark:text-gray"
                    aria-current="page"
                  >
                    Total Portfolio
                    <p className="">£ 742,335.30</p>
                  </a>
                </li>
                <li class="w-full focus-within:z-10">
                  <a
                    href="#"
                    class="inline-block w-full p-4 bg-white border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Fundamental ISA
                    <p className="">£ 742,335.30</p>
                  </a>
                </li>
                <li class="w-full focus-within:z-10">
                  <a
                    href="#"
                    class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-white-700 dark:text-gray"
                  >
                    Fundamental GIA
                    <p className="">£ 742,335.30</p>
                  </a>
                </li>
                <li class="w-full focus-within:z-10">
                  <a
                    href="#"
                    class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200  rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-white-700 dark:text-gray"
                  >
                    Fundamental Pension
                    <p className="">£ 742,335.30</p>
                  </a>
                </li>
              </ul>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <div className="grid grid-rows-3">
                    <div className="p-2 m-3 flex mt-4">
                      <LuDownload className="mr-2 mt-1 w-8 h-8 text-gray-500" />
                      <p className="text-gray-500 font-semibold text-[17px]">
                        Money In
                      </p>
                    </div>
                    <div className="p-2 m-3 flex mt-1">
                      <FiUpload className="mr-2 mt-1 w-8 h-8 text-gray-500" />
                      <p className="text-gray-500 font-semibold text-[17px]">
                        Money Out
                      </p>
                    </div>
                    <div className="p-2 m-3 flex mt-1 mr-2">
                      <IoBarChartOutline className="mr-2 mt-1 w-8 h-8 text-gray-500" />
                      <p className="text-gray-500 font-semibold text-[17px]">
                        Gain/Loss
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border col-span-2 m-2 p-2">
                  <Line data={data} />
                </div>
              </div>
              <div className="grid w-full grid-rows-1">
                <h2 className="text-lg font-semibold mt-2">Investment Strategy - Asset Allocation</h2>
                <div className="row-span-1">
                  <Bar data={bardata} options={options} />
                </div>
              </div>
            </div>

            <div className="row-span-5 p-4 bg-white-200 h-full rounded-3xl shadow-2xl">
              <h2 className="text-lg font-semibold">
                Download your Portfolio Overview
              </h2>
              <div className="mt-4 flex items-center">
                <BsFiletypePdf className="h-12 w-36 text-gray-500 mr-4" />
                <div className="inline-block">
                  <p className="text-[13px] mt-1 text-slate-700">
                    Please Click below to download
                  </p>
                  <p className="text-[13px] mt-2 text-slate-700">
                    Portfolio Valuation Summary
                  </p>
                  <p className="text-[13px] mt-2 text-slate-700 pt-10">
                    If you have any queries regarding your portfolio.
                  </p>
                  <p className="text-[13px] mt-2 text-slate-700">
                    Please don't hesitate to get in touch
                  </p>

                  <button className="mt-4 px-4 py-2 text-white bg-slate-600 rounded-full border border-blue-500 flex items-center">
                    <FaDownload className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
