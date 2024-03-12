import React from 'react'
import foodImg from './img/meals.png';

const images = [
    { name: 'Momo', src: foodImg },
    { name: 'Ice cream', src: foodImg },
    { name: 'cake', src: foodImg },
    { name: 'Briyani', src: foodImg },
    { name: 'Juices', src: foodImg },
    { name: 'Shakes', src: foodImg },
    { name: 'Roti', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
    { name: 'Momo', src: foodImg },
]

const PopularCuisine = () => {
    return (
        <div className='mt-10'>
            <h2 className="justify-start font-bold text-2xl w-full">What's on your mind?</h2>
            <div className="mt-10 flex overflow-x-auto" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                {images.map((image, index) => (
                    <div key={index} className="flex-col items-center ml-7 inline-block">
                        <img src={image.src} alt={image.name} className="h-10 w-10 mb-2" />
                        <div className="font-bold text-center text-sm text-slate-600">{image.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularCuisine
