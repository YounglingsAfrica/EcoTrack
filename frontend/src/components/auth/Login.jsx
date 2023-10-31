import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen pt-20 bg-black">
            <div className="container mx-auto">
                <Link to="/">
                    <button className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom">Back to Home</button>
                </Link> 
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <img src={Logo} alt="Eco" className='mx-auto w-32' />
                        <h2 className="text-3xl mb-4 text-center">Hello Again</h2>
                        <p className="mb-4 text-center">
                            Log into your account, it’ll only take a few seconds.
                        </p>
                        <form onSubmit={loginUser}>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    className="border border-gray-400 bg-red-50 h-10 py-1 px-2 w-80 rounded-xl focus:outline-primaryGreen" 
                                    value={data.email}
                                    required
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </div>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="border border-gray-400 bg-red-50 h-10 py-1 px-2 w-80 rounded-xl focus:outline-primaryGreen" 
                                    value={data.password}
                                    required
                                    onChange={(e) => setData({...data, password: e.target.value})}
                                />
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Register form start */}
                    <div className='w-1/2'>
                        <img className='w-auto h-auto' src={Eco} alt="Eco" />
                    </div>
                    {/* Register form end */}
                </div>
            </div>
        </div>
    )
}

export default Login;