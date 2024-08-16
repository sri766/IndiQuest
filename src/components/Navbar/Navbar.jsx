import { ArrowRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  return (

    <header className="sticky text-slate-900 bg-transparent body-font rounded-full cursor-pointer">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex lg:w-2/5 flex-wrap items-center text-xl md:ml-auto">
          <a className="home mr-5 hover:text-gray-500" onClick={()=>navigate('/')}>Home</a>
          <a className="about mr-5 hover:text-gray-500" onClick={()=>navigate('/about')}>About</a>
          <a className="places mr-5 hover:text-gray-500"  onClick={()=>navigate('/places')}>Places</a>
          <a className="flights hover:text-gray-500"  onClick={()=>navigate('/flights')}>Flights</a>
        </div>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-black lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/mandala.png" alt="LOGO" 
            className='w-[70px]'/>
          <span className="ml-3 text-4xl text-slate-950 xl:block lg:hidden">IndiQuest</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex text-white items-center bg-yellow-500 text-slate-50 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 text-xl mt-4 rounded-full md:mt-0"
          onClick={()=>navigate('/explore')}>Explore
            <ArrowRight size={20}/>
          </button>
        </div>
      </div>
  </header>
  )
}

export default Navbar
