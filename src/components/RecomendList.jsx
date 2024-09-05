import React from 'react'
import CardMeal from './CardMeal'
import RecomendedList from '../data/RecomendedList'

export default function RecomendList() {
  return (
    <div className="container mx-auto py-4 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {RecomendedList.map((item, index) => (
          <CardMeal
            key={index}
            img={item.img}
            name={item.name}
            about={item.about}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}