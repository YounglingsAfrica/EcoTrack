import React from 'react';
import { TbRoute } from "react-icons/tb";
import { LuContainer } from "react-icons/lu";
import { RiPinDistanceFill } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PieComponent from './PieComponent';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Main = () => {
  return (
    <div className='pt-[25px] px-[50px]'>

      {/*Reports and Analytics*/}

      <div className='flex items-center justify-between'>
        <h1 className='text-white text-lg leading-[34px]'>Reports & Analytics</h1>
        <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out'>
            Generate Report
        </button>
      </div>      
      <div className='flex pl-[3px] w-full gap-[20px] mt-[15px]'>
        <div className='basis-[50%] bg-white cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-md'>
            <h2 className='text-darkGreen font-bold'>Collection Routes Overview</h2>
            <FaEllipsisVertical className='cursor-pointer'/>
          </div>
          <div>
            <LineChart
              width={800}
              height={350}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className='basis-[25%] border bg-white cursor-pointer rounded-md'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-md'>
            <h2 className='text-darkGreen font-bold'>Containers Filled Overview</h2>
            <FaEllipsisVertical className='cursor-pointer'/>
          </div>
          <div>
              <PieComponent />
          </div>
        </div>
        
        {/*Map*/}

        <div className='basis-[25%] border bg-white cursor-pointer rounded-md h-[100px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-md'>
            <h2 className='text-darkGreen font-bold'>Collection Map</h2>
            <FaEllipsisVertical className='cursor-pointer'/>
          </div>
          <div>
            <Map/>
          </div>
        </div>

      </div>


      
      {/*Overview */}

      <div className='flex items-center justify-between'>
        <h1 className='text-white text-lg leading-[34px] mt-[15px] mb-[10px]'>Overview</h1>
      </div> 
      <div className='grid grid-cols-4 gap-[25px] pb-[15px] w-[74.5%]'>
        {/*Routes */}
        <div className='h-[100px] rounded-[8px] bg-black border-l-[4px] border border-[paleGreen] flex items-center justify-between px-[20px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] hover:border-[#CCFF33] transition duration-300 ease-out'>
            <div className='transform hover:text-[#CCFF33] transition duration-300 ease-out'>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>COLLECTION ROUTES</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>84</h1>
            </div>
            <TbRoute fontSize={28} color='white' />
        </div>
        {/*Containers */}
        <div className='h-[100px] rounded-[8px] bg-black border-l-[4px] border border-paleGreen flex items-center justify-between px-[20px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] hover:border-[#CCFF33] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>CONTAINERS</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>2494</h1>
            </div>
            <LuContainer fontSize={28} color='white'/>
        </div>
        {/*Distance*/}
        <div className='h-[100px] rounded-[8px] bg-black border-l-[4px] border border-paleGreen flex items-center justify-between px-[20px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] hover:border-[#CCFF33] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>DISTANCE (KM)</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>4814</h1>
            </div>
            <RiPinDistanceFill fontSize={28} color='white'/>
        </div>
        {/*Duration*/}
        <div className='h-[100px] rounded-[8px] bg-black border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] hover:border-[#CCFF33] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>DURATION (HR)</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>260</h1>
            </div>
            <BiTimeFive fontSize={28} color='white'/>
        </div>
      </div>

      

      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[55%] border bg-paleGreen shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Disposal Locations</h2>
            <FaEllipsisVertical color='black' className='cursor-pointer'/>
          </div>
        </div>
        <div className='basis-[45%] border bg-paleGreen shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Collection Schedule</h2>
            <FaEllipsisVertical color='black' className='cursor-pointer'/>
          </div>
        </div>
            </div>
    </div>
  )
}

export default Main;