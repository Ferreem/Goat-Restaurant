import React from 'react'
import Icon from './Icon'
import MenuListIcon from '../data/MenuListData'

export default function MenuList() {
  return (
    <div className='h-20 flex justify-center items-center border-b-2'>
      <div className='flex overflow-x-auto whitespace-nowrap scrollbar-hide'>
        {MenuListIcon.map((item, index) => (
          <Icon key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  )
}