import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import restaurantImg from './img/restaurant.png';
import { Link } from 'react-router-dom';
import { useAuth } from "./context/AuthProvider";

const RestaurantsDelivery = ({ restaurants }: { restaurants: any }) => {

  const filters = ['Filter', 'Sort By', 'Fast Delivery', 'New On Swiggy', 'Rating 4.0', 'Pure Veg', 'Offers', 'Rs. 300-Rs. 600', 'Less than Rs. 300'];
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [visibleRestaurants, setVisibleRestaurants] = useState<any[]>([]);
  const [endIndex, setEndIndex] = useState(5);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setVisibleRestaurants(restaurants.slice(0, endIndex));
  }, [restaurants, endIndex]);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === containerRef.current?.lastChild) {
        setTimeout(() => {
          const newEndIndex = endIndex + 5;
          setEndIndex(newEndIndex);
        }, 2000); // 5000 milliseconds = 5 seconds
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { root: null, rootMargin: '0px', threshold: 0 });

    if (containerRef.current) {
      const lastChild = containerRef.current.lastElementChild;
      if (lastChild) {
        observer.observe(lastChild);
      }
    }

    return () => observer.disconnect();
  }, [visibleRestaurants]);


  return (
    <div>
      <div>
        <h2 className="justify-start font-bold text-2xl w-full mt-10">Restaurants with online food delivery in Tirupur</h2>
        <div className='flex mt-5 mb-7'>
          {filters.map((filter) => (
            <button className="bg-white text-gray-800 py-0.5 p-px rounded-full border border-gray-400 mr-4 shadow-sm">
              <p className='ml-2 mr-2'>{filter}</p>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-4" ref={containerRef}>
          {visibleRestaurants.map((restaurant: any, index: number) => (
            <Link to={`/restaurants/${restaurant.id}`}>
              <div key={index} className="flex flex-col transition transform hover:scale-90 motion-reduce:transition-none motion-reduce:hover:transform-none" style={{ minWidth: '250px' }}>
                <img src={restaurantImg} alt={restaurant.name} className="rounded-md" style={{ width: '200px', height: '200px' }} />
                <div className="font-bold text-sm text-slate-600 mt-5">{restaurant.name}</div>
                <div className="flex mt-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: 'green' }} />
                  <h6 className="ml-2 text-sm text-slate-600 font-bold">{restaurant.star}{" . "}{restaurant.time}</h6>
                </div>
                <p className="text-sm text-slate-600 justify-start">{restaurant.cuisine}</p>
                <p className="text-sm text-slate-600 justify-start">{restaurant.location}</p>
                <div className='mt-5'></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantsDelivery;
