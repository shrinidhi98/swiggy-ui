import React from 'react';
import googlePlay from './img/googlePlay.png';
import { PiCopyright } from "react-icons/pi";


const Footer = () => {
    return (
        <div>
            <div className='bg-slate-300 place-content-center'>
                <div className='flex justify-center mx-auto'>
                    <div className='w-3/5 mt-8 mb-5 flex-1 place-content-center justify-center'>
                        <h1 className='font-bold text-center text-2xl'>For better experience, download the Swiggy app now</h1>
                    </div>
                    <div className='w-3/5 mt-5 mb-5 flex-1 inline-flex justify-center mx-auto'>
                        <img src={googlePlay} alt="get it on google play" className="rounded-md" style={{ width: '200px', height: '100px' }} />
                        <img src={googlePlay} alt="get it on google play" className="rounded-md" style={{ width: '200px', height: '100px' }} />
                    </div>

                </div>
            </div>
            <div className='bg-black text-white flex justify-center items-center'>
                <div className='flex text-white mt-7'>
                    <div className='ml-5 mr-5'>
                        <p className='font-bold'>Swiggy</p>
                        <div className='flex text-gray-500'>
                            <PiCopyright />
                            <p>2023 Bundl Technologies Pvt. Ltd</p>
                        </div>
                    </div>
                    <div className='ml-5 mr-5'>
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
                    <div className='ml-5 flex mr-5'>
                        <div >
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
                    </div>
                    <div className='ml-5 mr-5'>
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

export default Footer
