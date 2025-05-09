import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('handleClickOutside called');
      if (showMenu && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, showMenu]);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-32 cursor-pointer' src={assets.logo} alt="logo" />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
        <NavLink to='/doctors'><li className='py-1'>DOCTORS</li></NavLink>
        <NavLink to='/about'><li className='py-1'>ABOUT</li></NavLink>
        <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setShowMenu(!showMenu)} className="text-primary">
          <span className="material-icons">menu_icon</span>
        </button>
      </div>

      {/* Profile or Create Account button */}
      <div className="flex items-center gap-4 group cursor-pointer">
        {
          token ? (
            <div className='relative flex items-center gap-2' onClick={(e) => {
              e.preventDefault();
              console.log('onClick called');
              setShowMenu(!showMenu);
            }} ref={dropdownRef}>
              {/* Profile and Dropdown icon */}
              <img className='w-20 rounded-full' src={assets.profile_pic} alt="PROFILE" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="DROPDOWN" />

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-4 ${showMenu ? 'block' : 'hidden'} flex flex-col gap-2 min-w-48 bg-gray-100 rounded-md p-4 shadow-lg text-base font-medium text-gray-600 z-10`}>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>MyAppointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
              CREATE ACCOUNT
            </button>
          )
        }
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-2">
          <NavLink to='/' className='py-2'>HOME</NavLink>
          <NavLink to='/doctors' className='py-2'>DOCTORS</NavLink>
          <NavLink to='/about' className='py-2'>ABOUT</NavLink>
          <NavLink to='/contact' className='py-2'>CONTACT</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
