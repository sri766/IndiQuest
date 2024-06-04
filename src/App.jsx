import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Places from './Pages/Places/Places'

//components
import Navbar from './components/Navbar/Navbar'
import Designer from './components/Design/Designer'

//react-router
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <>
      <Navbar />
      <Designer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
