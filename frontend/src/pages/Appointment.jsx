import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets';
import RelatedDoctors from '../components/Relateddoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [groupedSlots, setGroupedSlots] = useState({});

  useEffect(() => {
    const doctor = doctors.find(doc => doc.id === docId);
    setDocInfo(doctor);

    if (doctor && doctor.docSlots) {
      const grouped = {};
      doctor.docSlots.flat().forEach(slot => {
        const date = new Date(slot.datetime);
        const dayLabel = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        if (!grouped[dayLabel]) grouped[dayLabel] = [];
        grouped[dayLabel].push(slot);
      });
      setGroupedSlots(grouped);
    }
  }, [docId, doctors]);

  const getFormattedTime = (datetime) => {
    const d = new Date(datetime);
    let hours = d.getHours();
    let minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}${ampm}`;
  };

  return docInfo && (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          <div className="flex justify-center md:justify-start">
            <img src={docInfo.image} alt={docInfo.name} className="rounded-xl w-full bg-blue-500 max-w-md h-auto object-cover" />
          </div>
          <div className="py-4">
            <div className="text-5xl font-bold text-gray-800 flex items-center gap-2">
              {docInfo.name}
              <img src={assets.verified_icon} alt="Verified" className="w-7 h-8" />
            </div>
            <p className="text-gray-600 mt-1">{docInfo.degree} - {docInfo.speciality}</p>
            <button className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-md font-semibold mt-2">
              {docInfo.experience} Years Experience
            </button>
            <div className="mt-4">
              <h3 className="font-semibold mb-1 text-lg">About</h3>
              <p className="text-gray-700 text-2xl">
                {docInfo.about || "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies."}
              </p>
            </div>
            <p className="mt-4 text-3xl font-medium text-gray-800">Appointment fee: <strong>$50</strong></p>
          </div>
        </div>

        {/* Booking slots grouped by day */}
        <div className="p-8">
          <h2 className="bg-blue-400 hover:bg-blue-700 text-white text-2xl font-bold">Available Slots</h2>
          <div className="space-y-6">
            {Object.entries(groupedSlots).map(([day, slots], index) => (
              <div key={index}>
                <h3 className="text-md font-medium text-blue-600 mb-2">{day}</h3>
                <div className="flex flex-wrap gap-3">
                  {slots.map((slot, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border bg-white-50 text-sm text-gray-700 hover:bg-blue-400">
                      {getFormattedTime(slot.datetime)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(groupedSlots).length === 0 && (
              <p className="text-gray-500">No available slots found.</p>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded mt-6">
            Book Appointment
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    </div>
  );
};

export default Appointment;
