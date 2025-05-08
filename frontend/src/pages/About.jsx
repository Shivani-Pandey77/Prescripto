import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets.js'; 

const About = () => {
  return (
    <div className='px-4 md:px-20'>
      <div className='text-center text-2xl pt-10 text-gray-500 font-semibold'>
        <p>ABOUT <span className='text-blue-500 font-50'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img
          src={assets.about_image}
          alt='About Prescripto'
          className='w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg'
        />
        <div className='space-y-4 text-gray-700 text-base'>
          <p>
            Welcome to <strong>Prescripto</strong>, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it
            comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h3 className='text-xl font-semibold'>Our Vision</h3>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge
            the gap between patients and healthcare providers, making it easier for you to access the care you
            need, when you need it.
          </p>
        </div>
      </div>
      <div className ='text-2xl my-4' >
        <p>WHY<span>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className ='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
