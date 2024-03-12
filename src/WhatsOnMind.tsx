import React, { useRef, useState } from 'react';
import food1 from './img/momo.png';
import food2 from './img/meals.png';
import food3 from './img/puttu.png';
import food4 from './img/vada.png';
import food5 from './img/briyani.png';
import food6 from './img/pulav.png';
import food7 from './img/chicken.png';
import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from "react-icons/pi";

const WhatsOnMind = () => {
    const images = [
        { name: 'Momo', src: food1 },
        { name: 'Meals', src: food2 },
        { name: 'Puttu', src: food3 },
        { name: 'Vada', src: food4 },
        { name: 'Briyani', src: food5 },
        { name: 'Pulav', src: food6 },
        { name: 'Chicken', src: food7 },
        { name: 'Momo', src: food1 },
        { name: 'Meals', src: food2 },
        { name: 'Puttu', src: food3 },
        { name: 'Vada', src: food4 },
        { name: 'Briyani', src: food5 },
        { name: 'Pulav', src: food6 },
        { name: 'Chicken', src: food7 },
        { name: 'Momo', src: food1 },
        { name: 'Meals', src: food2 },
        { name: 'Puttu', src: food3 },
        { name: 'Vada', src: food4 }
        // Add more images as needed
    ];
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100;
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100;
        }
    };
    return (
        <div>
            <div className="flex">
                <h2 className="justify-start font-bold text-2xl w-full">What's on your mind?</h2>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollLeft}><PiArrowCircleLeftLight size={40} /></button>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollRight}><PiArrowCircleRightLight size={40} /></button>
            </div>
            <div className="mt-10 flex overflow-x-auto " style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} ref={scrollRef}>
                {images.map((image, index) => (
                    <div key={index} className="flex-col items-center ml-7 inline-block">
                        <img src={image.src} alt={image.name} className="h-10 w-10 mb-2" />
                        <div className="font-bold text-center text-sm text-slate-600">{image.name}</div>
                    </div>
                ))}
            </div>
            {/* <button className="absolute top-0 bottom-0 right-0 flex items-center px-2 bg-gray-200 hover:bg-gray-300"><FaChevronRight /></button> */}
        </div>
    )
}

export default WhatsOnMind
