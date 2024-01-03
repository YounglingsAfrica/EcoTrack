import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from "../../redux/slice/addressesSlice";
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";

const Addresses = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const address = useSelector(state => state.address);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        dispatch(setAddress({
            ...address,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/addresses/${user._id}`, address);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // Fetch the user's current address from the server
        axios.get('/address', { withCredentials: true })
        .then(response => {
            setAddress(response.data.address);
            setUser(response.data.user);
        })
        .catch(error => {
            console.error(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex'>
            <div className='basis-[4%] h-[100vh] z-40'>
                <SideBar />
            </div>
            <div className='basis-[96%]'>
                <Dashboard />
                <div className='pt-[35px] px-[10px] z-0 h-[90vh]'>
                    <div className='flex flex-wrap text-center p-8 px-20'>
                        <div className='w-full h-[720px] bg-white rounded-xl text-center border-2 border-black border-dashed p-20 mb-10'>
                            <h1 className='text-center text-2xl mb-10 border-b-2 w-full border-gray-300 pb-5    '>
                                Address
                            </h1>
                            <form 
                                onSubmit={handleSubmit}
                            >
                                <div className='flex flex-col justify-center items-center'>
                                    <textarea
                                        name='streetDetails'
                                        value={address.streetDetails}
                                        onChange={handleChange}
                                        placeholder={user.address.streetDetails || "House/Building Number & Street Name\nSuburb\nCity\nPostal Code"}
                                        className='w-full h-40 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen bg-primaryGreen50 placeholder:text-gray-700 mb-10'
                                    />
                                    <div className='w-full flex justify-between'>
                                        <textarea
                                            name='province'
                                            value={address.province}
                                            onChange={handleChange}
                                            placeholder={user.address.province || "Province"}
                                            className='w-1/2 h-20 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen bg-primaryGreen50 placeholder:text-gray-700 mb-10 mr-2'
                                        />
                                        <textarea
                                            name='country'
                                            value={address.country}
                                            onChange={handleChange}
                                            placeholder={user.address.country || "Country"}
                                            className='w-1/2 h-20 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen bg-primaryGreen50 placeholder:text-gray-700 mb-10 ml-2'
                                        />
                                    </div>
                                    <button 
                                        type='submit'
                                        className="flex items-center justify-center px-6 w-auto h-12 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mt-5"
                                    >
                                        Update 
                                    </button>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses;