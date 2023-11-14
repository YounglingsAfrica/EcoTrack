import React from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import Feedback from './Feedback';

const FeedbackHome = () => {
  return (
    <div className='flex'>
      <div className='basis-[5%] h-[100vh]'>
        <SideBar />
      </div>
      <div className='basis-[95%]'>
        <Dashboard />
        <div >
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default FeedbackHome;
