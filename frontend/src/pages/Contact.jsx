import React from 'react';
import { assets } from '../assets/assets/assets_frontend/assets.js';

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center text-5xl font-semibold text-gray-700 mb-8">
        CONTACT <span className="text-blue-500">US</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <div className="mb-6">
            <h2 className="text-5xl font-semibold text-gray-600 mb-3">Our OFFICE</h2>
            <p className="text-gray-500 text-3xl">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-500 mt-2 text-3xl">
              Tel: (415) 555‑0132<br />
              Email: greatstackdev@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-gray-600 mb-3">Careers at PRESCRIPTO</h2>
            <p className="text-gray-500 mb-4 text-3xl">Learn more about our teams and job openings.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-3xl text-white font-bold py-2 px-4 rounded">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
