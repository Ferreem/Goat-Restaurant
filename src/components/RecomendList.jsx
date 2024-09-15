import React from 'react'
import CardMeal from './CardMeal'

export default function RecomendList({foodList}) {
  return (
    <div className="container mx-auto py-4 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodList.map((item, index) => (
          <CardMeal
            key={index}
            id={item.id}
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