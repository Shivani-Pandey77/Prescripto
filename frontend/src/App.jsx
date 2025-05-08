import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { doctors } from './assets';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import Myappointment from './pages/Myappointment';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Route changed to:', pathname);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ doctors }}>
      <div className="bg-yellow-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4"></h1>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/my-appointments" element={<Myappointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
