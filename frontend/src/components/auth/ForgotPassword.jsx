import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import X from "../../assets/x-mark.png";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { ThreeDots } from "react-loader-spinner";

const Forgot = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        email: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const {email} = data;
        try {
            const res = await axios.post("/forgot", {
                email
            })
            if (res.data.Status === "Success") {
                setIsLoading(false);
                toast.success("Please check your email for further instructions");
                navigate("/login");
            } else {
                toast.error("There was an issue with your request.");
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }

    } 

    return (
        <div className="min-h-screen pt-40 bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <Link to="/">
                            <img src={X} alt="exit" className='h-auto w-4 absolute top-4 left-4 hover:scale-75 duration-300' />
                        </Link> 
                        <img src={Logo} alt="Eco" className='mx-auto w-32' />
                        <h2 className="text-3xl mb-6 mt-6 text-center">Forgot Password?</h2>
                        <p className="mb-4 text-center text-sm">
                            Enter the email associated with your account and we'll send an email with instructions to reset your password
                        </p>
                        <form onSubmit={handleSubmit}>
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
                                <Link
                                    to="/login"
                                    className="text-black underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    <p className="mb-0 mt-2 pt-1 text-xs font-regular">
                                        Wait, I remember my password {" "}
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
                        </form>
                    </div>
                    {/* Register form start */}
                    <div className='w-1/2'>
                        <img className='w-auto h-full object-cover' src={Eco} alt="Eco" />
                    </div>
                    {/* Register form end */}
                </div>
            </div>
        </div>
    )
}

export default Forgot;