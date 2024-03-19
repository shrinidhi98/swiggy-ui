import React from 'react';
import googlePlay from './img/googlePlay.png';
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='bg-slate-300 py-20 px-4 text-center w-full'>
                <div className="min-h-full flex flex-col justify-center">
                    <h1 className='font-bold text-xl md:text-2xl mb-4'>For a better experience, download the Swiggy app now</h1>
                    <div className='flex justify-center space-x-4'>
                        <img src={googlePlay} alt="get it on google play" className="rounded-md" style={{ width: '150px', height: '75px' }} />
                        <img src={googlePlay} alt="get it on google play" className="rounded-md" style={{ width: '150px', height: '75px' }} />
                    </div>
                </div>
            </div>
            <div className='bg-black text-white w-full py-4 px-2 md:px-8 text-center'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:ml-5 md:mr-10 mb-4 md:mb-0'>
                        <p className='font-bold'>Swiggy</p>
                        <div className='flex text-gray-500'>
                            <PiCopyright />
                            <p>2023 Bundl Technologies Pvt. Ltd</p>
                        </div>
                    </div>
                    <div className='md:ml-10 md:mr-10 mb-4 md:mb-0'>
                        <p className='font-bold'>Company</p>
                        <div className='text-gray-500'>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Team</p>
                            <p>Swiggy One</p>
                            <p>Swiggy Instamart</p>
                            <p>Swiggy Genie</p>
                        </div>
                    </div>
                    <div className='md:ml-10 md:mr-10 mb-4 md:mb-0'>
                        <p className='font-bold'>Contact Us</p>
                        <div className='text-gray-500'>
                            <p>Help & Support</p>
                            <p>Partner with us</p>
                            <p>Ride with us</p>
                        </div>
                        <div >
                            <p className='font-bold'>Legal</p>
                            <div className='text-gray-500'>
                                <p>Terms & Condition</p>
                                <p>Cookie Policy</p>
                                <p>Private Policy</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-10 md:mr-5'>
                        <p className='font-bold'>We deliver to:</p>
                        <div className='text-gray-500'>
                            <p>Bangalore</p>
                            <p>Gurgaon</p>
                            <p>Delhi</p>
                            <p>Mumbai</p>
                            <p>Pune</p>
                            <p>Swiggy Genie</p>
                            <select className="appearance-none w-full bg-black border border-white text-gray-500 rounded leading-tight focus:outline-none focus:bg-black">
                                <option>Option 1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
