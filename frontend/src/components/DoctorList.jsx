import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorList = ({ doctors }) => {
  const navigate = useNavigate();
  return (
    <>
      {doctors.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition duration-200"
          onClick={() => navigate(`/appointment/${item.id}`)}
        >
          <img
            className="bg-blue-50 rounded-t-xl h-60 w-full object-cover object-position-top hover:translate-y-[-5px] transition duration-200"
            src={item.image}
            alt=""
          />
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.speciality}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorList;
