import React from 'react';
//import Dash from "../../assets/dash.png";

const About = () => {
    return (
        <section id="about" className='mb-40 pt-40 mt-40 max-w-full'>
            <div className="relative md:flex md:items-center text-center">
                <div className="w-full p-4 flex flex-wrap flex-col justify-center">
                    <h2 
                        className="text-5xl font-thin max-w-full mb-10 text-white"
                    >
                        Redefining <span className='text-gradient'>Waste Management</span>
                    </h2>
                    <p 
                        className="text-white font-thin text-sm md:text-md lg:text-lg ml-0 leading-8 text-center max-w-full"
                    >
                        At EcoTrack Solutions, we are on a mission to build a sustainable future by revolutionizing waste management practices. We understand the critical importance of environmental preservation and the need for responsible waste management to combat the global challenges we face. With a focus on innovation, we strive to develop cutting-edge solutions that minimize waste, optimize resource utilization, and promote a circular economy. 
                        <br /><br />
                        Our team of passionate experts is dedicated to creating sustainable waste management systems that reduce environmental impact while fostering economic growth. Through collaborative partnerships and a commitment to continuous improvement, we are proud to have already achieved significant milestones in waste reduction and environmental stewardship. Join us as we pave the way towards a cleaner, greener, and more sustainable future for generations to come.
                    </p>
                </div>
                {/*<img 
                    className="flex-wrap lg:flex mx-auto lg:absolute relative top-0 right-0 md:pl-44 ml-24 transform-gpu pb-40 pt-20 md:pt-0 md:scale-125 w-full" 
                    src={Dash}
                    alt="About us" 
                />*/}   
            </div>
            <div 
                className='flex justify-center items-center text-white bg-darkGreen h-[400px] rounded-xl p-10 mt-80 mx-auto w-full'
            >
                <h1 className='text-center text-3xl font-light max-w-3xl'>
                    Our goal is to empower individuals and communities to actively participate in waste reduction and environmental sustainability.
                </h1>
            </div>      
        </section>
    )
}

export default About;