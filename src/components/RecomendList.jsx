import React from 'react'
import CardMeal from './CardMeal'
import RecomendedList from '../data/RecomendedList'

export default function RecomendList() {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-wrap justify-between'>
          {RecomendedList.map((item, index) => (
            <CardMeal key={index} img={item.img} name={item.name} about={item.about} price={item.price} />
          ))}
        </div>
    </div>
  )
}
