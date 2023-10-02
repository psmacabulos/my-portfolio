import { Link } from "react-scroll"
import { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

import Logo from "../assets/logo.png"

function Navbar() {
  /**
   * States :
   * nav - for the hamburger menu
   */
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const menus = ["Home", "About", "Skills", "Work", "Contact"]

  return (
    <div className=' fixed w-full flex justify-between items-center px-4  h-[80px]  text-gray-300  bg-[#0a192f]/95 z-2 shadow-md'>
      <Link to='home' smooth='{true}' duration={900}>
        <img src={Logo} alt='logo' style={{ width: "100px", cursor: "pointer" }} />
      </Link>

      {/* menu */}

      <ul className='hidden md:flex'>
        {menus.map(menu => (
          <li key={menu} className='group transform hover:scale-125 relative duration-500 z-10'>
            <Link to={menu.toLowerCase()} smooth='{true}' duration={900}>
              {menu}
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#2ebfa5] transform scale-x-0 origin-top transition-transform duration-300 group-hover:scale-x-50'></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
            : "hidden"
        }
      >
        {menus.map(map => (
          <li key={map} className='py-6 group text-4xl relative'>
            <Link
              className='transform group-hover:scale-110 duration-900'
              onClick={handleClick}
              to={map.toLowerCase()}
              smooth='{true}'
              duration={900}
            >
              {map}
              <span className='absolute bottom-0 left-0 w-full h-1 bg-[#2ebfa5] transform scale-x-0 origin-top transition-transform duration-500 group-hover:scale-x-100'></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px]  duration-300 bg-blue-600 '>
            <a
              className='flex justify-between items-center w-full'
              href='https://www.linkedin.com/in/patrick-macabulos-developer/'
              target='blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333] '>
            <a
              className='flex justify-between items-center w-full'
              href='https://github.com/psmacabulos'
              target='blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#528d81] '>
            <a
              className='flex justify-between items-center w-full'
              href='https://1drv.ms/b/s!Ak1jT-_MMdUugq1WDTD3lzIZxpe3Lg?e=Ty8fiZ'
              target='blank'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#232936] '>
            <Link
              className='flex justify-between items-center w-full'
              to='contact'
              smooth='{true}'
              duration={900}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
