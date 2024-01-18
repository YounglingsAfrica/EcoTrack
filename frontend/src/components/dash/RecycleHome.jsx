import React from 'react';
import Recycle from './Recycle';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';

const RecycleHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[4%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[96%]'>
        <Dashboard />
        <div >
          <Recycle />
        </div>
      </div>
    </div>
  )
}

export default RecycleHome;
