import React from 'react'
import { assets } from '../assets.js'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/*----Left Side----*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> with Trusted Doctors
        </p>
        <div className="flex flex-col items-start">
          <img src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors.
            <br />
            Schedule your appointment hassle-free.
          </p>
          <a href="#Speciality" className="bg-blue-500 hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-4 rounded mt-7">
            Book Appointment <img src={assets.arrow_icon} alt="Arrow Icon" style={{width: '30px', height: '30px'}} />
          </a>
        </div>
      </div>

      {/*----Right Side----*/}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  )
}

export default Header
