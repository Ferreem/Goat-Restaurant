import React from 'react'
import Logo from '../assets/Logo.png'
import Basket from './Basket'
import { Link } from 'react-router-dom';
import Home from '../assets/home.png';

export default function Navbar() {
  return (
    <div className='h-16 border-b-2 mb-2 flex justify-between items-center'>
      <div>
        <div className='flex'>
          <Link to={'/'} className='p-2 mr-3'>
            <img src={Home} alt=""  className='h-8'/>
          </Link>
        <Link to={'/'} className='flex flex-col items-center justify-center'>
            <img src={Logo} alt="" className='h-6 w-6'  />
            <p className='flex items-center' style={{fontSize: '0.44rem', lineHeight: '0.5rem'}}>
              Goat Restaurant</p>
          </Link>
        </div>
        
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='mr-2'>
          <Link to={'/order'}>
            <Basket className />
          </Link> 
        </div> 
      </div> 
    </div>
  )
}
