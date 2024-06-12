import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      setLoading(false);
    };

    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollPosition / documentHeight, 1);
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full p-12 rounded-xl video-container border-4 overflow-hidden relative mx-auto shadow-xl bg-gray-900 border-gray-400`}
      style={{
        transform: `rotateZ(${1 * (1 - scrollYProgress)}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {loading && (
        <div className="loading-overlay absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="loader border-t-4 border-b-4 border-yellow-400 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        className={`w-full rounded-lg ${loading ? 'invisible' : 'visible'}`}
      >
        <source src="/video.mp4" type="video/mp4" />
        <source src="/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
