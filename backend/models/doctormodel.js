import mongoose from "mongoose";

const doctorschema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String, required:true},
    Image:{type:String, required:true},
    speciality:{type:String, required:true},
    degree:{type:String, required:true},
    experience:{type:String, required:true},
    about:{type:String, required:true},
    available:{type:boolean, required:true},
    fees:{type:number, required:true},
    address:{type:object, required:true},
    date:{type:number, required:true},
    slots_booked:{type:object, default:{}},
},{minimize:false})

const doctorModel = mongoose.model.doctor || mongoose.model('doctor',doctorSchema)

export default doctorModel