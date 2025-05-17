import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { doctors } from '../assets/assets/assets_frontend/assets';
import {doctors} from '../assets';
import DoctorList from '../components/DoctorList';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    const allowedSpecialities = ['gynecologist', 'dermatologist', 'pediatricians', 'neurologist'];
    let filteredDoctors = doctors.filter(doc =>
      allowedSpecialities.includes(doc.speciality.toLowerCase())
    );

    if (speciality) {
      filteredDoctors = filteredDoctors.filter(
        doc => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
    }

    setFilterDoc(filteredDoctors);
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 max-w-7xl">
        <p className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Browse through the doctors' specialties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="bg-blue rounded-xl p-6 shadow-md border border-gray-200 sticky top-24 h-fit">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 text-center">
              Specializations
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              {['Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist'].map((spec) => (
                <p
                  key={spec}
                  onClick={() =>
                    navigate(`/Prescripto/doctors/${spec.toLowerCase().replace(/ /g, '-')}`)
                  }
                  className={`mb-1 rounded-md px-4 py-2 text-center cursor-pointer transition-colors duration-200 ${
                    speciality?.toLowerCase() === spec.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-300 hover:bg-blue-200'
                  }`}
                >
                  {spec}
                </p>
              ))}
            </div>
          </div>

          {/* Doctor list */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DoctorList doctors={filterDoc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
