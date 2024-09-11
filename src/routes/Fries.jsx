import React from 'react';
import MenuList from '../components/MenuList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecomendList from '../components/RecomendList';
import { friesList } from '../data/ListsMeals';
import Chat from '../components/Chat';

export default function Home() {
  return (
    <>
    <Chat />
    <div className='flex flex-col '>
      <header>
        <Navbar />
        <MenuList />
      </header> 
      <main className='flex justify-center w-full'>
        <div className='w-full lg:w-8/12 flex flex-col items-center'>
          <RecomendList foodList={friesList}/>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}