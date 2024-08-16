import React from 'react'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'
import CarouselWithContent from '../../components/Carousal/CarouselWithContent'
import Gallery from '../../components/Gallery/Gallery'
import Testimonials from '../../components/Testimonials/Testimonials'
import VideoPlayer from '../../components/Video/VideoPlayer'

const Home = () => {


  return (
    <div>
      <Hero className='hero_section' />
      <CarouselWithContent className="carousel-section"/>
      <Testimonials />
      <VideoPlayer />
      <Content className="content_section"/>
      <Gallery className="gallery"/>
    </div>
  )
}

export default Home
