import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bd from '../Assets/bd.jpg'
import '../home.css';
import { Link } from "react-router-dom";

function Home (){
    return(
        <div>
           <div className="home_Container">
            <div className="img_Container">
            <img src={bd} className="img_top"></img> </div>

            <h5 className="quote">Your donation can make a difference in someone's life today.</h5>
         <button className="btn btn-danger p-2 donor_Button"><Link to={'Donor'} style={{textDecoration:'none', color:'white'}}>Become a Donor</Link></button>
         <h2 style={{textAlign:"center", marginTop:'20px'}}>Why Donate Blood?</h2>
        <h5 style={{textAlign:"center",marginTop:'20px'}}>Blood donation is a simple act that saves millions of lives. By donating blood, you help those in need during surgeries, accidents, and medical conditions that require transfusions.</h5>

        <div className="Donation_Stats">
            <h1 style={{textAlign:'center',paddingTop:'20px'}}>Donation Stats</h1>
            <div style={{display:"flex", justifyContent:"space-around", marginTop:'50px', marginBottom:'10px'}}>
            <div style={{ display:'flex',flexDirection:"column", alignItems:"center"}}>
                <h3 style={{color:'red'}}>1200+</h3>
                <h5>Successful Donations</h5>
            </div>
            <div style={{ display:'flex',flexDirection:"column", alignItems:"center"}}>
                <h3 style={{color:'red'}}>900+</h3>
                <h5>Registerd Donors</h5>
            </div>
            <div style={{ display:'flex',flexDirection:"column", alignItems:"center"}}>
                <h3 style={{color:'red'}}>800+</h3>
                <h5>Patients Helped</h5>
            </div>
            </div>
        </div>
        <h2 style={{textAlign:"center", marginTop:'20px'  }}>How to Donate</h2>
<h6 style={{textAlign:"center", lineHeight: '1.8'}}>Check the eligibility requirements for donating blood.<br/>
Book an appointment at your nearest blood donation camp.<br/>
Come prepared, stay hydrated, and donate!</h6>

<button className="btn btn-danger ms-5 mt-2 btn-lg mb-4"><Link to={'Donor'} style={{textDecoration:'none', color:'white'}}>Learn More About the process</Link></button>
<footer>
    <p style={{backgroundColor:"black", color:'white',width:
        '95%',margin:'auto',textAlign:"center",padding:'30px'}}>Join our community of life-savers. Follow us on social media or contact us for more information.</p>
</footer>

           </div>
        </div>
    )
}
export default Home;