import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline, IoPersonOutline } from "react-icons/io5";
import { useAuth } from './context/AuthProvider';

const Navbar = ({ isLocationClicked, setIsLocationClicked, isSigninClicked, setIsSigninClicked }:
    { isLocationClicked: any, setIsLocationClicked: any, isSigninClicked: any, setIsSigninClicked: any }) => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="shadow-lg bg-white p-4 flex justify-around items-center">
            <div className="flex items-center">
                <Link to='/'>
                    <Logo className="h-8 w-8 mr-2" />
                </Link>
                <div className="cursor-pointer" onClick={() => setIsLocationClicked(!isLocationClicked)}>
                    <p className='font-bold'>Location</p>
                </div>
            </div>
            <div className="flex items-center">
                <Link to='/search' className="mr-6 flex items-center">
                    <FaSearch className="text-gray-600 mr-1" /> Search
                </Link>
                <div className="mr-6 flex items-center">
                    <TbDiscount2 className="text-gray-600 mr-1" /> Offers
                </div>
                <div className="mr-6 flex items-center">
                    <IoHelpBuoyOutline className="text-gray-600 mr-1" /> Help
                </div>
                {isLoggedIn ?
                    <div className="relative">
                        <div className="cursor-pointer flex items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <IoPersonOutline className="text-gray-600 mr-1" /> Shri
                        </div>
                        {isDropdownOpen &&
                            <div className="absolute bg-white border border-gray-200 py-2 mt-10 rounded-md">
                                <ul>
                                    <li className="hover:bg-gray-100 px-4 py-2">Profile</li>
                                    <li className="hover:bg-gray-100 px-4 py-2" onClick={() => { setIsLoggedIn(false) }}>Logout</li>
                                </ul>
                            </div>
                        }
                    </div>
                    :
                    <div className="cursor-pointer flex" onClick={() => setIsSigninClicked(!isSigninClicked)}>
                        <IoPersonOutline className="text-gray-600 mr-1" /> Sign In
                    </div>
                }
                <div className="flex items-center">
                    <FaShoppingCart className="text-gray-600 mr-1" /> Cart
                </div>
            </div>
        </div>
    );
}

export default Navbar;
