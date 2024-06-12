import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Places from './Pages/Places/Places'

//components
import Navbar from './components/Navbar/Navbar'
import Designer from './components/Design/Designer'

//react-router
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Flights from './Pages/Flights/Flights'
import Explore from './Pages/Explore/Explore'


function App() {


  return (
    <BrowserRouter>
    <div className='select-none'>
      <Navbar />
      <Designer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />} />
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
