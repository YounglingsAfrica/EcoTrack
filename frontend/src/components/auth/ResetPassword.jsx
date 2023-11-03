import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import X from "../../assets/x-mark.png";
import axios from "axios";
import { toast } from "react-hot-toast";

const Reset = () => {
    const navigate = useNavigate()
    const {id, token} = useParams()
    const [data, setData] = useState({
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {password} = data;
        try {
            const res = await axios.post(`/reset/${id}/${token}`, {
                password
            })
            if (res.data.Status === "Success") {
                toast.success("Your password has been successfully reset");
                navigate("/login");
            } else {
                toast.error("There was an issue with your request.");
            }
        } catch (error) {
            toast.error(error.message)
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
                        <h2 className="text-3xl mb-6 mt-6 text-center">Reset Your Password</h2>
                        <p className="mb-4 text-center text-sm">
                            Please enter your new password:
                        </p>
                        <form onSubmit={handleSubmit}>
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
                                    Reset Password
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

export default Reset;