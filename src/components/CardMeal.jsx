import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardModal from './Cardmodal/CardModal';
import { addToCart } from '../states/cartSlice';

export default function CardMeal({ id, name, img, about, price }) {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleAddToOrder = () => {
    dispatch(addToCart({ id, name, price, img }));
  }

  return (
    <>
      <Card className="w-full h-full flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        <div className="h-48 sm:h-52">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 pb-1 flex-grow relative">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <div className="relative overflow-hidden mb-4" style={{height:'4.5rem'}}>
            <p className='z-10'>{about}</p>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
          </div>
          {hover && (
            <button
              onClick={handleClick}
              className='border-2 px-4 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-5 z-10 tracking-wider bg-white'
              style={{ color: '#157347', width: '7.5rem'}}
            >
              ▽ more
            </button>
          )}
        </div>
        <div className="flex justify-between items-center bg-slate-50 p-4 mt-auto">
          <span className="text-lg font-semibold">${price}</span>
          <Button variant="success" onClick={handleAddToOrder}>Add to order</Button>
        </div>
      </Card>

      <CardModal
        show={showModal}
        handleClose={handleClose}
        name={name}
        img={img}
        about={about}
        price={price}
      />
    </>
  );
}