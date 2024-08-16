import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Places from './Pages/Places/Places';
import Navbar from './components/Navbar/Navbar';
import Designer from './components/Design/Designer';
import Footer from './components/Footer/Footer';
import Flights from './Pages/Flights/Flights';
import Explore from './Pages/Explore/Explore';

function App() {
  const [loader, setLoader] = useState(true);
  const logoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loader) {
      gsap.to(logoRef.current, {
        rotation: 360,
        repeat: -1,
        ease: "linear",
        duration: 20
      });
    }
  }, [loader]);

  return (
    <>
      {loader ? (
        <div className="loader-container">
          <img
            ref={logoRef}
            src="/mandala.png"
            className="loader-logo gsap-logo"
            alt="Loading...."
          />
          <h1 className="loader-text">Welcome to IndiQuest</h1>
        </div>
      ) : (
        <BrowserRouter>
          <div className="select-none">
            <Navbar />
            <Designer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/places" element={<Places />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
