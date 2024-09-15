import React from 'react'
import ShoppingBasket from '../assets/shopping-basket.png'
import { useSelector } from 'react-redux'

export default function Basket() {
  const { totalPrice } = useSelector(state => state.cart)

  return (
    <>
      <a href="" className='flex items-center justify-center  rounded-2xl h-8 px-2 py-3'
      style={{borderColor:'#157347', borderWidth: '1px'}}
      >
        <img src={ShoppingBasket} alt="" className='h-5' style={{ filter: 'invert(20%) sepia(70%) saturate(600%) hue-rotate(90deg)' }}/>
        <p className='text-sm ml-1' style={{color:'#157347'}}>{totalPrice} $</p>
      </a>
    </>
  )
}
