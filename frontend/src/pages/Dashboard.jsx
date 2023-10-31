import React from "react";
import { FaBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Dashboard = () => {
    return(
        <>
            <div className="flex items-center justify-between h-[70px] shadow-lg shadow-darkGreen px-[25px]">
                <div className='p-7'>
                    <h1 className='text-white text-2xl font-semibold'>Admin Dashboard</h1>
                </div>
                <div className="flex items-center gap-[15px] relative">
                    <div className="border-r-[1px] pr-[25px]">
                        <p className="text-white">Dwayne</p>
                    </div>
                    <div className="flex items-center gap-[25px] flex items-center justify-center relative">
                        <FaCircleUser className="text-white text-3xl cursor-pointer" />
                        <div>
                            <FaBell className="text-white text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;