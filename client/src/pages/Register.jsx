import React, { useState } from 'react'
// import { email, set } from 'zod'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const Register = () => {

  const [user, setUser] = useState({
    username: '',   
    email: '',
    phone: '',
    password: ''
  })

  const navigate = useNavigate();

  const {storeTokenInLocalStorage} = useAuth();

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

    try {

    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(user),
    });

    const res_data = await response.json();
    console.log("res_date", res_data.message);

    if (response.ok) {
      storeTokenInLocalStorage(res_data.token);
         setUser({
      username: '',
      email: '',
      phone: '',
      password: ''
    });
    toast.success("Registartion successfully..")
    navigate('/');
    } else {
      toast.error(res_data.extraDetails);
    }
  }
  catch (error) {
     toast.error("Invalid credentials...")
    console.log("register", error)
  }
   
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div>
          <img
            className="max-w-[500px] max-h-[500px] object-cover"
            src="/images/register.png"
            alt="register"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 flex flex-col justify-center mt-9">
          <h2 className="text-2xl font-bold mb-4 text-[#646cff]">Registration form</h2>
          <br />

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
            <label htmlFor="username">Username</label>
            <input className='bg-gray-600 border-black rounded' type="text" name='username' value={user.username}
             placeholder='Enter the username' id='username' required autoComplete='off' onChange={handleInput}/>
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input className='bg-gray-600 border-black rounded' type="email" name='email' value={user.email}  
            placeholder='Enter the Email' id='email' required autoComplete='off' onChange={handleInput} />
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor="phone">Phone</label>
            <input className='bg-gray-600 border-black rounded' type="number" name='phone' value={user.phone}
             placeholder='Enter the phone' id='phone' required autoComplete='off' onChange={handleInput}/>
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input className='bg-gray-600 border-black rounded' type="password" name='password' value={user.password} 
            placeholder='Enter the password' id='password' required  minLength={3}  maxLength={10} onChange={handleInput}/>
            </div>

            <div className='flex flex-col gap-1'>
              <button className='bg-[#646cff] text-white mx-auto p-1 m-2 px-4 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]' type='submit'>Register Now</button>
            </div>

          </form>
        </div>
      </section>
    </div>
  )
}

export default Register
