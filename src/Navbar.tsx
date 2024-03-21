import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for close icon
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline, IoPersonOutline } from "react-icons/io5";
import { useAuth } from './context/AuthProvider';

const Navbar = ({ isLocationClicked, setIsLocationClicked, isSigninClicked, setIsSigninClicked }:
    { isLocationClicked: any, setIsLocationClicked: any, isSigninClicked: any, setIsSigninClicked: any }) => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 z-50 w-full shadow-lg bg-white'>
            <div className='px-4  sm:px-6 lg:px-8 mx-auto max-w-7xl 2xl:max-w-screen-2xl'>
                <div className='flex items-center justify-between w-full h-16 '>
                    <div className="flex items-center">
                        <Link to='/'>
                            <Logo className="h-8 w-8 mr-2" />
                        </Link>
                        <div className="cursor-pointer" onClick={() => setIsLocationClicked(!isLocationClicked)}>
                            <p className='font-bold'>Location</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* Change icon based on isMobileMenuOpen */}
                        {isMobileMenuOpen ? (
                            <FaTimes className="md:hidden text-gray-600 mr-4" onClick={() => setIsMobileMenuOpen(false)} />
                        ) : (
                            <FaBars className="md:hidden text-gray-600 mr-4" onClick={() => setIsMobileMenuOpen(true)} />
                        )}
                        {
                            isMobileMenuOpen && (
                                <div className='md:hidden absolute top-full right-0 bg-slate-100 shadow-md'>
                                    <Link to='/search' className="block px-4 py-2">
                                        <FaSearch className="text-gray-600 mr-1" /> 
                                    </Link>
                                    <div className="px-4 py-2">
                                        <TbDiscount2 className="text-gray-600 mr-1" />
                                    </div>
                                    <div className="px-4 py-2">
                                        <IoHelpBuoyOutline className="text-gray-600 mr-1" /> 
                                    </div>
                                    <div className='px-4 py-2 relative'>
                                        
                                        {isLoggedIn ?
                                            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                                <IoPersonOutline className="text-gray-600 mr-1" />
                                                {isDropdownOpen &&
                                                    <div className="bg-slate-200 border border-gray-200 rounded-md right-0">
                                                        <ul>
                                                            <li className="hover:bg-gray-100 px-4 py-2">Profile</li>
                                                            <li className="hover:bg-gray-100 px-4 py-2" onClick={() => { setIsLoggedIn(false) }}>Logout</li>
                                                        </ul>
                                                    </div>
                                                }
                                            </div> :
                                            <div onClick={() => setIsSigninClicked(!isSigninClicked)}>
                                                <IoPersonOutline className="text-gray-600 mr-1" />
                                            </div>
                                        }
                                    </div>
                                    <div className="px-4 py-2">
                                        <PiShoppingCartSimpleBold className="text-gray-600 mr-1" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='hidden md:flex items-center'>
                        <Link to='/search' className="mr-6 flex items-center  hover:text-orange-500">
                            <FaSearch className="text-gray-600 mr-1  hover:text-orange-500" /> Search
                        </Link>
                        <div className="mr-6 flex items-center hover:text-orange-500">
                            <TbDiscount2 className="text-gray-600 mr-1  hover:text-orange-500 " /> Offers
                        </div>
                        <div className="mr-6 flex items-center  hover:text-orange-500">
                            <IoHelpBuoyOutline className="text-gray-600 mr-1  hover:text-orange-500" /> Help
                        </div>
                        <div className='mr-6 flex items-center relative cursor-pointer  hover:text-orange-500'>
                            <IoPersonOutline className="text-gray-600 mr-1  hover:text-orange-500" />
                            {isLoggedIn ?
                                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <p>Hi</p>
                                    {isDropdownOpen &&
                                        <div className="absolute bg-slate-300 border border-gray-200 rounded-md">
                                            <ul>
                                                <li className="hover:bg-gray-100 px-4 py-2">Profile</li>
                                                <li className="hover:bg-gray-100 px-4 py-2" onClick={() => { setIsLoggedIn(false) }}>Logout</li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                                :
                                <div onClick={() => setIsSigninClicked(!isSigninClicked)}>
                                    <p>Sign In</p>
                                </div>
                            }
                        </div>
                        <div className="flex items-center  hover:text-orange-500">
                            <PiShoppingCartSimpleBold className="text-gray-600 mr-1  hover:text-orange-500" /> Cart
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
