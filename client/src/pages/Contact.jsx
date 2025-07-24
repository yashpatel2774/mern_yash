import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'

const Contact = () => {

  const [contact, setContact] = useState({
    username: '', 
    email: '',
    message: '' 
  })

  const [userData, setUserData] = useState(true)

  const {user} = useAuth();

  useEffect(()=>{
if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUserData(false)
  }
  }, [user, userData])
  

  const handleInput = (e) => {
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(contact);
    setContact({
      username: '',
      email: '',
      message: ''
    })
  }
  return (
    <>
     <main className="min-h-screen flex flex-col items-center justify-center">
  <section className="w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
    {/* Left Side - Image */}
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-4xl font-bold mb-7 text-white mt-3 p-3 mr-40">Contact Us</h2>
      <img
        className="max-w-[450px] max-h-[450px] object-cover"
        src="/images/info.png"
        alt="Contact page"
      />
    </div>

    {/* Right Side - Form */}
    <div className="p-8 flex flex-col justify-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 mt-1">
          <label htmlFor="username">Username</label>
          <input
            className="bg-[#3D3D3D] border-black rounded mt-1"
            type="text"
            name="username"
            value={contact.username}
            id="username"
            required
            autoComplete="off"
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#3D3D3D] border-black rounded mt-1"
            type="email"
            name="email"
            value={contact.email}
            id="email"
            required
            autoComplete="off"
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-[#3D3D3D] border-black rounded min-h-[100px] mt-1"
            name="message"
            value={contact.message}
            id="message"
            cols={30}
            rows={7}
            required
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col gap-1">
          <button
            className="bg-[#646cff] text-white mx-auto p-1 m-2 px-4 rounded-xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#4f4fff]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>

 <div className="w-full mx-auto mt-12 px-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14874.614486002913!2d72.87209981185076!3d21.245579736761716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1753266838378!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
</main>

    </>
  )
}

export default Contact