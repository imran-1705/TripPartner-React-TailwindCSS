import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
     <TopBanner text='About'/>
     <div className='max-w-7xl mx-auto my-10'>
      <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
        <div className='flex-1'>
          <div className='relative'>
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className='rounded-lg'/>
            <div className='absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
              HOW WE ARE BEST <br /> FOR TRAVEL!
            </div>
          
          </div>
          <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>How We Are Best For Travel !</h1>
          <p className='text-gray-500'>We are passionate travelers dedicated to helping you discover the world, transforming your wanderlust into unforgettable adventures.. We believe travel enriches the soul and our mission is to craft unique, personalized journeys that connect you with new cultures, breathtaking landscapes, and authentic experiences. From our own travels, we've learned that the best trips are built on a foundation of trust and shared enthusiasm for exploration, which is why we are committed to providing you with expert guidance and seamless service.</p></div>
        <div className='flex-1'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={trip} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destination</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={price} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={time} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About