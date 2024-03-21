import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Location = ({ isLocationClicked, setIsLocationClicked }: { isLocationClicked: any, setIsLocationClicked: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setIsLocationClicked(!isLocationClicked);
  };

  return (
    <>
      {isOpen && (
                <div className="fixed top-0 left-0 h-full md:w-2/5 bg-white z-50 flex justify-items-center flex-col">
                    <div className='ml-10 w-2/3'>
                        <div>
                            <button onClick={handleClose} className="top-5 left-10 text-gray-500"><IoCloseOutline className='h-10 w-10' /></button>
                        </div>
                        <div className="flex items-center border border-gray-400 p-2 mt-5">
                            <input
                                id='search'
                                type="text"
                                placeholder="Search for area"
                                className="outline-none px-2 py-1"
                                // value={phoneNumber}
                                // onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}
    </>
  );
};

export default Location;
