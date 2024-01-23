import React from "react";
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const RequestPickup = () => {
    
    const [selected, setSelected ] = useState();
    let footer = <p>Pick a day.</p>
    if (selected) {
        footer = <p>Date picked: {format(selected, 'PP')}</p>
    }

    const [selectedTime, setSelectedTime] = useState(null);
    const timeSlots = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '13:00 PM',
        '14:00 PM',
        '15:00 PM',
        '16:00 PM',
        '17:00 PM'
    ];

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    return(
        <div className='pt-[25px] px-[40px]'>
            <div className='flex items-center justify-between pb-[15px]'>
                <h1 className='text-white text-xl font-bold leading-[34px]'>Request Waste Pickup</h1>
            </div>
            <div className='items-center w-full'>
                <div className='bg-white rounded-2xl w-[125vh] grid grid-flow-col auto-cols-max'>
                    <div className="ml-3">
                        <h1 className='text-sm font-bold p-1 mt-5'>Pickup Address:</h1>
                            <div className='text-left w-[50vh] p-2 flex-wrap mt-5'>
                                <form>
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="names"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='Name & Surname'
                                        required
                                    />
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="street-address"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='Street Address'
                                        required
                                    />
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="suburb"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='Suburb'
                                        required
                                    />
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="city"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='City'
                                        required
                                    />
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="postal-code"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='Postal Code'
                                        required
                                    />
                                    <input 
                                        className='border-b-2 border-gray-400 w-[40vh] focus:outline-none focus:border-primaryGreen mb-10' 
                                        type="text" 
                                        name="phone-num"
                                        /*value={formData.frequency}
                                        onChange={handleChange}*/
                                        placeholder='Phone Number'
                                        required
                                    />
                                </form>
                            </div>
                    </div>
                    <div className="ml-3">
                        <h1 className='text-sm font-bold p-1 ml-7 mt-5'>Select a Date:</h1>
                            <div className='text-left w-max p-2'>
                                <form>
                                    <DayPicker
                                        mode="single"
                                        selected={selected}
                                        onSelect={setSelected}
                                        footer={footer}
                                        className="flex justify-center items-center shadow-2xl rounded-lg"
                                    />
                                </form>
                            </div>
                    </div>
                    <div className="ml-3 pl-20">
                        <h1 className='text-sm font-bold p-1 mt-5'>Select a Time Slot:</h1>
                            <div className='mt-5 mb-10'>
                                <form>
                                    <ul className="flex flex-col justify-center max-w-[8rem] space-y-4 text-black">
                                        {timeSlots.map((timeSlot, index) => (
                                            <li
                                                key={index}
                                                className={`cursor-pointer bg-white text-lg rounded-md h-8 px-2 text-center ${
                                                    selectedTime === timeSlot ? 'text-primaryGreen font-bold text-lg border-2 border-primaryGreen' : ''}`}
                                                    onClick={() => handleTimeSelection(timeSlot)}
                                            >
                                                {timeSlot}
                                            </li>
                                        ))}
                                    </ul>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPickup;