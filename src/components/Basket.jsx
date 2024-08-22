import React from 'react'
import ShoppingBasket from '../assets/shopping-basket.png'

export default function Basket() {
  return (
    <>
      <a href="" className='flex items-center justify-center border-2 rounded-2xl h-8 px-2 py-3 '>
        <img src={ShoppingBasket} alt="" className='h-5' />
        <p className='text-sm ml-1'>123 $</p>
      </a>
    </>
  )
}
