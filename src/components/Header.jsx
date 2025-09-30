import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header fixed z-50 top-0 left-0 flex justify-center items-center w-full lg:h-28">
      <div className="header-content flex justify-between items-center min-w-full lg:min-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl lg:rounded-full px-5 md:px-8 lg:px-5 py-4 lg:py-3">
        {/* ------------------- Logo ------------------ */}
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="logo" className="w-20" />
          </a>
        </div>

        {/* -------------------- Hamburger Menu --------------------  */}
        <label className="flex flex-col gap-2 w-8 h-8 cursor-pointer lg:hidden">
          <input
            className="peer hidden"
            type="checkbox"
            checked={showMenu}
            onChange={(e) => setShowMenu(e.target.checked)}
          />
          <div
            className="rounded-2xl h-[3px] w-1/2 bg-white/90 duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
          ></div>
          <div
            className="rounded-2xl h-[3px] w-full bg-white/90 duration-500 peer-checked:-rotate-45"
          ></div>
          <div
            className="rounded-2xl h-[3px] w-1/2 bg-white/90 duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
          ></div>
        </label>

        {/* -------------------- Mobile Menu ----------------------- */}
        {showMenu && (
          <div className="absolute top-full left-0 w-full bg-white/20 backdrop-blur-xl border border-white/10 shadow-2xl lg:hidden">
            <nav className="p-4">
              <ul className="flex flex-col gap-4 font-primary tracking-wide font-medium text-sm text-white">
                <li className="nav-link border-b border-gray-500 pb-3">
                  <a
                    href="#dishes"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Dishes
                  </a>
                </li>
                <li className="nav-link border-b border-gray-500 pb-3">
                  <a
                    href="#about"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    About
                  </a>
                </li>
                <li className="nav-link border-b border-gray-500 pb-3">
                  <a
                    href="#mission"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Mission
                  </a>
                </li>
                <li className="nav-link border-b border-gray-500 pb-3">
                  <a
                    href="#expertise"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Expertise
                  </a>
                </li>
                <li className="nav-link border-b border-gray-500 pb-3">
                  <a
                    href="#review"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Review
                  </a>
                </li>
                <li className="nav-link">
                  <a
                    href="#contact"
                    className="hover:text-white/60 duration-100 ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* -------------------- Navbar ----------------------- */}
        <nav className='hidden lg:block'>
          <ul className="items-center font-primary tracking-wide font-medium text-sm text-white md:flex">
            <li className='nav-link border-r-[2px] border-gray-500 px-6'>
              <a href="#dishes" className='hover:text-white/60 duration-100 ease-in-out'>Dishes</a>
            </li>
            <li className='nav-link border-r-[2px] border-gray-500 px-6'>
              <a href="#about" className='hover:text-white/60 duration-100 ease-in-out'>About</a>
            </li>
            <li className='nav-link border-r-[2px] border-gray-500 px-6'>
              <a href="#mission" className='hover:text-white/60 duration-100 ease-in-out'>Mission</a>
            </li>
            <li className='nav-link border-r-[2px] border-gray-500 px-6'>
              <a href="#expertise" className='hover:text-white/60 duration-100 ease-in-out'>Expertise</a>
            </li>
            <li className='nav-link border-r-[2px] border-gray-500 px-6'>
              <a href="#review" className='hover:text-white/60 duration-100 ease-in-out'>Review</a>
            </li>
            <li className='nav-link pl-6'>
              <a href="#contact" className='hover:text-white/60 duration-100 ease-in-out'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
