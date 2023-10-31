import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerRef = useRef(null);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#subscriptions', label: 'Subscriptions' },
        { href: '#contact', label: 'Contact Us' },
    ]
    
    const handleNavItemClick = (e) => {
        e.preventDefault();
      
        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;
      
        window.scrollTo({
          top: location - 160,
          left: 0,
          behavior: 'smooth',
        });
    };
    
    const stickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (headerRef.current !== null) {
                if (
                    document.body.scrollTop > 80 ||
                    document.documentElement.scrollTop > 80
                ) {
                    headerRef.current.classList.add("sticky__header");
                } else {
                    headerRef.current.classList.remove("sticky__header");
                }
            }
        });
    };
    
    useEffect(() => {
        stickyHeader();
        return window.removeEventListener("scroll", stickyHeader);
    }, []);

    return (
        <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center bg-black'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* logo start */}
                    <div className="flex items-center gap-[10]">
                        <div className="leading-[20px] pl-2">
                            <a href="/">
                                <h2 className="text-2xl text-white font-[600]">
                                    EcoTrack <span className='text-primaryGreen'>Solutions</span>
                                </h2>
                            </a>
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
                        <Link to="/signup">
                            <button
                                className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen'
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    {/* button end */}
                </div>
            </div>
        </header>
    )
};

export default Header;