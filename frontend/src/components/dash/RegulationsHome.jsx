import React from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import Regulations from './Regulations';

const RegulationsHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[4%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[96%]'>
        <Dashboard />
        <div>
          <Regulations />
        </div>
      </div>
    </div>
  );
};

export default RegulationsHome;
