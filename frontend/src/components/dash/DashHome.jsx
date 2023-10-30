import React from 'react'
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';

const DashHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[88%]'>
        <Dashboard />
      </div>
    </div>
  )
};

export default DashHome;