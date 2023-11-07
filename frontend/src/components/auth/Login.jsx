import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import X from "../../assets/x-mark.png";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from '../../context/userContext';
import Cookies from "js-cookie";

const Login = () => {
    const { setUser } = useContext(UserContext);  // use the `setUser` function from the `UserContext`
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = data;
    
        try {
            const response = await axios.post("/login", { email, password });
    
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                // Login was successful, now fetch the profile
                Cookies.set('authToken', response.data.token);
                const profileResponse = await axios.get("/profile", { withCredentials: true });
    
                if (profileResponse.data) {
                    // Set user data in the context
                    setUser(profileResponse.data);
                    toast.success(`Login successful. Welcome back ${profileResponse.data.name}`);
                    navigate("/dashboard-b");
                } else {
                    console.error('Failed to get profile');
                    toast.error('Failed to get profile');
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const auth = async () => {
    //     const response = await fetch("http://127.0.0.1:3000/request", {
    //         method: "post",
    //     })
    //     const data = await response.json();
    //     navigate(data.url);
    // }

    return (
        <div className="min-h-screen pt-28 bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <Link to="/">
                            <img src={X} alt="exit" className='h-auto w-4 absolute top-4 left-4 hover:scale-75 duration-300' />
                        </Link> 
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
                            <div className="mt-5 flex justify-center">
                                <Link to="/forgot">
                                <p className="mb-0 mt-2 pt-1 text-xs font-regular underline">
                                    Forgot Password {" "}
                                </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom"
                                >
                                    Log In
                                </button>
                            </div>
                            <div className="mt-2 flex justify-center">
                                <p className="mb-0 mt-2 pt-1 text-xs font-regular">
                                    Don't have an account yet? {" "}
                                <Link
                                    to="/signup"
                                    className="text-blue-700 underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    Register
                                </Link>
                                </p>
                            </div>
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400"
                            >
                                <p
                                    className="mx-4 mb-0 text-center font-semibold text-black"
                                >
                                    OR
                                </p>
                            </div>
                            <div className="px-6 sm:px-0 max-w-sm mx-auto mt-6">
                                <button 
                                    type="button" 
                                    className="text-white w-full  bg-[#000] hover:scale-105 duration-300 focus:ring-4 focus:outline-none focus:ring-primaryGreen/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                                >
                                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                        Continue with Google
                                    <div></div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-auto h-full object-cover' src={Eco} alt="Eco" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;