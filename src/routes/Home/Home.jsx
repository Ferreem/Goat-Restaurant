import React from 'react';
import MenuList from '../../components/MenuList';
import Navbar from '../../components/Navbar';
import CarouselMain from '../../components/CarouselMain';
import RecomendList from '../../components/RecomendList';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar />
      </header> 
      <main>
        <MenuList />
        <div className='' style={{width:'90%'}}>
          <CarouselMain />
          <p className='flex justify-center items-center mt-8 text-2xl'>We Recomend </p>
          <RecomendList />
        </div>
        
      </main>
      <footer>

      </footer>
    </div>
  )
}
