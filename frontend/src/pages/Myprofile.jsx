import React, { useState } from 'react';
import { assets } from '../assets.js';

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: '57th Cross, Richmond Circle, Church Road, London',
    gender: 'Male',
    birthday: '20 July, 2024',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = () => {
    // Implement save logic here
    setIsEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
          <div className="flex items-center space-x-6">
            <img
              className="h-24 w-24 rounded-full object-cover shadow-md"
              src={userData.image}
              alt=""
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Contact Information</h3>
            <p className="text-gray-500 mt-2">Email ID: {userData.email}</p>
            <p className="text-gray-500">Phone: {userData.phone}</p>
            <p className="text-gray-500">Address: {userData.address}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Basic Information</h3>
            <p className="text-gray-500 mt-2">Gender: {userData.gender}</p>
            <p className="text-gray-500">Birthday: {userData.birthday}</p>
          </div>
          <div className="mt-6 flex justify-between">
            {isEditMode ? (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSave}
              >
                Save Information
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
