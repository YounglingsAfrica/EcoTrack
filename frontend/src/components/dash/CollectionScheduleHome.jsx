import React, { useEffect, useState } from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from 'axios';

const CollectionScheduleHome = () => {
        const [selected, setSelected] = useState();
        const [selectedTime, setSelectedTime] = useState(null);
        const [collectors, setCollectors] = useState([]);
    
        let footer = <p>Please pick a day.</p>;
        if (selected) {
            footer = <p>You picked {format(selected, 'PP')}.</p>;
        }; 

        const timeSlots = [
            '09:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '13:00 PM',
            '14:00 PM',
            '15:00 PM'
        ];
        
        const handleTimeSelection = (time) => {
            setSelectedTime(time);
        };

        /*const handleSubmit = () => {
            const combined = {
                date: selected,
                time: selectedTime
            };

            console.log('Combined Date and Time:', combined);
        }*/

        useEffect(() => {
            axios.get('/collectors')
                .then((response) => {
                    setCollectors(response.data);
                })
                .catch((error) => {
                    console.error('Error retrieving collectors:', error);
                });
        }, []);

    return (
        <div className='flex'>
            <div className='basis-[4%] h-[100vh]'>
                <SideBar />
            </div>
        <div className='basis-[96%]'>
            <Dashboard />
            <div className='py-[25px] px-[10px] pl-[20px] z-0 h-[90vh]'>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">   
                    <div className="bg-paleGreen rounded-xl">
                        <h1 className='pt-10 pl-10 text-2xl font-bold'>Select a date:</h1>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            className='flex justify-center items-center'
                        />
                    </div>
                    <div className="bg-darkGreen rounded-xl text-center">
                        <h1 className="pt-10 text-2xl font-bold text-white pb-4">Select a time:</h1>
                        <ul className="flex flex-col justify-center items-center space-y-4 text-black">
                            {timeSlots.map((timeSlot, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer bg-white text-lg rounded-md h-8 px-2 ${
                                        selectedTime === timeSlot ? 'text-primaryGreen font-bold text-lg border-2 border-primaryGreen' : ''
                                    }`}
                                    onClick={() => handleTimeSelection(timeSlot)}
                                >
                                    {timeSlot}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-xl text-center p-10">
                        <h1 
                            className="text-2xl font-bold text-black py-4 px-6"
                        >
                            Assign Collector
                        </h1>
                        <h2 
                            className="text-lg text-gray-600 pb-4 px-6"
                        >
                            Select a Collector:
                        </h2>
                        <select 
                            className="w-[80%] block py-2 px-4 rounded-md ml-[88px] border border-black mb-4"
                        >
                            {collectors.map((collector) => (
                                <li key={collector._id}>{collector.name}</li>
                            ))}
                        </select>
                    </div>
                    <div className="bg-gray-400 rounded-xl">
                    </div>
                </div>
            </div>    
        </div>
        </div>
    );
};

export default CollectionScheduleHome;