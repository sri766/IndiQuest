import React from 'react'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'
import CarouselWithContent from '../../components/Carousal/CarouselWithContent'
import Gallery from '../../components/Gallery/Gallery'
import Testimonials from '../../components/Testimonials/Testimonials'


const Home = () => {

  return (
    <div>
      <Hero />
      <CarouselWithContent />
      <Testimonials />
      <Content />
      <Gallery />
    </div>
  )
}

export default Home
