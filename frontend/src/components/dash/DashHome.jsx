import React from 'react'
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
// import { Outlet } from 'react-router-dom';
import Main from './Main';

const DashHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[5%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[95%]'>
        <Dashboard />
        <div>
          {/*<Outlet></Outlet>*/}
          <Main />
        </div>
      </div>
    </div>
  )
};

export default DashHome;