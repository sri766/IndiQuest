import React from 'react'


const Hero = () => {
  
  return (
    <section className="hero_section text-slate-900 bg-transparent bg-blur-sm body-font  cursor-pointer">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl lg:text-8xl mb-2 font-medium text-slate-900 ">Welcome to IndiQuest</h1>
          <p className="mb-4 text-4xl leading-relaxed">Explore the beauty of India with us.</p>
          <span className='text-xl text-slate-500'>We provide you with the best travel experience.</span>
          <div className="flex justify-center my-2">
            <button className="flex text-white bg-pink-700 border-0 py-4 px-10 focus:outline-none hover:bg-pink-600 rounded-full text-xl">Explore</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-full" alt="hero" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>

  )
}

export default Hero
