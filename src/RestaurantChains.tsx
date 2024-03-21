import React, { useState, useRef } from 'react';
import restaurant from './img/restaurant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from "react-icons/pi";


const RestaurantChains = () => {
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

    const restChain = [
        { name: 'Annapoorna', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Meghna', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'KFC', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Dominos', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Saravana Bhavan', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Annapoorna', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Meghna', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'KFC', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Dominos', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' },
        { name: 'Saravana Bhavan', src: restaurant, star: '4.2', time: '30-35 mins', cuisine: 'Desserts, Juices, Chinese', location: 'Tiruppur' }
    ];

    return (
        <div className="mt-10">
            <div className="flex">
                <h2 className="justify-start font-bold md:text-2xl w-full">Top restaurant chains in Tirupur</h2>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollLeft}><PiArrowCircleLeftLight size={30} /></button>
                <button className="hover:bg-gray-300 rounded-full" onClick={handleScrollRight}><PiArrowCircleRightLight size={30} /></button>
            </div>
            <div className="flex overflow-x-auto mt-3 gap-5" ref={scrollRef} 
                style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth', scrollbarColor:"red"}}>
                {restChain.map((image, index) => (
                    <div key={index} className="flex flex-col transition transform hover:scale-90 motion-reduce:transition-none motion-reduce:hover:transform-none" style={{ minWidth: '200px' }}>
                        <img src={image.src} alt={image.name} className="rounded-md" />
                        <div className="font-bold text-xs md:text-sm text-slate-600 mt-5">{image.name}</div>
                        <div className="flex mt-1">
                            <FontAwesomeIcon icon={faStar} style={{ color: 'green' }} />
                            <h6 className="ml-2 text-xs md:text-sm text-slate-600 font-bold">{image.star}{" . "}{image.time}</h6>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 justify-start">{image.cuisine}</p>
                        <p className="text-xs md:text-sm text-slate-600 justify-start">{image.location}</p>
                        <div className='mt-5'></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantChains;
