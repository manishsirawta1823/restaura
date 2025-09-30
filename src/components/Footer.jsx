import React from 'react'
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return <div className='footer w-full h-32 md:h-20 bg-white/20 px-6'>
    <div className="container mx-auto flex gap-6 md:gap-0 flex-col md:flex-row justify-center md:justify-between items-center w-full h-full">
      <p className='text-white font-primary-font capitalize'>&copy; {new Date().getFullYear()}, <span className='text-red-400 font-semibold cursor-pointer hover:text-red-600'>Restaura</span>. All right reserved.</p>

      <div className="social-icons">
        <ul className='flex justify-center items-center gap-6'>
          <li className='text-lg bg-white/60 p-2.5 rounded-full hover:bg-white/80 cursor-pointer'><a href="https://www.twitter.com" target='_blank'><FaXTwitter /></a></li>
          <li className='text-lg bg-white/60 p-2.5 rounded-full hover:bg-white/80 cursor-pointer'><a href="https://www.facebook.com" target='_blank'><FaFacebookF /></a></li>
          <li className='text-lg bg-white/60 p-2.5 rounded-full hover:bg-white/80 cursor-pointer'><a href="https://www.instagram.com" target='_blank'><FaInstagram /></a></li>
          <li className='text-lg bg-white/60 p-2.5 rounded-full hover:bg-white/80 cursor-pointer'><a href="https://www.youtube.com" target='_blank'><FaYoutube /></a></li>
        </ul>

      </div>
    </div>
  </div>
}

export default Footer
