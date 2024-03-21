import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CgTimelapse } from "react-icons/cg";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import Menu from './Menu';
import { useParams } from "react-router-dom";

interface Restaurant {
    id: string;
    name: string;
    star: string;
    time: string;
    cuisine: string;
    location: string;
    src: string;
    // Define other properties as needed
}

interface Menu {
    id: number;
    name: number;
    star: number;
    description: string;
    image: string;
    veg: boolean;
}



const Restaurant = ({ restaurants }: { restaurants: Restaurant[] }) => {

    const [menu, setMenu] = useState<Menu[]>([]);
    const [isVegChecked, setIsVegChecked] = useState(false);
    const [isNonVegChecked, setIsNonVegChecked] = useState(false);
    const [viewableMenu, setViewableMenu] = useState<Menu[]>([]);

    const { id } = useParams();
    const restaurant = restaurants.find(restaurant => (restaurant.id).toString() === id);

    const handleVegToggle = () => {
        setIsVegChecked(!isVegChecked);
    };

    const handleNonVegToggle = () => {
        setIsNonVegChecked(!isNonVegChecked);
    };

    useEffect(()=>{
        if(isVegChecked) {
            if(isNonVegChecked){
                setIsNonVegChecked(false);
            }
            if(menu.length !== 0) {
                setViewableMenu(menu.filter((item) => item.veg === true))
            }
        }
        else if(!isNonVegChecked && !isVegChecked){
            setViewableMenu(menu);
        }
        
    },[isVegChecked])

    useEffect(()=>{
        if(isNonVegChecked) {
            if(isVegChecked){
                setIsVegChecked(false);
            }
            if(menu.length !== 0) {
                setViewableMenu(menu.filter((item) => item.veg === false))
            }
        }
        else if(!isNonVegChecked && !isVegChecked){
            setViewableMenu(menu);
        }
        
    },[isNonVegChecked])

    useEffect(() => {
        axios.get("http://localhost:3500/menus").then(
            (response) => {
                setMenu(response.data);
                setViewableMenu(response.data);
            }
        )
    }, [restaurant])
    return (
        <div className='mt-10 w-4/6 mx-auto'>
            {
                restaurant &&
                <div className='mt-20'>
                    <div id='restaurant-info' className='flex justify-between'>
                        <div>
                            <h1 className='font-bold'>{restaurant.name}</h1>
                            <h1>{restaurant.cuisine}</h1>
                            <h1>{restaurant.location}</h1>
                        </div>
                        <div className='rounded-md bg-white border border-gray-800 p-2 items-center shadow-lg shadow-slate-400'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faStar} style={{ color: 'green' }} />
                                <h6 className="mr-2 ml-2 text-sm font-bold text-green-700">{restaurant.star}</h6>
                            </div>
                            <hr className="my-2 border-t border-gray-300" />
                            <p className='text-sm'>10k+ ratings</p>
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-300 border-dotted" />
                    <div id='couponsSection'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <CgTimelapse />
                                <p className='ml-2 font-bold'>{restaurant.time}</p>
                            </div>
                            <div className='flex items-center ml-3'>
                                <HiOutlineCurrencyRupee />
                                <p className='ml-2 font-bold'>500 for two</p>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center' id='toggleOption'>
                            <div className="flex items-center">
                                <p className='font-bold mr-2'>Veg</p>
                                <input
                                    type="checkbox"
                                    id="toggleVeg"
                                    className="hidden"
                                    checked={isVegChecked}
                                    onChange={handleVegToggle}
                                />
                                <label
                                    htmlFor="toggleVeg"
                                    className={`relative w-12 h-5 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 ${isVegChecked ? 'bg-green-500' : ''}`}
                                >
                                    <span
                                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${isVegChecked ? 'transform translate-x-full right-4' : ''}`}
                                    />
                                </label>
                            </div>
                            <div className="flex items-center">
                            <p className='font-bold mr-2 ml-3'>Non Veg</p>
                                <input
                                    type="checkbox"
                                    id="toggleNonVeg"
                                    className="hidden"
                                    checked={isNonVegChecked}
                                    onChange={handleNonVegToggle}
                                />
                                <label
                                    htmlFor="toggleNonVeg"
                                    className={`relative w-12 h-5 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 ${isNonVegChecked ? 'bg-red-500' : ''}`}
                                >
                                    <span
                                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${isNonVegChecked ? 'transform translate-x-full right-4' : ''}`}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id='itemList'>
                        <Menu menu={viewableMenu}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Restaurant
