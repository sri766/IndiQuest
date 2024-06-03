import React from 'react'
const Navbar = () => {

  return (

    <header class="text-slate-900 bg-transparent bg-blur-sm body-font rounded-full cursor-pointer">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-lg md:ml-auto">
          <a class="mr-5 hover:text-gray-500">Home</a>
          <a class="mr-5 hover:text-gray-500">About</a>
          <a class="mr-5 hover:text-gray-500">Places</a>
          <a class="hover:text-gray-500">Flights</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-black lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/logo.jpg" alt="LOGO" 
            className='w-[70px]'/>
          <span class="ml-3 text-4xl text-slate-950 xl:block lg:hidden">IndiQuest</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button class="inline-flex text-white items-center bg-yellow-500 text-slate-50 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 text-base mt-4 rounded-full md:mt-0">Explore
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
  </header>
  )
}

export default Navbar
