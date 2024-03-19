import React, {useRef, useState} from 'react';
import WhatsOnMind from './WhatsOnMind';
import RestaurantChains from './RestaurantChains';
import RestaurantsDelivery from './RestaurantsDelivery';

const HomePage = ({restaurants}:{restaurants : any}) => {
    // const [search, setSearch] = useState('');
    
    return (
        <div  className="w-5/6 md:w-4/6 mx-auto mt-6">
         <WhatsOnMind />  
         <hr className='mt-10'/> 
         <RestaurantChains />
         <hr className='mt-10'/>
         <RestaurantsDelivery restaurants={restaurants}/>
        </div>
    );
};

export default HomePage;
