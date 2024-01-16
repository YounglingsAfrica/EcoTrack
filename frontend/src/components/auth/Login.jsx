import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { UserContext } from '../../context/userContext';
import { ThreeDots } from 'react-loader-spinner';
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import X from "../../assets/x-mark.png";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(UserContext);  // use the `setUser` function from the `UserContext`
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();

        setIsLoading(true);

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
                    toast.success(`Login Successful. Welcome Back ${profileResponse.data.name}`);
                    navigate("/dashboard-b");
                } else {
                    console.error('Failed to get profile');
                    toast.error('Failed to get profile');
                }
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

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
                                {isLoading ? (
                                        <ThreeDots 
                                            height="70" 
                                            width="70" 
                                            radius="9"
                                            color="#fff" 
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        /> 
                                ) : (  
                                    'Log in'
                                )}
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