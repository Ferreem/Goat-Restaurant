import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardMeal({ name, img, about, price }) {
  return (
    <Card className="w-full sm:w-80 md:w-72 lg:w-96 h-auto sm:h-[28rem] my-4">
      <div className="h-52 sm:min-h-72">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="h-16 overflow-y-hidden mb-4">
          <p>{about}</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-slate-100 p-4">
        <span className="text-lg font-semibold">${price}</span>
        <Button variant="success">Add to cart</Button>
      </div>
    </Card>
  );
}