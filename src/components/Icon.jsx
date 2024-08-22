import React from 'react'
import '../assets/MenuList.scss'

export default function Icon({image, name}) {
  return (
    <>
     <div className='h-16 w-12  flex flex-col items-center mr-8'>
        <div>
          <img src={image} alt="" className='h-10'/>
        </div>
        <div className=''>{name}</div>

     </div>
    </>
  )
}
