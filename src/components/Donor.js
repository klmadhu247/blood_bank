import React from "react";
import '../donor.css'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];



const schema = yup.object().shape({
    fullName:yup.string().required('Full Name Mandatory'),
    email: yup.string().email().required('Please Enter a valid Email'),
    bloodType:yup.string().oneOf(bloodTypes,'Please Select a valid Blood type').required('Blood Type is required'),
    date:yup.date().required('Date is Required'),
    location:yup.string().required('Loation is required')
})


function Donor(){

    const {register,handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)})



    return(
        <div>
            <h3 style={{marginTop:'100px',color:'red'}}>Donor Registration Form</h3>

            <form onSubmit={handleSubmit((data)=>{
                alert('Thanks for the Registration')
            })} className="form_Style">
                <h3 style={{color:'red',textAlign:"center"}}>Book Your Blood Donation Slot</h3>
                <h6 style={{textAlign:"center"}}>Thank you for your interest in donating blood! Please fill out the form below to book a slot for your donation.</h6>
             <div style={{margin:'auto'}}>  
                
                <label>Full Name</label>
                <input {...register('fullName')} type="text" placeholder="Enter your Name"/>
                {errors?.fullName && <p>{errors.fullName.message}</p>}

                <label>Email</label>
                <input {...register('email')} type="email" placeholder="Enter your Email"/>
                {errors?.email&&<p>{errors.email.message}</p>}



                <label>Blood Type</label>
                <select  {...register('bloodType')} type="select" >
                    <option value=''>Select your Blood Type</option>
                    {bloodTypes.map(bt=><option value={bt}>{bt}</option>)}

                </select>
                {errors.bloodType&& <p>{errors.bloodType.message}</p>}


                <label>Preferd Donation Date</label>
                <input {...register('date')} type="date"/>
                {errors.date && <p>{errors.date.message}</p>}


                <label>Prefered Donation Location</label>
                <input {...register('location')} type="text" placeholder="Enter Location"/>
                {errors?.location &&<p>{errors.location.message}</p>}


                <input  type="submit" className="btn btn-primary mt-3"/>
                </div> 
            </form>


        </div>
    )
}
export default Donor;