import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const {storeTokenInLocalStorage} = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target; 
    setUser({
      ...user,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: "POST",
           headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(user),
        });

        if (response.ok) {
          const res_data = await response.json();
          console.log("login_data", res_data);

          storeTokenInLocalStorage(res_data.token);
          
           setUser({
            email: '',
            password: ''
          });
          alert("Login successfully")
          console.log(response);
          navigate('/');
        }
        else {
          alert("Invalid Credentials..")
          console.log("Invalid credentials..")
        }
    }
    catch (error) {

    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side - Image */}
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] object-cover"
            src="/images/register.png"
            alt="Do Login"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#646cff]">Login form</h2>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input
                className='bg-gray-600 border border-black rounded px-3 py-2'
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
                className='bg-gray-600 border border-black rounded px-3 py-2'
                type="password"
                name='password'
                value={user.password}
                placeholder='Enter the password'
                id='password'
                required
                minLength={3}
                maxLength={10}
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
  );
};

export default Login;
