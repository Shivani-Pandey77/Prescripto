import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { doctors } from '../assets'; // Make sure this path is correct
import DoctorList from '../components/DoctorList';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

 const applyFilter = () => {
    const allowedSpecialities = ['gynecologist', 'dermatologist', 'pediatricians', 'neurologist'];
    let filteredDoctors = doctors.filter(doc => allowedSpecialities.includes(doc.speciality.toLowerCase()));

    if (speciality) {
      filteredDoctors = filteredDoctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase());
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
        <p>Speciality: {speciality}</p> {/* Updated from ID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-4">
            <div className="flex flex-col gap-4 text-sm">
{['Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist'].map(spec => (
                <p
                  key={spec}
                  onClick={() => navigate(`/doctors/${spec.toLowerCase().replace(/ /g, '-')}`)}
                  className="mb-2 rounded-md p-2 text-center cursor-pointer hover:bg-gray-200"
                >
                  {spec}
                </p>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DoctorList doctors={filterDoc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
