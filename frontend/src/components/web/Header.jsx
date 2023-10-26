import React from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact Us' },
]

const handleNavItemClick = (e) => {
    e.preventDefault();
  
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
  
    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: 'smooth',
    });
  };

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
                <ul className='flex flex-grow justify-center items-center space-x-16 mr-16'>
                    {navLinks.map((item) => {
                        return <li key={item.href}>
                            <a 
                                onClick={handleNavItemClick}
                                href={item.href}
                                className='text-white hover:text-primaryGreen font-[300]'
                            >
                                {item.label}
                            </a>
                        </li>
                    })}
                </ul>
                {/* nav end */}
                {/* button start */}
                <div className=''>
                    <a href="/">
                        <button 
                            className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen'
                        >
                            Sign Up
                        </button>
                    </a>
                </div>
                {/* button end */}
            </div>
        </div>
    </header>
  )
};

export default Header;