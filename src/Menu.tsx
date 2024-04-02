import React from 'react'
import MenuList from './MenuList'

const Menu = ({menu,isLoggedIn,isItemAdded,setIstemAdded}:{menu:any,isLoggedIn:boolean,isItemAdded:boolean,setIstemAdded:any}) => {
  return (
    <div>
      <ul>
      {menu.map((menu: any, index: number) => (<MenuList menu={menu} isItemAdded={isItemAdded} setIstemAdded={setIstemAdded}/>))}
      </ul>
    </div>
  )
}

export default Menu
