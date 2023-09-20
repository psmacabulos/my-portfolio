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

  return (
    <div className='fixed w-full flex justify-between items-center px-4  h-[80px]  text-gray-300  bg-[#0a192f]/95 z-2'>
      <div>
        <img src={Logo} alt='logo' style={{ width: "100px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link className='hover:color-sky-700' to='home' smooth='{true}' duration={900}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth='{true}' duration={900}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth='{true}' duration={900}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth='{true}' duration={900}>
              Work
            </Link>
          </li>
          <li>
            <Link to='contact' smooth='{true}' duration={900}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

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
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth='{true}' duration={900}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {" "}
          <Link onClick={handleClick} to='about' smooth='{true}' duration={900}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {" "}
          <Link onClick={handleClick} to='skills' smooth='{true}' duration={900}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {" "}
          <Link onClick={handleClick} to='work' smooth='{true}' duration={900}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {" "}
          <Link onClick={handleClick} to='contact' smooth='{true}' duration={900}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px]  duration-300 bg-blue-600 '>
            <a className='flex justify-between items-center w-full' href='/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333] '>
            <a className='flex justify-between items-center w-full' href='/'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#528d81] '>
            <a className='flex justify-between items-center w-full' href='/'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#232936] '>
            <a className='flex justify-between items-center w-full' href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
