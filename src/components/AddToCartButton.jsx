import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../states/cartSlice';
import BuyAnimation from './BuyAnimation';

const BuyAnimationFooter = ({ name }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='fixed bottom-0 left-0 right-0 bg-color-primary w-full h-32 flex items-center justify-center z-50'
  >
    <p className='text-2xl font-bold text-white'>You've added {name}</p>
  </motion.div>
);

export default function AddToCartButton({ id, name, price, img }) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, img }));
    setIsClicked(true);
    setShowFooter(true);
    setTimeout(() => setIsClicked(false), 2000);
    setTimeout(() => setShowFooter(false), 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isClicked ? (
          <motion.div>
            <Button variant="success" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BuyAnimation />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showFooter && <BuyAnimationFooter name={name} />}
      </AnimatePresence>
    </>
  );
}