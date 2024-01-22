import React from "react";

const RequestPickup = () => {
    return(
        <div className='pt-[25px] px-[40px]'>
            <div className='flex items-center justify-between pb-[15px]'>
                <h1 className='text-white text-xl font-bold leading-[34px]'>Request Waste Pickup</h1>
            </div>
            <div className='grid grid-cols-3 w-full'>
                <div className='w-[40vh] bg-white rounded-2xl flex flex-wrap items-center'>
                        <h1 className='text-sm font-bold p-1'>Pickup Address</h1>
                            <div className='flex flex-wrap text-left w-[50vh] p-2'>
                                <h2 className="text-red-600">Placeholder</h2>
                            </div>
                </div>
                <div className='w-[80vh] bg-white rounded-2xl flex flex-wrap items-center'>
                        <h1 className='text-sm font-bold p-1'>Select Date & Time</h1>
                        <div className='flex flex-wrap text-left w-[80vh] p-2'>
                            <h2 className="text-red-600">Placeholder</h2>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPickup;