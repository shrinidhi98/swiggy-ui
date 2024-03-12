import React from 'react'
import restaurantImg from './img/restaurant.png';
import { Link } from 'react-router-dom';

const RestaurantListItem = ({ restaurant }: { restaurant: any }) => {
    return (
        <div>
            <Link to={`/restaurants/${restaurant.id}`}>
                <li className='mt-3'>
                    <button className='mt-1 hover:bg-slate-300'>
                        <div className="flex">
                            <div className="flex-1">
                                <img
                                    src={restaurantImg}
                                    alt={restaurant.name}
                                    className="rounded-md w-50 h-50"
                                />
                            </div>
                            <div className="flex flex-col justify-center ml-5 flex-1">
                                <p className="">{restaurant.name}</p>
                                <p>Restaurant</p>
                            </div>
                        </div>
                    </button>
                </li>
            </Link>
        </div>
    )
}

export default RestaurantListItem
