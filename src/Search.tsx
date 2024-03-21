import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import PopularCuisine from './PopularCuisine';
import RestaurantList from './RestaurantList';

// Define the type for a restaurant object
interface Restaurant {
    id: string;
    name:string;
    star:string;
    time:string;
    cuisine:string;
    location: string;
    src:string;
    // Define other properties as needed
  }

const Search = ({ restaurants }: { restaurants : Restaurant[]}) => {

    const [search,setSearch] = useState('');
    return (
        <div className='w-5/6 md:w-4/6 mx-auto py-12'>
            <div className="w-full mx-auto mt-6">
                <div className="mt-5 mb-10">
                    <div className="flex items-center border border-gray-400 p-2">
                        <input
                            id='search'
                            type="text"
                            placeholder="Search for restaurants and food"
                            className="w-full outline-none px-2 py-1"
                            role="searchbox"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className="text-gray-500 ml-2" />
                    </div>
                    <div>
                    {search.length===0 && <PopularCuisine/>}
                    </div>
                    {search.length !== 0 && <RestaurantList restaurants={restaurants.filter(restaurant => ((restaurant.name).toLowerCase()).includes(search.toLowerCase()))}/>}
                </div>
            </div>
        </div>
    )
}

export default Search
