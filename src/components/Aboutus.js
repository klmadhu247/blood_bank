import React from "react";
import { Link } from "react-router-dom";

function Aboutus (){
    return(
        <div>
            <div style={{marginTop:'150px'}}>

            
          <h1 style={{color:'red',textAlign:"center"}}>About Us</h1> 
          <h4 style={{color:'grey',textAlign:"center"}}>Saving lives, one drop at a time. Our mission is to make blood donation easy, accessible, and impactful. </h4> 

          <h2 style={{color:'red', marginTop:'80px', marginLeft:'30px', marginBottom:'40px'}}>Our Mission</h2> 
<h5 style={{color:'grey', marginLeft:'30px'}}>We are dedicated to bridging the gap between blood donors and those in need. Our platform connects donors with blood banks and hospitals, ensuring that every donation makes a difference. By providing reliable information, convenient scheduling, and real-time tracking, we aim to make the donation process smooth and transparent.</h5>


<h2 style={{color:'red', marginTop:'80px', marginLeft:'30px', marginBottom:'40px'}}>Our Vison</h2> 
<h5 style={{color:'grey', marginLeft:'30px'}}>Our vision is to create a world where no life is lost due to a shortage of blood. We strive to build a community of regular donors and ensure that blood is always available for those who need it the most. Through awareness campaigns, community events, and partnerships with healthcare organizations, we work tirelessly to achieve this goal.</h5>


<div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: 'grey', marginTop: '40px', marginBottom: '20px' }}>
    <h2 style={{ color: 'red', textAlign: "center", paddingTop: '20px', paddingBottom: '20px' }}>Join Us in Saving Lives</h2>
    <h5 style={{ paddingBottom: '20px' }}>
        Whether you're a donor, volunteer, or advocate, you can help us achieve our mission. Together, we can make sure that no one has to wait for the blood they need. Become a part of our community today.
    </h5>

    <button className="btn btn-danger p-2 donor_Button1" style={{ marginTop: '-10px', marginBottom: '20px' }}>
        <Link to='/Donor' style={{ textDecoration: 'none', color: 'white' }}>Become a Donor</Link>
    </button>

    
</div>


        </div>
        </div>
    )
}
export default Aboutus;