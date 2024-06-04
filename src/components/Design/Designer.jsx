import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const Designer = () => {
  const imageRef = useRef(null);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      gsap.to(imageRef.current, { rotation: 360, duration: 20, repeat: -1, ease: 'power0.none' });
    } else {
      gsap.to(imageRef.current, { rotation: 0, duration: 1, ease: 'power0.none' });
    }
  }, [isHomePage]); 

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  return (
    <div className='w-full h-full absolute -left-1/3 bottom-0 -z-10 opacity-50'>
      <img ref={imageRef} src="/Designer.png" alt="mandala" />
    </div>
  );
};

export default Designer;
