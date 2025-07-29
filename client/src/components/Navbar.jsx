import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {

  const { isLoggedIn } = useAuth();
  return (
    <>
      <header> 
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 mt-7">
          
          <Link to="/" className="text-xl font-bold text-[#646cff] hover:cursor-pointer hover:scale-110 transition-transform duration-300">
            Yash Mern
          </Link>

          <nav>
            <ul className="flex items-center gap-6 text-[#646cff] font-medium text-lg hover:cursor-pointer">
              <div>
                 <li className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/">Home</Link>
              </li>

              </div>
             
              <li className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/about">About</Link>
              </li>

              <li  className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/service">Services</Link>
              </li>

              <li  className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/contact">Contact</Link>
              </li>

              {isLoggedIn ?  ( 
                <li  className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                  <Link to="/logout">Logout</Link>
                </li> 
              )
              : (
                <>
              <li  className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/register">Register</Link>
              </li>

              <li  className="relative hover:after:content-[''] hover:scale-110 transition-transform duration-300 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#646cff]">
                <Link to="/login">Login</Link>
              </li>
               
               </>
            )
            }
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
