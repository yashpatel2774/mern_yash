import React from 'react'
import { useState } from 'react'

const Login = () => {

   const [user, setUser] = useState({ 
      email: '',
      password: ''
    })

    const handleInput = (e) => {
      const { name, value } = e.target
      setUser({
        ...user,
        [name]: value
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()  
      console.log(user);
      setUser({
        email: '',  
        password: ''
      })
    }

 return (
  <div className="min-h-screen flex items-center justify-center">
    <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Side - Image */}
      <div className="flex items-center justify-center">
        <img
          className="w-full max-h-[500px] object-cover"
          src="/images/Login.jpg"
          alt="Do Login"
        />
      </div>

      {/* Right Side - Form */}
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-[#646cff]">Login form</h2>
        <br />

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
              className='bg-gray-600 border-black rounded'
              type="email"
              name='email'
              value={user.email}
              placeholder='Enter the Email'
              id='email'
              required
              autoComplete='off'
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input
              className='bg-gray-600 border-black rounded'
              type="password"
              name='password'
              value={user.password}
              placeholder='Enter the password'
              id='password'
              required
              minLength={3}
              maxLength={6}
              onChange={handleInput}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <button className='bg-[#646cff] text-white mx-auto p-1 m-2 px-4 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]' type='submit'>
              Login Now
            </button>
          </div>

        </form>
      </div>
    </section>
  </div>
)
}

export default Login