import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import X from "../../assets/x-mark.png";
import { toast } from "react-hot-toast";

const SignUp = () => {

    // const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();

        const {name, email, password} = data
        try {
            const { data } = await axios.post("/signup", {
                name, email, password
            })
            
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({})
                toast.success("Registration successful. Please verify your account, we've sent you an email. ")
                // navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="min-h-screen pt-32 bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className=''>

                    </div>
                    <div 
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center"
                    >
                        <img 
                            src={Eco} 
                            alt="Eco" 
                            className='w-auto h-full object-cover' 
                        />
                    </div>
                    {/* Sign up form start */}
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <Link to="/">
                            <img src={X} alt="exit" className='h-auto w-4 absolute top-4 right-4 hover:scale-75 duration-300' />
                        </Link> 
                        <img src={Logo} alt="Eco" className='mx-auto w-32' />
                        <h2 className="text-3xl mb-4 text-center">Register Now</h2>
                        <p className="mb-4 text-center">
                            Create your account, it’ll only take a minute.
                        </p>
                        <form onSubmit={registerUser}>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="border border-gray-400 bg-red-50 h-10 py-1 px-2 w-80 rounded-xl focus:outline-primaryGreen"
                                    value={data.name}
                                    onChange={(e) => setData({...data, name: e.target.value})}
                                />
                            </div>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    className="border border-gray-400 bg-red-50 h-10 py-1 px-2 w-80 rounded-xl focus:outline-primaryGreen" 
                                    value={data.email}
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </div>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="border border-gray-400 bg-red-50 h-10 py-1 px-2 w-80 rounded-xl focus:outline-primaryGreen" 
                                    value={data.password}
                                    onChange={(e) => setData({...data, password: e.target.value})}
                                />
                            </div>
                            <div className="mt-5 flex justify-center">
                                <input 
                                    type="checkbox" 
                                    className="border border-gray-400 bg-red-50" 
                                    required
                                />
                                <span className='ml-2'>
                                    I accept the <a href="/" className="text-primaryGreen font-semibold">Terms of Use</a> &  <a href="/" className="text-primaryGreen font-semibold">Privacy Policy</a>. 
                                </span>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <p className="mb-0 mt-2 pt-1 text-xs font-regular">
                                    Already have an account? {" "}
                                <Link
                                    to="/login"
                                    className="text-blue-700 underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    Log in
                                </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* Register form end */}
                </div>
            </div>
        </div>
    );
}

export default SignUp;