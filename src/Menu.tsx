import React from 'react'
import MenuList from './MenuList'

const Menu = ({menu}:{menu:any}) => {
  return (
    <div>
      <ul>
      {menu.map((menu: any, index: number) => (<MenuList menu={menu}/>))}
      </ul>
    </div>
  )
}

export default Menu
