import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Myappointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">My Appointments</h1>
      {doctors.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <img
              className="h-24 w-24 rounded-full object-cover mr-4"
              src={item.image}
              alt={item.name}
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.speciality}</p>
              <p className="text-gray-500">
                Address: {item.address.line1}, {item.address.line2}
              </p>
              <p className="text-gray-500">
                <span>Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">
              Pay Online
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Myappointment;
