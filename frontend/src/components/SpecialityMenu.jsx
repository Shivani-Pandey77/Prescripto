    import React from 'react'
import { specialityData } from "../assets/assets/assets_frontend/assets";
import { Link } from 'react-router-dom'
    
    const SpecialityMenu = () => {
      return (
        <div>
            <div id="#Speciality" className="text-center py-5">
                <h1 className="text-3xl font-semibold mb-2">Find by Speciality</h1>
                <p className="text-sm text-center sm:w-1/3 mx-auto">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                <div className="flex justify-center flex-wrap overflow-scroll">
                    {specialityData.map(( item,index)=>(
                <Link onClick={()=>scrollTo({top: 0, behavior: 'smooth'})} key={index} to={`/doctors/${item.speciality}`} className="m-2 flex flex-col item-center text-sm  cursor-pointer flex shrink-0 hover:translate-y-[-10px] transition-all duration 500">
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality}  />
                    <p className="text-sm">{item.speciality}</p>
                </Link>
                    ))}
                </div>
            </div>
        </div>
      );
    };
    
    export default SpecialityMenu
