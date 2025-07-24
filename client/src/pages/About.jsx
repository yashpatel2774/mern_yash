import React from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'

const About = () => {

  const {user} = useAuth();

  return (
    <div>
    <main className="min-h-screen flex items-center flex-col mt-6">
      <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-7">

          <div className='flex flex-col justify-center mt-5'>
            <p className='mb-2'>Welcome, { user ? `${user.username} to our Website` : "to out Website"}</p>
            <div className="flex flex-col text-4xl font-bold text-[#E7E7E7]">
              <h1>Why Choose Us?</h1>
            </div>

            <p className='line-clamp-2 text-gray-300 mt-7'>
                Expertise: Our team consists of seasoned professionals with extensive experience in the IT industry, ensuring high-quality solutions tailored to your needs. 
            </p>

            <p className='line-clamp-2 text-gray-300 mt-9'>
                Customization: We understand that every business is unique. We offer personalized services that align with your specific requirements and goals.
            </p>

            <p className='line-clamp-2 text-gray-300 mt-9 mb-3'>
                Customer-Cenric Approch: We prioritize your satisfaction. Our dedicated support team is always ready to assist you, ensuring a smooth and hassle-free experience.
            </p>

            <p className='line-clamp-2 text-gray-300 mt-9 mb-4'>
                Affordability: We offer competitive pricing without compromising on quality. Our solutions are designed to provide value for your investment.
            </p>

            <p className='line-clamp-2 text-gray-300 mt-9'>
                Reliability: Count on us to be there when you need us. We're commited to ensuring your IT environment is reliable and available 24/7.
            </p>



            <div className='flex items-center gap-3 mt-6'>
              <Link to='/contact'><button className='bg-[#646cff] p-1 px-4 m-2 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]'> Connect Now </button></Link>
              <Link to='/service'><button className='p-1 m-2 border px-4 border-[#646cff] rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#646cff] hover:text-white'> Learn More </button></Link>
            </div>
            
          </div>


          <div className='flex items-center justify-center'>
            <img className='max-w-[400px] max-h-[400px]' src="/images/about.png" alt="Home page side image" />
          </div>
        </section>

         <section className="w-full max-w-6xl container mx-auto bg-[#F5F3FF] text-black px-4 py-5 mt-12 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-600 text-center">
  
  <div className="text-lg py-2">
    <h2 className='font-bold text-3xl'>50+</h2>
    <p className='text-gray-600'>registered companies</p>
  </div>

  <div className="text-lg py-2">
    <h2 className='font-bold text-3xl'>100,000+</h2>
    <p className='text-gray-600'>happy clients</p>
  </div>

  <div className="text-lg py-2">
    <h2 className='font-bold text-3xl'>500+</h2>
    <p className='text-gray-600'>Well known Developers</p>
  </div>

  <div className="text-lg py-2">
    <h2 className='font-bold text-3xl'>24/7</h2>
    <p className='text-gray-600'>Service</p>
  </div>

</section>

    </main>
    </div>
  )
}

export default About
