import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header=()=>{
    const [loginVal,setloginVal]=useState("login");
    return <div className="nav">
            <div className="logo-container">
           
            <img className="logoIcon" src={LOGO_URL} alt="Company Logo" />
            </div>

            <div className="links">
            <ul className="navLinks">
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/about"> ABOUT US</Link> </li>
                <li><Link to="/contact"> CONTACT </Link></li>
                <li><Link to="/cart"> CART </Link></li>
                <button className="loginButton"
                onClick={()=>{
                    loginVal=="login"?setloginVal("logout"):setloginVal("login")
                }}
                >{loginVal}</button>
            </ul>
            </div>
    </div>
}

export default Header;