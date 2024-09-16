import React from 'react'
import { removeFromCart } from '../states/cartSlice';
import { useDispatch } from 'react-redux';

export default function CardOrder({img, name, price, id }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id }));
  };
  
  return (
    <div className='w-full border-2 grid grid-cols-2 relative mb-3'>
      <button onClick={handleRemoveItem} className='absolute right-2 '>X</button>
        <div className='absolute'></div>
        <div className='col-span-1 relative h-52'>
            <img src={img} alt="" className='h-full w-full object-cover' />
        </div>
        <div className='col-span-1 ml-2'>
            <h3 className='font-bold mb-2 py-3 pl-0'>{name}</h3>
            <p className='mb-2 overflow-y-hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <div className='font-semibold py-3'>
                ${price}
            </div>
        </div>
    </div>
  )
}
