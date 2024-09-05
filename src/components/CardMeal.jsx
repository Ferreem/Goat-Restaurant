import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardMeal({ name, img, about, price }) {
  return (
    <Card className="w-full h-full flex flex-col">
      <div className="h-48 sm:h-52">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 pb-1 flex-grow relative">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="h-16 overflow-y-hidden mb-4">
          <p>{about}</p>
        </div>
        <button className='border-2 px-4 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-5 z-10 tracking-wider bg-white' style={{color:'#157347', width:'7.5rem'}}>▽ more</button>
      </div>
      <div className="flex justify-between items-center bg-slate-50 p-4 mt-auto">
        <span className="text-lg font-semibold">${price}</span>
        <Button variant="success">Add to cart</Button>
      </div>
    </Card>
  );
}