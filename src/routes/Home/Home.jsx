import React from 'react';
import MenuList from '../../components/MenuList';
import Navbar from '../../components/Navbar';
import CarouselMain from '../../components/CarouselMain';

export default function Home() {
  return (
    <>
      <Navbar /> 
      <MenuList />
      <CarouselMain />
    </>
  )
}
