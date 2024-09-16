import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import MenuList from '../components/MenuList';
import CardOrder from '../components/CardOrder';
import Chat from '../components/Chat';
import { Link } from 'react-router-dom';

export default function Order() {
  const { items, totalPrice } = useSelector(state => state.cart);

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
              
              {items.map((item) => (
                <CardOrder 
                  key={item.id}
                  id={item.id}
                  img={item.img} 
                  name={item.name} 
                  price={item.price} 
                  about={item.about}
                  
                />
              ))}
              <div className='flex mt-4'>
                <div className='w-52 mr-4 text-lg font-semibold bg p-4 lg:w-80  bg-slate-800 flex justify-center items-center h-24 text-white'>
                  <h2 className='text-lg font-semibold '>Total: ${totalPrice.toFixed(2)}</h2>
                </div>
                <Link to={'/order/finish'} className='w-32 text-lg font-semibold  bg-color-primary  p-4 lg:w-64 text-white flex justify-center items-center'>Continue</Link>
              </div>
            </div>
            {/* Chat Section */}
            <div className=' bg-slate-800 text-white p-4 md:col-span-1 flex flex-col items-center mt-6 h'
            style={{height: '60vh'}}
            >

            
              <h2 className='text-2xl font-bold'>YOUR ORDER</h2>
              {items.map((item) => (
                <>
                <li className='flex justify-between w-full mt-2'>
                    <h2>{item.name}</h2>
                    <p>$ {item.price}</p>
                  
                </li>
                <hr className="border-t border-white w-full " />
                </>
              ))}
            </div>
            <div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
