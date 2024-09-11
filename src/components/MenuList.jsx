import React, { useRef } from 'react';
import Icon from './Icon';
import MenuListData from '../data/MenuListData';
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import { Link } from 'react-router-dom';

export default function MenuList() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className="h-20 flex justify-center items-center border-b-2 relative">
      {/* Left Arrow Button */}
      <button
        className="h-8 absolute left-3 z-10 p-2 rounded-full color-primary"
        style={{backgroundColor: '#157347', }}
        onClick={scrollLeft}
      >
        <img src={leftArrow} alt="" className='h-3' style={{filter: 'invert(100%)'}}/>
      </button>

      {/* Scrollable Icon List */}
      <div
        className="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
        ref={scrollRef} // Attach the scrollable div to the ref
      >
        {MenuListData.map((item, index) => (
        <Link to={item.route} key={index}> {/* Wrap icon in Link */}
          <Icon image={item.image} name={item.name} />
        </Link>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        className="h-8 absolute right-3 z-10 p-2 rounded-full"
        style={{backgroundColor: '#157347', }}
        onClick={scrollRight}
      >
        <img src={rightArrow} alt="" className='h-3' style={{filter: 'invert(100%)'}}/>
      </button>
    </div>
  );
}
