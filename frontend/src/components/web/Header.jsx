import React from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact Us' },
]

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center bg-black'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                {/* logo start */}
                <div className="flex items-center gap-[10]">
                    <div className="leading-[20px] pl-2">
                        <h2 className="text-2xl text-white font-[600]">
                            EcoTrack <span className='text-primaryGreen'>Solutions</span>
                        </h2>
                    </div>
                </div>
                {/* logo end */}
                {/* nav start */}
                <ul className='flex-grow flex justify-center items-center space-x-8'>
                    {navLinks.map((item) => {
                        return <li key={item.href}>
                            <a 
                                onClick={''}
                                href={item.href}
                                className='text-white hover:text-primaryGreen font-[600]'
                            >
                                {item.label}
                            </a>
                        </li>
                    })}
                </ul>
                {/* nav end */}
                {/* button start */}
                <div className='border border-primaryGreen'>
                    <button className='text-white'>
                        Sign Up
                    </button>
                </div>
                {/* button end */}
            </div>
        </div>
    </header>
  )
};

export default Header;