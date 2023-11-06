import React from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

const Disposal = () => {
  return (
    <div className='flex'>
      <div className='basis-[5%] h-[100vh] z-40'>
        <SideBar />
      </div>
      <div className='basis-[95%]'>
        <Dashboard />
        <div className='pt-[35px] px-[10px] z-0 h-[90vh]'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Disposal;
