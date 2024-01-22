import React from 'react';
import Dash from "../../assets/dash2.png";

const Hero = () => {
    return (
        <section 
            id='home' 
            className="pt-40"
        >
            <div className="px-12 mx-auto max-w-full">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 
                        className="mb-12 text-4xl font-bold leading-none tracking-normal text-white md:text-6xl md:tracking-tight"
                    >
                        Innovating Waste Management for a <span className='text-gradient'>sustainable tomorrow.</span>
                    </h1>
                    <p className="px-0 mb-20 text-lg font-thin text-gray-100 md:text-xl lg:px-24">
                        We believe that every action counts when it comes to preserving our environment and building a better future. With our innovative solutions, cutting-edge technologies, and a passion for sustainability, we are committed to minimizing waste, optimizing resource utilization, and promoting circular economy principles.
                    </p>
                    <div className="mb-4 space-x-0 md:space-x-6 md:mb-8">
                        <a 
                            href="#subscriptions" 
                            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg sm:w-auto sm:mb-0 rounded-lg bg-gradient-to-r from-black to-primaryGreen text-white"
                        >
                            Get Started
                            <svg 
                                className="w-4 h-4 ml-1" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                            </svg>
                        </a>
                        <a 
                            href="#about" 
                            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg sm:w-auto sm:mb-0 rounded-lg bg-gradient-to-r from-primaryGreen to-black text-white"
                        >
                            Learn More
                            <svg 
                                className="w-4 h-4 ml-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                    </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="w-full mx-auto mt-20 text-center">
                    <div className="relative z-0 w-full mt-8">
                        <div className="relative overflow-hidden shadow-2xl">
                            <div className="flex items-center flex-none px-4 bg-darkGreen rounded-b-none h-11 rounded-xl">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                </div>
                            </div>
                            <img 
                                src={Dash} 
                                alt='' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;