import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Location = ({ isLocationClicked, setIsLocationClicked}: {isLocationClicked :any,setIsLocationClicked:any}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setIsLocationClicked(!isLocationClicked);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-2/5 bg-white z-50">
          <button onClick={handleClose} className="absolute top-5 left-10 text-gray-500"><IoCloseOutline /></button>
          <div className='justify-center items-center'>
            <input 
                id='address'
                type='text'
                placeholder='Search for area, street name'
                required
                value={address}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Location;
