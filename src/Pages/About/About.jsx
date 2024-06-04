import React from 'react'

const About = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-[1200] w-[500]" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-45 h-45 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src='/sri.png' alt='author' className="overflow-hidden rounded-full shadow-lg"/>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Srisanth Seth</h2>
              <div class="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Creator | IndiQuest</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed justify text-lg mb-4">The motive behind IndiQuest is to celebrate and promote the understanding of India's rich cultural heritage and history. By providing comprehensive and accessible information, IndiQuest aims to educate people about India's diverse cultural traditions, historical milestones, and contemporary cultural landscape. The platform seeks to inspire curiosity and appreciation for India's unique cultural identity among individuals worldwide. Additionally, IndiQuest fosters a sense of community among those interested in Indian culture, history, and travel, while contributing to the preservation and dissemination of India's intangible cultural heritage.</p>
            {/* <a class="text-pink-800 inline-flex items-center" href='https://srisanth.vercel.app/'>Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
