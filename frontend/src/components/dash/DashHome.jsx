import React from 'react'
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';

const DashHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[5%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[95%] border'>
        <Dashboard />
      </div>
    </div>
  )
};

export default DashHome;