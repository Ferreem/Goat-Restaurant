import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../states/cartSlice';
import Navbar from '../components/Navbar';
import MenuList from '../components/MenuList';
import CardOrder from '../components/CardOrder';
import Chat from '../components/Chat'; // Assuming Chat is a component you want to include

export default function Order() {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(items);

  return (
    <>
      <Chat />
      <div className='flex flex-col'>
        <header>
          <Navbar />
          <MenuList />
        </header>
        <main className='flex justify-center w-full'>
          <div className='w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Orders Section */}
            <div className='bg-white p-4 md:col-span-1'>
              <h1 className='text-xl font-bold mb-4'>Your Order</h1>
              {items.map((item) => (
                <CardOrder 
                  key={item.id}
                  img={item.img} 
                  name={item.name} 
                  price={item.price} 
                  about={item.about}
                />
              ))}
              <h2 className='text-lg font-semibold mt-4'>Total: ${totalPrice}</h2>
            </div>
            {/* Chat Section */}
            <div className='bg-slate-900 text-white p-4 md:col-span-1'>
              {/* Chat content goes here */}
              <h2 className='text-lg font-bold'>Chat</h2>
              {/* Add chat components or content here */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
