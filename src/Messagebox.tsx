import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Messagebox = ({ message,setIsItemAdded }: { message: string,setIsItemAdded:any }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        setIsItemAdded(false);
        console.log("close clicked");
    };

    return (
        <>
            {isOpen && (
                <div className='fixed top-40 w-4/6 mx-auto mt-20 z-50'>
                    <div className='bg-gray-200 items-center px-10 flex'>
                        <div className='mt-8'>
                            <button onClick={handleClose} className="top-5 left-10 text-gray-500"><IoCloseOutline className='h-10 w-10' /></button>
                        </div>
                        <div className="items-center border-gray-400 border-1 p-2 mt-5">
                            <p className='font-bold text-orange-500 text-center'>{message}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Messagebox;
