import React from 'react'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
import { Heart } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="text-white body-font">
    <div className="bg-gray-900">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/mandala.png" alt="LOGO" className='w-[70px]'/>
            <span className="ml-3 text-xl text-white">IndiQuest</span>
        </a>
        <p className="text-md text-white sm:ml-6 sm:mt-0 mt-4">© 2024 IndiQuest —
            <a href="https://twitter.com/SrisanthSeth" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank" previewlistener="true">
              Made with<span><Heart size={24} className='inline m-2'/></span> By Srisanth</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white">
            <Instagram />
            </a>
            <a className="ml-3 text-white">
            <Twitter />
            </a>
            <a className="ml-3 text-white">
            <Facebook />
            </a>
            <a className="ml-3 text-white">
            <Linkedin />
            </a>
        </span>
        </div>
    </div>
    </footer>
  )
}

export default Footer
