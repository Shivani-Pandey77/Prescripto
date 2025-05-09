import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const related = doctors.filter(
        (doc) => doc.speciality === speciality && doc.id !== docId
      );
      setRelDocs(related);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="my-16 px-4 md:px-10">
      <div className="text-center text-gray-900 mb-8">
        <h2 className="text-3xl font-semibold">Related Doctors</h2>
        <p className="mt-2 text-sm text-gray-600">
          Simply browse through our extensive list of top doctors and find the one that's right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relDoc.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="border border-blue-100 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
            onClick={() => navigate(`/appointment/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover bg-blue-50"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="mt-2 font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {relDoc.length > 5 && (
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/doctors')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedDoctors;
