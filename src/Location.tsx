import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineGpsFixed } from "react-icons/md";

const Location = ({ isLocationClicked, setIsLocationClicked }: { isLocationClicked: any, setIsLocationClicked: any }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setIsLocationClicked(!isLocationClicked);
  };

  const handleGetGPSLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          setError(error.message);
          console.error('Error getting the location:', error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      console.error('Geolocation is not supported by this browser.');
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full md:w-2/5 bg-white z-50 flex justify-items-center flex-col">
          <div className='ml-10 w-2/3'>
            <div>
              <button onClick={handleClose} className="top-5 left-10 text-gray-500"><IoCloseOutline className='h-10 w-10' /></button>
            </div>
            <div className="items-center border border-gray-400 p-2 mt-5">
              <div className='flex'>
                <MdOutlineGpsFixed size={20} />
                <p className='hover:text-orange-500 px-2 font-bold' onClick={handleGetGPSLocation}>Get Current Loaction</p>
              </div>
              <p className='text-xs'>Using GPS</p>
            </div>
            {error && <p>{error}</p>}
            {latitude && longitude && (
              <p>
                Latitude: {latitude}, <br></br>Longitude: {longitude}
              </p>
            )}
          </div>

        </div>
      )}
    </>
  );
};

export default Location;
