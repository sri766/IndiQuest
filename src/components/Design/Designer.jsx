import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Img from '../LazyLoading/Img';

const Designer = () => {
  const imageRef = useRef(null);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      gsap.to(imageRef.current, { rotation: 360, duration: 10, repeat: -1, ease: 'linear' });
    } else {
      gsap.to(imageRef.current, { rotation: 0, duration: 1, ease: 'power0.none' });
    }
  }, [isHomePage]); 

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  return (
    <div className='absolute rounded-full bottom-0 -z-10 lg:opacity-20 flex justify-center items-center lg:-left-1/3 md:bottom-auto md:top-0 md:opacity-20 -top-1/3 opacity-20'>
      <img ref={imageRef} src="/Design.svg" alt="mandala" />
    </div>
  );
};

export default Designer;
