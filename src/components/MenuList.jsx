import React from 'react'
import Pig from '../assets/pig.png'
import Cow from '../assets/cow.png'
import Icon from './Icon'
import Goat from '../assets/goat.png'
import Chicken from '../assets/chicken.png'
import Vegetarian from '../assets/vegetarian.png'

export default function MenuList() {
  return (
    <div className='h-20 flex justify-center items-center border-b-2'>
      <div className='flex overflow-x-auto whitespace-nowrap scrollbar-hide'>
      <Icon image={Pig} name={'pork'} />
      <Icon image={Cow} name={'beef'} />
      <Icon image={Goat} name={'beef'} />
      <Icon image={Chicken} name={'chicken'} />
      <Icon image={Vegetarian} name={'vege'} />   
      <Icon image={Vegetarian} name={'vege'} />   
      <Icon image={Vegetarian} name={'vege'} />   
      <Icon image={Vegetarian} name={'vege'} />   
      <Icon image={Vegetarian} name={'vege'} />   
      <Icon image={Vegetarian} name={'vege'} />     
      </div>
    </div>
  )
}
