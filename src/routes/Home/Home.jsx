import React from 'react';
import MenuList from '../../components/MenuList';
import Navbar from '../../components/Navbar';
import CarouselMain from '../../components/CarouselMain';
import RecomendList from '../../components/RecomendList';
export default function Home() {
  return (
    <div className='flex flex-col '>
      <header>
        <Navbar />
        <MenuList />
      </header> 
      <main className='flex justify-center m-0 w-full'>
        <div className='w-full lg:w-9/12 flex flex-col items-center'>
          <CarouselMain />
          <p className='mt-8 text-2xl'>We Recommend</p>
          <RecomendList />
        </div>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}
