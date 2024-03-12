import React, { useEffect, useState, useContext } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useAuth } from "./context/AuthProvider";


const SignIn = ({ isSigninClicked, setIsSigninClicked,}: 
                    { isSigninClicked: any, setIsSigninClicked: any}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [otp, setOTP] = useState("");
    const [generatedOTP, setGeneratedOTP] = useState("");

    // const { login } = useAuth();
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleClose = () => {
        setIsOpen(false);
        setIsSigninClicked(!isSigninClicked);
    };

    const generateOTP = () => {
        // Generate a random 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000);
        console.log("otp :"+otp);
        setGeneratedOTP(otp.toString());
    };    

    const handleLogin = () => {
        const numericRegex = /^[0-9]+$/;
        if (phoneNumber.length === 10 && numericRegex.test(phoneNumber)) {
            setIsValidPhone(true);
            generateOTP();
        } else {
            window.alert("Invalid Phone Number");
        }
    }
    

    const handleOTP = () => {
        if (otp === generatedOTP) {
            window.alert("logged in");
            setIsLoggedIn(true)


        } else {
            window.alert("Invalid OTP");
        }
    }


    return (
        <>
            {isOpen && (
                <div className="fixed top-0 right-0 h-full w-2/5 bg-white z-50 flex justify-items-center flex-col">
                    <div className='ml-10 w-2/3'>
                        <div>
                            <button onClick={handleClose} className="top-5 left-10 text-gray-500"><IoCloseOutline className='h-10 w-10' /></button>
                        </div>
                        <div className="w-full items-center mt-5">
                            <h1 className="mb-5 font-bold text-2xl">Login</h1>
                            {/* Add your login form here */}
                        </div>
                        <div className="flex items-center border border-gray-400 p-2">
                            <input
                                id='search'
                                type="text"
                                placeholder="Phone Number"
                                className="outline-none px-2 py-1"
                                value={phoneNumber}
                                pattern="[0-9]*"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        {
                            isValidPhone &&
                            <div className="flex items-center border border-gray-400 p-2">
                                <input
                                    id='search'
                                    type="text"
                                    placeholder="OTP"
                                    value={otp}
                                    pattern="[0-9]*"
                                    className="outline-none px-2 py-1" 
                                    onChange={(e) => setOTP(e.target.value)}   
                                />
                            </div>
                        }
                        {
                            !isValidPhone ? 
                                (
                                    <div className='mt-5 w-full'>
                                        <button className='bg-orange-500 text-white py-1 px-2 w-full' onClick={() => { handleLogin() }}>
                                            <p>Login</p>
                                        </button>
                                    </div>
                                ) : (
                                    <div className='mt-5 w-full'>
                                        <button className='bg-orange-500 text-white py-1 px-2 w-full' onClick={() => { handleOTP() }}>
                                            <p>Verify OTP</p>
                                        </button>
                                    </div>
                                )
                        }
                        <div className='text-xs mt-1'>
                            <p>
                                By clicking on Login,
                            </p>
                            <p className='font-bold'>
                                    I accept the Terms & Conditions & Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignIn
