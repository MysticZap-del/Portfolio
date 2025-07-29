import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets'; // <-- Add close here
import mylogo  from '../assets/mylogo.png'; // <-- Import your logo

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false); // <-- Add this line

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to={'/'} className='flex items-center gap-2' onClick={() => {
                    setActive('');
                    window.scrollTo(0, 0);
                }}>
                    <img src={mylogo} alt='mylogo' className='w-8 h-8 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Manthan Jain &nbsp; <span className='sm:block hidden'>| Portfolio</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                {/* This below div is for mobile application */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu} // <-- Use toggle state to switch between icons
                        alt='menu'
                        className='w-8 h-8 object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} // <-- Use setToggle here
                        // When the menu is clicked, toggle the state and take us to that page and close itself
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#18181b]/90 backdrop-blur-lg shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl z-30`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;