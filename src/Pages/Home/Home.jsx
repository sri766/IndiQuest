import React from 'react'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'
import CarouselWithContent from '../../components/Carousal/CarouselWithContent'
import Gallery from '../../components/Gallery/Gallery'
import Testimonials from '../../components/Testimonials/Testimonials'
import Tour from '../../components/Tour/Tour'

const Home = () => {

  const tourSteps = [
    {
      id: 'step1',
      options: {
        title: 'Welcome to IndiQuest',
        scrollTo: true,
        text: 'A Quest to Reich Heritage and Culture.',
        attachTo: {
          element: '.hero-section',
          on: 'bottom',
        },
      },
    },
    {
      id: 'step2',
      options: {
        title: 'Check out our Carousel',
        scrollTo: true,
        text: 'Here you can find India featured content.',
        attachTo: {
          element: '.carousel-section',
          on: 'top',
        },
      },
    },
    {
      id: 'step3',
      options: {
        title: 'Features',
        scrollTo: true,
        text: 'Here you can find our featured content.',
        attachTo: {
          element: '.content-section',
          on: 'top',
        },
      },
    },
    
  ];


  const defaultStepOptions = {
    classes: 'shepherd-theme-arrows',
  };

  return (
    <div>
      <Hero className='hero_section' />
      <CarouselWithContent className=".carousel-section"/>
      <Testimonials />
      <Content className=".content_section"/>
      <Gallery className=".gallery"/>
      <Tour steps={tourSteps} defaultStepOptions={defaultStepOptions} />
    </div>
  )
}

export default Home
