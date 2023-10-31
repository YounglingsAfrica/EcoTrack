import React from 'react';
import { TbRoute } from "react-icons/tb";

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
        <div className='h-[100px] rounded-[8px] bg-darkGreen border-l-[4px] border border-paleGreen flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-white text-[11px] leading-[17px] font-bold'>ROUTES (MONTHLY)</h2>
                <h1 className='text-white text-[20px] leading-[24px] font-bold'>84</h1>
            </div>
            <TbRoute fontSize={28} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Main;
;