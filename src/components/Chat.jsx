import React from 'react';
import chat from '../assets/chat.png';

export default function Chat() {
  return (
    <div
      className='fixed bg-color-primary rounded-full h-16 w-16 md:h-20 md:w-20 md:bottom-8 md:right-10 bottom-2 right-4 flex justify-center items-center cursor-pointer z-50'
      onClick={() => {
        // Add your click handler logic here
        alert('Imagine chat window');
      }}
    >
      <img src={chat} alt="Chat Icon" className='h-8 md:h-10' style={{ filter: 'invert(100%)' }} />
    </div>
  );
}
