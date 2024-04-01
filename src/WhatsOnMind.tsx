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
            <div className="flex py-12 mt-20">
                <h2 className="justify-start font-bold md:text-2xl w-full">What's on your mind?</h2>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollLeft}><PiArrowCircleLeftLight size={30} /></button>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollRight}><PiArrowCircleRightLight size={30} /></button>
            </div>
            <div className="flex overflow-x-auto mt-3 gap-5" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }} ref={scrollRef}>
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col transition" style={{ minWidth: '100px' }}>
                        <img src={image.src} alt={image.name} 
                            className="h-24 w-52 mb-2 rounded-full" />
                        <div className="font-bold text-center text-sm text-slate-600">{image.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhatsOnMind
