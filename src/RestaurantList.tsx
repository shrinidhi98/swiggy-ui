import React from 'react'
import RestaurantListItem from './RestaurantListItem'

const RestaurantList = ({restaurants}:{restaurants:any}) => {
  return (
    <div>
        {restaurants.length === 0 ?
        (<div className="flex justify-center items-center h-full">
        <p className="font-bold mt-2">Sorry.....No Restaurants Found !!!!</p>
      </div>
      ) :
        <ul>
            {restaurants.map((restaurant: any, index: number) => (<RestaurantListItem restaurant={restaurant}/>))}
        </ul>}
    </div>
  )
}

export default RestaurantList
