import logo from './assets/assets/assets_frontend/logo.svg';
import profile_pic from './assets/assets/assets_frontend/profile_pic.png';
import dropdown_icon from './assets/assets/assets_frontend/dropdown_icon.svg';
import header_img from './assets/assets/assets_frontend/header_img.png';
import group_profiles from './assets/assets/assets_frontend/group_profiles.png';
import arrow_icon from './assets/assets/assets_frontend/arrow_icon.svg';
import appointment_img from './assets/assets/assets_frontend/appointment_img.png';
import verified_icon from './assets/assets/assets_frontend/verified_icon.svg';
import about_img from './assets/assets/assets_frontend/contact_image.png';
import contact_img from './assets/assets/assets_frontend/contact_image.png';
import Dermatologist from './assets/assets/assets_frontend/Dermatologist.svg';
import Gynecologist from './assets/assets/assets_frontend/Gynecologist.svg';
import Neurologist from './assets/assets/assets_frontend/Neurologist.svg';
import Pediatricians from './assets/assets/assets_frontend/Pediatricians.svg';

import doc2 from './assets/assets/assets_frontend/doc2.png'
import doc3 from './assets/assets/assets_frontend/doc3.png'
import doc4 from './assets/assets/assets_frontend/doc4.png'
import doc5 from './assets/assets/assets_frontend/doc5.png'
import doc6 from './assets/assets/assets_frontend/doc6.png'
import doc8 from './assets/assets/assets_frontend/doc8.png'
import doc9 from './assets/assets/assets_frontend/doc9.png'
import doc10 from './assets/assets/assets_frontend/doc10.png'

const assets = { logo, profile_pic, dropdown_icon, header_img, group_profiles, arrow_icon, appointment_img, verified_icon ,about_img, contact_img, Dermatologist, Gynecologist, Neurologist, Pediatricians};

const doctors = [
   {
     id: "doc2",
     name: "Dr. Emily Larson",
     speciality: "Gynecologist",
     experience: 15,
     image: doc2,
     address: {
       line1: "456 Oak Ave",
       line2: "Springfield, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc3",
     name: "Dr. Sarah Patel",
     speciality: "Dermatologist",
     experience: 7,
     image: doc3,
     address: {
       line1: "789 Pine Ln",
       line2: "Hill Valley, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc4",
     name: "Dr. Christopher Lee",
     speciality: "Pediatricians",
     experience: 12,
     image: doc4,
     address: {
       line1: "321 Elm St",
       line2: "Smallville, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc5",
     name: "Dr. Jennifer Garcia",
     speciality: "Neurologist",
     experience: 18,
     image: doc5,
     address: {
       line1: "654 Maple Dr",
       line2: "Metropolis, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc6",
     name: "Dr. Andrew Williams",
     speciality: "Neurologist",
     experience: 5,
     image: doc6,
     address: {
       line1: "987 Oak St",
       line2: "Gotham City, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc8",
     name: "Dr. Timothy White",
     speciality: "Gynecologist",
     experience: 11,
     image: doc8,
     address: {
       line1: "789 Willow Rd",
       line2: "Crystal Lake, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc9",
     name: "Dr. Ava Mitchell",
     speciality: "Dermatologist",
     experience: 9,
     image: doc9,
     address: {
       line1: "2468 Main St",
       line2: "Anytown, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
   {
     id: "doc10",
     name: "Dr. Jeffrey King",
     speciality: "Pediatricians",
     experience: 6,
     image: doc10,
     address: {
       line1: "1357 Oak St",
       line2: "Smallville, USA"
     },
     docSlots: [
       [{ datetime: new Date(2025, 4, 11, 9, 0) }, { datetime: new Date(2025, 4, 11, 10, 0) }, { datetime: new Date(2025, 4, 11, 11, 0) }],
       [{ datetime: new Date(2025, 4, 12, 9, 0) }, { datetime: new Date(2025, 4, 12, 10, 0) }, { datetime: new Date(2025, 4, 12, 11, 0) }],
       [{ datetime: new Date(2025, 4, 13, 9, 0) }, { datetime: new Date(2025, 4, 13, 10, 0) }, { datetime: new Date(2025, 4, 13, 11, 0) }],
       [{ datetime: new Date(2025, 4, 14, 9, 0) }, { datetime: new Date(2025, 4, 14, 10, 0) }, { datetime: new Date(2025, 4, 14, 11, 0) }],
       [{ datetime: new Date(2025, 4, 15, 9, 0) }, { datetime: new Date(2025, 4, 15, 10, 0) }, { datetime: new Date(2025, 4, 15, 11, 0) }],
       [{ datetime: new Date(2025, 4, 16, 9, 0) }, { datetime: new Date(2025, 4, 16, 10, 0) }, { datetime: new Date(2025, 4, 16, 11, 0) }],
       [{ datetime: new Date(2025, 4, 10, 9, 0) }, { datetime: new Date(2025, 4, 10, 10, 0) }, { datetime: new Date(2025, 4, 10, 11, 0) }],
     ],
   },
 ];
  export {assets , doctors };