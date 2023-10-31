import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/eco_logo.png";
import PayPalBtn from '../../utils/PayPalBtn';
import { toast } from "react-hot-toast";

const SignUp = () => {
    const [subscription, setSubscription] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const navigate = useNavigate();
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
                toast.success("Registration successfull. Welcome!")
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="min-h-screen pt-20 bg-black">
            <div className="container mx-auto">
                <Link to="/">
                    <button className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom">Back to Home</button>
                </Link> 
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-20 bg-no-repeat bg-cover bg-center">
                        <h1 
                            className="text-black text-4xl mb-8"
                        >
                            Choose A Plan
                        </h1>
                        <div className="flex flex-col space-y-4 w-full">
                            <label className={`inline-flex items-center bg-gradient-to-r from-black to-primaryGreen text-white rounded-lg p-3 w-full justify-start outline-dotted outline-darkGreen ${subscription === 'option1' ? 'scale-105 duration-300' : ''}`}>
                                <input 
                                    type="radio" 
                                    className="form-radio" 
                                    name="subscription" 
                                    value="option1" 
                                    checked={subscription === 'option1'} 
                                    onChange={(e) => setSubscription(e.target.value)} 
                                />
                                <span className="ml-4 text-2xl">Free</span>
                                <span className='ml-auto text-xl'>R0/mo</span>
                            </label>
                            <label className={`inline-flex items-center bg-gradient-to-r from-black to-primaryGreen text-white rounded-lg p-3 w-full justify-start outline-dotted outline-darkGreen ${subscription === 'option2' ? 'scale-105 duration-300' : ''}`}>
                                <input 
                                    type="radio" 
                                    className="form-radio" 
                                    name="subscription" 
                                    value="option2" 
                                    checked={subscription === 'option2'} 
                                    onChange={(e) => setSubscription(e.target.value)} 
                                />
                                <span className="ml-4 text-2xl">Premium</span>
                                <span className='ml-auto text-xl'>R499/mo</span>
                            </label>
                            <label className={`inline-flex items-center bg-gradient-to-r from-black to-primaryGreen text-white rounded-lg p-3 w-full justify-start outline-dotted outline-darkGreen ${subscription === 'option3' ? 'scale-105 duration-700' : ''}`}>
                                <input 
                                    type="radio" 
                                    className="form-radio" 
                                    name="subscription" 
                                    value="option3" 
                                    checked={subscription === 'option3'} 
                                    onChange={(e) => setSubscription(e.target.value)} 
                                />
                                <span className="ml-4 text-2xl">Enterprise</span>
                                <span className='ml-auto text-xl'>R1099/mo</span>
                            </label>
                        </div>
                        {/* Subscription end */}
                        {/* Payment start */}
                        <form onSubmit={''}>
                            <div className='mt-10 flex justify-center items-center'>
                                <h2 className="text-lg font-bold mb-2 mr-2">Add payment method:</h2>
                                <select 
                                    className="mb-2 text-center" 
                                    name="paymentMethod" 
                                    value={paymentMethod} 
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <option value="">Choose one</option>
                                    <option value="creditCard">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    {/* Add other payment methods as needed*/}
                                </select>
                            </div>

                            {paymentMethod === "creditCard" }
                            {paymentMethod === "paypal" && 
                                <PayPalBtn
                                    amount={''}
                                />
                            }

                            <button 
                                type="submit"
                                className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mx-auto mt-10'
                            >
                                Submit Payment
                            </button>
                        </form>
                        {/* Payment end */}
                        {/* Register form start */}
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
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
                    </form>
                    </div>
                    {/* Register form end */}
                </div>
            </div>
        </div>
    );
}

export default SignUp;