import React from 'react';

const Hero = () => {
    return (
        <section id="home">
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-5xl sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-3xl font-thin text-white sm:text-6xl mb-10">
                            Innovating Waste Management for a <span className='text-gradient'>sustainable tomorrow.</span>
                        </h1>
                        <p className="mt-6 text-lg font-thin leading-8 text-white text-center">
                            We believe that every action counts when it comes to preserving our environment and building a better future. With our innovative solutions, cutting-edge technologies, and a passion for sustainability, we are committed to minimizing waste, optimizing resource utilization, and promoting circular economy principles.
                        </p>
                        <div className="mt-16 flex items-center justify-center gap-x-6">
                            <a href="/">
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen"
                                >
                                    Get Started
                                </button>
                            </a>
                            <a
                                href="/"
                                className="text-sm font-regular underline leading-6 text-white"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Hero;