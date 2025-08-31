import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [loginVal,setloginVal]=useState("login");
    return <div className="nav">
            <div className="logo-container">
            {/* <img src={logo2} alt="" /> */}
            <img className="logoIcon" src={LOGO_URL} alt="Company Logo" />
            </div>

            <div className="links">
            <ul className="navLinks">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li>CART</li>
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