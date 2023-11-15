import React from "react";
import { FaBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from 'react';
import { UserContext } from "../context/userContext";

const Dashboard = () => {
    const {user} = useContext(UserContext);

    return(
        <>
            <div className="flex items-center justify-between h-[70px] shadow-md shadow-darkGreen px-[25px]">
                <div className='p-7'>
                    <h1 className='text-white text-2xl font-semibold'>Admin Dashboard</h1>
                </div>
                <div className="flex items-center gap-[15px] relative">
                    <div className="border-r-[1px] pr-[25px]">
                        {!!user && (<h2 className="text-white text-lg cursor-pointer">{user.name}</h2>)}
                    </div>
                    <div className="gap-[25px] flex items-center justify-center relative">
                    {
                        user && user.avatar
                        ? <img src={user.avatar} alt="User Avatar" className="cursor-pointer rounded-full w-[50px] h-[50px] object-cover" />
                        : <FaCircleUser className="text-white text-3xl cursor-pointer" />
                    }
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