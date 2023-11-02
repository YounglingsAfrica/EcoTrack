import React from 'react';
import { TbRoute } from "react-icons/tb";
import { LuContainer } from "react-icons/lu";
import { RiPinDistanceFill } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";

const Main = () => {
  return (
    <div className='pt-[25px] px-[50px]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-lg leading-[34px]'>Reports & Analytics</h1>
        <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out'>
            Generate Report
        </button>
      </div>
      {/*Overview */}
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        {/*Routes */}
        <div className='h-[100px] rounded-[8px] bg-darkGreen border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>COLLECTION ROUTES</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>84</h1>
            </div>
            <TbRoute fontSize={28} color='white'/>
        </div>
        {/*Containers */}
        <div className='h-[100px] rounded-[8px] bg-darkGreen border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>CONTAINERS</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>2494</h1>
            </div>
            <LuContainer fontSize={28} color='white'/>
        </div>
        {/*Distance*/}
        <div className='h-[100px] rounded-[8px] bg-darkGreen border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>DISTANCE (KM)</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>4814</h1>
            </div>
            <RiPinDistanceFill fontSize={28} color='white'/>
        </div>
        {/*Duration*/}
        <div className='h-[100px] rounded-[8px] bg-darkGreen border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>DURATION (HR)</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>261</h1>
            </div>
            <BiTimeFive fontSize={28} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Main;