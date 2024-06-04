import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

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
    <div className='w-full h-full lg:block absolute lg:-left-1/3 sm:-top-1/2 lg:bottom-0 -z-10 lg:opacity-50 sm:opacity-20 sm:flex sm:justify-center sm:align-center'>
      <img ref={imageRef} src="/Designer.svg" alt="mandala" />
    </div>
  );
};

export default Designer;
