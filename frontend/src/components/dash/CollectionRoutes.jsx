import React, { useState, useEffect } from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import Map from './Map2';
import axios from 'axios';

const CollectionRoutes = () => {
    const [routes, setRoutes] = useState([]);
    const [selectedRoute, setSelectedRoute] = useState(null);

    useEffect(() => {
        axios.get('/collection-routes')
            .then((response) => {
                setRoutes(response.data);
            })
            .catch((error) => {
                console.error('Error retrieving routes:', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRouteClick = (route) => {
        setSelectedRoute(route);
    };

    return (
        <div className='flex'>
            <div className='basis-[4%] h-[100vh] z-40'>
                <SideBar />
            </div>
            <div className='basis-[96%]'>
                <Dashboard />
                <div className='pt-[35px] px-[10px] z-0 h-[88vh]'>
                    <div className='grid grid-cols-2 h-full m-2 gap-6'>
                        <div className='bg-white rounded-2xl border-2 border-black border-dashed p-4'>
                            <h1 className='flex justify-center items-center text-3xl mt-6 mb-4 underline underline-offset-4'>
                                Routes
                            </h1>
                            {routes.length > 0 ? (
                                <div className='flex justify-center items-center bg-white text-black'>
                                    <ul className='overflow-y-auto'>
                                        {routes.map((route, index) => (
                                            <li 
                                                key={index} 
                                                onClick={() => handleRouteClick(route)}
                                            >
                                                <div className='bg-white rounded-xl border-2 border-black p-4 w-auto h-auto hover:bg-primaryGreen hover:text-white cursor-pointer my-4 text-center'>
                                                    <h1 className='text-lg text-center font-bold'>{route.number}</h1>
                                                    <p>
                                                        <span className='text-lg capitalize font-bold'>Start:{" "}</span><br />
                                                        {route.startAddress && route.startAddress.lat !== undefined ? route.startAddress.lat : ""},{" "}
                                                        {route.startAddress && route.startAddress.lng !== undefined ? route.startAddress.lng : ""}
                                                    </p>
                                                    <p>
                                                        <span className='text-lg capitalize font-bold'>End:{" "}</span><br />
                                                        {route.endAddress && route.endAddress.lat !== undefined ? route.endAddress.lat : ""},{" "}
                                                        {route.endAddress && route.endAddress.lng !== undefined ? route.endAddress.lng : ""}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>No routes available.</p>
                            )}
                        </div>
                        <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                            <Map selectedRoute={selectedRoute} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionRoutes;