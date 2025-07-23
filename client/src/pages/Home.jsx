import React from 'react'
import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center flex-col mt-4">
        <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-7">
          <div>
            <p className='mb-2'>We are the Best IT Company</p>
            <div className="flex flex-col text-3xl font-bold text-[#E7E7E7]">
              <h1>WELCOME TO YASH</h1>
              <h1>TECHNICAL</h1>
            </div>

            <p className='line-clamp-4 text-gray-300 mt-6'>
              Are you ready to take your business to the next level? Join us at Yash Technical, where innovation meets excellence. 
              Our team of experts is dedicated to delivering cutting-edge solutions tailored to your unique needs. 
              Whether you're looking for web development, mobile app creation, or digital marketing strategies, we've got you covered. Let's embark on a journey of success together!
            </p>


            <div className='flex items-center gap-3 mt-6'>
              <Link to='/contact'><button className='bg-[#646cff] p-1 px-4 m-2 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]'> Connect Now </button></Link>
              <Link to='/service'><button className='p-1 m-2 border px-4 border-[#646cff] rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#646cff] hover:text-white'> Learn More </button></Link>
            </div>
            
          </div>


          <div>
            <img src="https://media.istockphoto.com/id/2151904502/photo/closeup-young-man-software-developers-using-computer-to-write-code-application-program-for-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=A7XEESVl47DOthvfuYqYhUGp7iRf8FmPjR8cdh4HeIQ=" alt="Home page side image" />
          </div>
        </section>


        {/* Middle Section */}


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



        {/* Last section */}


        <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-12">
         <div>
          <img src="https://media.istockphoto.com/id/2205982417/photo/web-ui-ux-design-web-development-concept-a-web-developer-works-on-a-website-surrounded-by.jpg?s=2048x2048&w=is&k=20&c=Va6LBWp6plPdsebmEi7gxFPrDvMeXdGiUhZnvAuHlP8=" alt="Something" />
         </div>

          <div className='mt-6'>
            <p className='mb-1'>We are here to help you</p>
            <div className="flex flex-col text-3xl font-bold text-[#E7E7E7]">
              <h1>Get Started Today</h1>
            </div>

            <p className='line-clamp-4 text-gray-300 mt-4'>
              Ready to take the first step towords a more efficient and secure IT infrastructure?
               Contact us today to learn more about our services and how we can help your business thrive in the digital age.
            </p>


            <div className='flex items-center gap-3 mt-6'>
              <Link to='/contact'><button className='bg-[#646cff] p-1 px-4 m-2 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]'> Connect Now </button></Link>
              <Link to='/service'><button className='p-1 m-2 border px-4 border-[#646cff] rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#646cff] hover:text-white'> Learn More </button></Link>
            </div>
            
          </div>

         
        </section>
      </main>
    </> 
  )
}

export default Home
