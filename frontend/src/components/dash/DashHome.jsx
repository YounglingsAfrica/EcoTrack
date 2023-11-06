import React from 'react'
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import Main from './Main';
import 'leaflet/dist/leaflet.css';
import 'tailwindcss/tailwind.css';

const DashHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[5%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[95%]'>
        <Dashboard />
        <div >
          <Main />
        </div>
      </div>
    </div>
  )
};

export default DashHome;