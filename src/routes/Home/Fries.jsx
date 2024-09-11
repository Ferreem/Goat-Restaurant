import React from 'react';
import MenuList from '../../components/MenuList';
import Navbar from '../../components/Navbar';
import CarouselMain from '../../components/CarouselMain';
import Footer from '../../components/Footer';
import RecomendList from '../../components/RecomendList';
import FriesList from '../../data/Fries'

export default function Home() {
  return (
    <div className='flex flex-col '>
      <header>
        <Navbar />
        <MenuList />
      </header> 
      <main className='flex justify-center w-full'>
        <div className='w-full lg:w-8/12 flex flex-col items-center'>
          <RecomendList foodList={FriesList}/>           {/*  */}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
