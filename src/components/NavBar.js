import React from "react";
import '../nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function NavBar() {

const  handleTitle=()=>
{

}



    return (
        <nav className="nav">
            <div className="nav_Container">
                <h4 onClick={handleTitle} style={{cursor:"pointer"}}>
                    <Link className="nav_Link" to={"/"}>BloodBank.com</Link></h4>
                <ul>
                    <li><Link to={'/'} className="nav_Link">Home</Link></li>
                    <li><Link to={'Donor'} className="nav_Link">Donor</Link></li>
                    <li><Link to={'Aboutus'} className="nav_Link"> About Us </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
