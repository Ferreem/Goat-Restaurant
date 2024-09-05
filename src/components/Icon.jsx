import React from 'react'
import '../assets/MenuList.scss'

export default function Icon({name, image}) {
  return (
    <div className='h-16 w-12 flex flex-col items-center mx-4'>
      <div>
        <img src={image} alt={name} className='h-10'/>
      </div>
      <div>{name}</div>
    </div>
  )
}