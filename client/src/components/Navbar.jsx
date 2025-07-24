import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {

  const { isLoggedIn } = useAuth();
  return (
    <>
      <header> 
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 mt-7">
          
          <Link to="/" className="text-xl font-bold text-[#646cff]">
            Yash Mern
          </Link>

          <nav>
            <ul className="flex items-center gap-6 text-[#646cff] font-medium text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/service">Services</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              {isLoggedIn ?  ( 
                <li>
                  <Link to="/logout">Logout</Link>
                </li> 
              )
              : (
                <>
              <li>
                <Link to="/register">Register</Link>
              </li>

              <li>
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
