import axios from 'axios';
import React, { useState } from 'react';
import { emailRegex } from '../../utils/emailRegex';
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const contactFormSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const {name, email, message} = data;

        if (isEmailValid) {
            await axios
            .post("/email", {
                name, 
                email, 
                message
            }).then(() => {
                setData({
                    name: "",
                    email: "",
                    message: ""
                });
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
        }
        toast.success("Submitted! We'll get back to you very soon.")
    }

    return (
        <section id='contact' className='mb-40 max-w-full'>
            <h1 className='text-center text-7xl font-thin max-w-full mb-6 text-gradient2 mt-20 pb-10'>
                Contact Us
            </h1>
            <div className='flex justify-center flex-wrap w-full'>
                <div className='w-full lg:w-1/2 flex-wrap'>
                    <div className='flex justify-start items-center flex-col'>
                        <h2 
                            className='max-w-md leading-snug text-center text-5xl font-semibold mb-20 text-white mt-20 pb-6'
                        >
                            Let's discuss something cool together
                        </h2>
                        <div className='space-y-10'>
                            <p 
                                className='flex justify-center items-center text-white font-medium text-lg w-[300px] h-[50px]'
                            >
                                <svg className='w-6 mr-2 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" fill="rgba(46,204,64,1)"></path></svg>info@ecotrack.co.za
                            </p>
                            <p 
                                className='flex justify-center items-center text-black text-lg font-medium rounded-xl border-2 border-primaryGreen bg-primaryGreen50 w-[300px] h-[50px]'
                            >
                                <svg className='w-6 mr-2 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" fill="rgba(46,204,64,1)"></path></svg>+27 21 708 5123 
                            </p>
                            <p 
                                className='flex justify-center items-center text-white font-medium text-lg w-[300px] h-[50px]'
                            >
                                <svg className='w-6 mr-2 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" fill="rgba(46,204,64,1)"></path></svg>123 Street, 456 House
                            </p>
                        </div>
                    </div> 
                </div>
                <div className='w-1/2 flex flex-wrap justify-center pt-10 md:pt-0'>
                    <div className='bg-[#F0F0F0] w-[600px] h-[700px] rounded-3xl p-6 px-14'>
                        <form onSubmit={contactFormSubmit} className='grid'>
                            <h2 className='leading-snug text-center text-5xl font-bold text-black p-10 mb-10'>
                                Say Hello
                            </h2>                    
                            <input
                                className='border-b-4 border-gray-400 bg-[#F0F0F0] w-1/3 mb-12 focus:outline-none focus:border-primaryGreen pb-5'
                                type="text"
                                name='name'
                                placeholder='Your name'
                                value={data.name}
                                onChange={(e) => setData({...data, name: e.target.value})}
                                required
                            />
                            <input
                                className='border-b-4 border-gray-400 bg-[#F0F0F0] w-2/3 focus:outline-none focus:border-primaryGreen pb-5'
                                type="email"
                                name='email' 
                                placeholder='Your email'
                                value={data.email}
                                onChange={(e) => {
                                    const enteredEmail = e.target.value;
                                    setData({...data, email: enteredEmail});
                                    setIsEmailValid(emailRegex.test(enteredEmail));
                                }}
                                required
                            />
                            {!isEmailValid && data.email.length > 0 && (
                                <p className="text-red-600 text-[14px] mt-0">Please enter a valid email.</p>
                            )}
                            <textarea
                                className='border-b-4 border-gray-400 bg-[#F0F0F0] mt-10 mb-20 focus:outline-none focus:border-primaryGreen resize-none'
                                type="text" 
                                name='message'
                                placeholder='Your message'
                                value={data.message}
                                onChange={(e) => setData({...data, message: e.target.value})}
                                required
                            />
                            <button
                                disabled={isLoading}
                                type='submit' 
                                className='flex items-center text-center justify-center px-6 w-56 h-14 text-white rounded-xl bg-gradient-to-r from-gray-900 to-primaryGreen mt-0 lg:mt-4 mx-auto shadow-right-bottom transform scale-90 md:scale-100'
                            >
                                <svg 
                                    className='h-auto w-6 mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z" fill="rgba(255,255,255,1)"></path>
                                </svg>
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
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;