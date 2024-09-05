import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardMeal({ name, img, about, price }) {
  return (
    <Card style={{ width: '24rem', height: '28rem' }} className=' my-4 mx-1'>
      <div style={{ height: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={img} 
          style={{ 
            height: '18rem', 
            width: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className='h-10 overflow-y-hidden'>
          <Card.Text className=''>{about}</Card.Text>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
          <div>{price}$</div>
          <Button variant="success">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}