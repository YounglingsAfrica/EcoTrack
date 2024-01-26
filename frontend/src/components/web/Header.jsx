import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCube } from "react-icons/bi"

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

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
            right: 0,
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const closeMenu = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener('mousedown', closeMenu);
    
        return () => document.removeEventListener('mousedown', closeMenu);
    }, []);

    return (
        <header 
            ref={headerRef} 
            className='max-w-full h-[80px] leading-[80px] flex items-center bg-black'
        >
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* logo start */}
                    <div className="flex items-center gap-[10]">
                        <div className="leading-[20px] pl-2">
                            <a href="/">
                                <BiSolidCube 
                                    className='text-primaryGreen text-4xl font-thin cursor-pointer block sm:hidden' 
                                />
                                <h2 className="text-2xl text-white font-[600] hidden sm:block">
                                    EcoTrack <span className='text-primaryGreen'>Solutions</span>
                                </h2>
                            </a>
                        </div>
                    </div>
                    {/* logo end */}
                    {/* nav start */}
                    <div 
                        ref={menuRef}
                        className={`${
                            isOpen ? 'flex' : 'hidden'
                        } lg:flex relative`}
                    >
                        <ul             
                            className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 right-0 top-0'
                        >
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
                    </div>
                    {/* nav end */}
                    {/* button start */}
                    <div>
                        <Link to="/signup">
                            <button
                                className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-gray-900 to-primaryGreen text-sm md:text-md'
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    {/* button end */}
                    {/* hamburger menu start */}
                    <button 
                        data-collapse-toggle="mobile-menu-2" 
                        type="button" 
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="mobile-menu-2" 
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg 
                            className={`w-6 h-6 ${isOpen ? 'hidden' : ''}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                                clip-rule="evenodd">
                            </path>
                        </svg>
                        <svg 
                            className={`w-6 h-6 ${isOpen ? '' : 'hidden'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                    {/* hamburgermenu end */}
                </div>
            </div>
        </header>
    )
};

export default Header;