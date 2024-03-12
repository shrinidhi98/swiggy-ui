import { useAuth } from "./context/AuthProvider";
import {useState} from 'react';

const MenuList = ({ menu }: { menu: any }) => {

  const { isLoggedIn } = useAuth();
  const [isItemAdded , setIstemAdded] = useState(false);

  const handleAddItem = ()=> {
      if(isLoggedIn) {

      } else {
        window.alert("Please login to add items into the cart....");
      }
  }

  return (
    <div>
      <li className='mt-3'>
        <div className='flex justify-between'>
            <div>
                <div className='font-bold'>{menu.name}</div>
                <div className='text-sm text-gray-500'>{menu.description}</div>
                <div className='text-sm text-gray-500'>{menu.star}</div>
            </div>
            <div className='rounded-md bg-white border border-gray-800 w-fit h-fit items-center shadow-lg shadow-slate-400'
              onClick={()=>handleAddItem()}>
                <button className='ml-5 mr-5 w-fit'>Add</button>
            </div>
        </div>

      </li>
      <hr className="my-2 border-t border-gray-300" />
    </div>
  )
}

export default MenuList
