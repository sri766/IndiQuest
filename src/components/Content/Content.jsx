import React,{useEffect} from 'react'
import { ArrowRight } from 'lucide-react'

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">What's inside Tresure</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Embrace the Culture and Heritage</h1>
        </div>
        <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl  lg:text-2xl text-gray-900 font-medium title-font mb-2">Destination Guides</h2>
            <p className="leading-relaxed text-md mb-4">Explore the Pink City of Jaipur, a vibrant blend of royal heritage and bustling markets. From the majestic Amber Fort to the serene Jal Mahal, uncover the tales and treasures of Rajasthan's capital.</p>
            <a className="text-pink-500 inline-flex items-center">Learn More
            <ArrowRight size={20} />
            </a>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium title-font mb-2">Travel Tips</h2>
            <p className="leading-relaxed text-md mb-4">Embarking on your first journey to incredible India? Arm yourself with these essential travel tips and insights to ensure a smooth and memorable adventure in this diverse and vibrant country.</p>
            <a className="text-pink-500 inline-flex items-center">Learn More
            <ArrowRight size={20}/>
            </a>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium title-font mb-2">Cultural Insights</h2>
            <p className="leading-relaxed text-md mb-4">Experience the spiritual fervor of India's festivals, where devotion and celebration intertwine. Discover the significance and rituals of Diwali, Holi, and more, immersing yourself in the heart of Indian culture.</p>
            <a className="text-pink-500 inline-flex items-center">Learn More
            <ArrowRight size={20} />
            </a>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium title-font mb-2">Adventure Travel</h2>
            <p className="leading-relaxed text-md mb-4">Conquer the towering peaks and deep valleys of the Himalayas with our adventure travel guide. From trekking routes to extreme sports, embrace the thrill of exploring one of the world's most majestic mountain ranges.</p>
            <a className="text-pink-500 inline-flex items-center">Learn More
            <ArrowRight size={20} />
            </a>
        </div>
        </div>
        <button className="flex justify-center items-center mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Let's Go<ArrowRight size={20}/></button>
    </div>
    </section>
  )
}

export default Content
