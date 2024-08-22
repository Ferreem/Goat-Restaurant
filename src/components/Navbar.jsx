import React from 'react'
import Logo from '../assets/Logo.png'
import Menu from '../assets/burger-bar.png'
import Basket from './Basket'

export default function Navbar() {
  return (
    <div className='h-12 border-b-2 mb-2 flex justify-between'>
      <div>
        <div className='flex'>
          <a href="" className='p-2'>
            <img src={Menu} alt=""  className='h-8'/>
          </a>
          <div className='flex flex-col items-center justify-center'>
            <img src={Logo} alt="" className='h-6 w-6'  />
            <p className='flex items-center' style={{fontSize: '0.44rem', lineHeight: '0.5rem'}}>
              Goat Restaurant</p>
          </div>
        </div>
        
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='mr-2'>
          <Basket className /> 
        </div> 
      </div> 
    </div>
  )
}
