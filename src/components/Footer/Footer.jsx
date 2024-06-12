import React from 'react'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
import { Heart } from 'lucide-react'
import { TiHeartFullOutline } from "react-icons/ti";


const Footer = () => {
  return (
    <footer className="text-white body-font">
    <div className="bg-gray-900">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start lg:justify-center text-gray-900">
            <img src="/mandala.png" alt="LOGO" className='w-[70px]'/>
            <span className="ml-3 text-2xl text-white">IndiQuest</span>
        </a>
        <p className="text-lg text-white sm:ml-6 sm:mt-0 mt-4">© 2024 IndiQuest —
            <a href="https://twitter.com/SrisanthSeth" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank" previewlistener="true">
              Made with<span><TiHeartFullOutline className='inline text-2xl'/></span> By Srisanth</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start p-2">
            <a href='https://www.instagram.com/sri_santh._/' className="text-white">
            <Instagram />
            </a>
            <a href='https://x.com/SrisanthSeth/' className="ml-3 text-white">
            <Twitter />
            </a>
            <a href='' className="ml-3 text-white">
            <Facebook />
            </a>
            <a href='https://www.linkedin.com/in/srisanth-seth-51b54b225/' className="ml-3 text-white">
            <Linkedin />
            </a>
        </span>
        <a href="https://www.buymeacoffee.com/srisanthsez"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=srisanthsez&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
        </div>
    </div>
    </footer>
  )
}

export default Footer
