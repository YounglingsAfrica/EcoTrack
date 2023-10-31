import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section id='subscriptions' className='mb-40'>
            <div>
                <h1 className='text-center text-7xl font-thin max-w-full mb-20 text-gradient2 mt-20 pb-10'>
                    Subscriptions
                </h1>
            </div>
            {/* container start */}
            <div className='md:grid grid-cols-3 flex-wrap gap-0'>
                {/* first */}
                <div 
                    className="flex-grow my-auto mr-0 p-2 border-white rounded-2xl bg-white border max-w-sm mx-auto mt-20 text-center divide-y-2 divide-dotted divide-primaryGreen50"
                    style={{boxShadow: "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px"}}
                >
                    <div className="p-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-black">Free</h2>
                        </div>
                        {/* <p className="mt-0.5 text-sm text-gray-500">For established companies</p> */}
                        <p 
                            className="mt-8"
                        >
                            <span className="text-4xl font-bold tracking-tight text-black">R0</span>
                            <span className="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <Link to="/signup"
                            className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-black border-2 border-primaryGreen bg-primaryGreen50 rounded-lg hover:scale-105 duration-300"
                        >   
                            Get started now
                        </Link>
                    </div>
                    <div className="px-6 pt-6 pb-8">
                        <h3 className="text-sm font-medium text-black">A cost-effective solution for small-scale operations.</h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Access to view-only content</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Single user-account</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Regular system updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* second */}
                <div 
                    className="flex-grow p-8 bg-gradient-to-bl from-black to-primaryGreen rounded-2xl max-w-sm mx-auto divide-y-2 divide-dotted divide-white "
                    style={{boxShadow: "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px"}}
                >
                    <div className="p-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-white">Enterprise</h2>
                        </div>
                        {/* <p className="mt-0.5 text-sm text-red-500 text-center">For established companies</p> */}
                        <p className="mt-8 text-center"><span className="text-4xl font-bold tracking-tight text-white outline-4 outline-black">R1099</span>
                            <span className="text-base font-medium text-gray-300">/mo</span>
                        </p>
                        <Link to="/signup"
                            className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-darkGreen50 border-4 border-darkGreen rounded-lg hover:scale-110 duration-300"
                        >   
                            Get started now
                        </Link>
                    </div>
                    <div className="px-6 pt-2 pb-8">
                        <h3 
                            className="text-sm font-medium text-center text-white"
                        >
                            Tailored for large-scale industries and corporations with extensive waste management needs.
                        </h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-black">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-black">Get insights with advanced reporting tools</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-black">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-black">Personalized assistance</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-black">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-black">Add as many users as you need</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-black">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-black">Onboarding, training, and ongoing support</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-black">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-black">Access to every feature</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* third */}
                <div 
                    className="flex-basis[1/3] my-auto ml-0 p-2 border-white bg-white rounded-2xl border divide-y-2 divide-dotted divide-primaryGreen50 max-w-sm mx-auto mt-20"
                    style={{boxShadow: "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px"}}
                >
                    <div className="p-6 text-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-black">Premium</h2>
                        </div>
                        {/* <p className="mt-0.5 text-sm text-black">For established companies</p> */}
                        <p className="mt-8"><span className="text-4xl font-bold tracking-tight text-gray-900">R499</span>
                            <span className="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <Link to="/signup"
                            className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-black border-2 border-primaryGreen bg-primaryGreen50 rounded-lg hover:scale-105 duration-300"
                        >   
                            Get started now
                        </Link>
                    </div>
                    <div className="px-6 pt-6 pb-8">
                        <h3 
                            className="text-sm text-center font-medium text-gray-900"
                        >
                            Step up your waste management game with advanced features.
                        </h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">No restrictions on trackable waste</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Detailed reports and insights</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Be the first to get our latest features</span>
                            </li>
                            <li className="flex space-x-3">
                                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="h-3 w-3 flex-shrink-0 text-green-500">
                                        <path fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">Waste Pickup Scheduling and Reminders</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;