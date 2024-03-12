import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline, IoPersonOutline } from "react-icons/io5";
import { useAuth} from './context/AuthProvider';

const Navbar = ({ isLocationClicked, setIsLocationClicked, isSigninClicked, setIsSigninClicked }: 
                    { isLocationClicked: any, setIsLocationClicked: any, isSigninClicked: any, setIsSigninClicked:any}) => {

    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <div className="flex p-4 shadow-lg shadow-gray-400 justify-around">
                <div className="justify-start">
                    <nav>
                        <ul className='flex'>
                            <Link to='/'>
                                <li className="flex items-center mr-10">
                                    <Logo className="h-8 w-8 mr-2" />
                                </li>
                            </Link>
                            <div role='button' onClick={() => setIsLocationClicked(!isLocationClicked)}>
                                <li className="flex items-center"><p className='font-bold'>Location</p></li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="justify-end">
                    <nav>
                        <ul className="flex">
                            <Link to='/search'>
                                <li className="flex items-center mr-10">
                                    <FaSearch className="text-gray-600 mr-1" /> Search
                                </li>
                            </Link>
                            <li className="flex items-center mr-10">
                                <TbDiscount2 className="text-gray-600 mr-1" /> Offers
                            </li>
                            <li className="flex items-center mr-10">
                                <IoHelpBuoyOutline className="text-gray-600 mr-1" /> Help
                            </li>
                            {isLoggedIn ?
                                <li className="flex items-center mr-10" onClick={()=>{setIsSigninClicked(!isSigninClicked)}} role='button'
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <IoPersonOutline className="text-gray-600 mr-1" /> Shri
                                    {isDropdownOpen && (
                                        <div className="absolute bg-white border border-gray-200 py-2 mt-10 rounded-md">
                                            <ul>
                                                <li className="hover:bg-gray-100 px-4 py-2">Profile</li>
                                                <li className="hover:bg-gray-100 px-4 py-2" onClick={()=>{setIsLoggedIn(false)}}>Logout</li>
                                            </ul>
                                        </div>
                                    )}
                                </li> : 
                                <li className="flex items-center mr-10" onClick={()=>{setIsSigninClicked(!isSigninClicked)}} role='button'>
                                <IoPersonOutline className="text-gray-600 mr-1" /> Sign In
                                </li>
                            }
                            <li className="flex items-center mr-10">
                                <FaShoppingCart className="text-gray-600 mr-1" /> Cart
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;

export { };
