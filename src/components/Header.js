import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header=()=>{
    const [loginVal,setloginVal]=useState("login");
    const [dark,setdark]=useState("☀️ light");
    return <div className="nav bg-white dark:bg-black border-b-amber-50 ">
            <div className="logo-container rounded-[100%]">
           
            <img className="logoIcon rounded-[100%]" src={LOGO_URL} alt="Company Logo" />
            </div>

            <div className="links">
            <ul className="navLinks text-black dark:text-white transition-colors">
                <li ><Link  to="/"> HOME </Link></li>
                <li ><Link  to="/about"> ABOUT US</Link> </li>
                <li ><Link  to="/contact"> CONTACT </Link></li>
                <li ><Link  to="/groceries"> GROCERIES </Link></li>
                <li ><Link  to="/cart"> CART </Link></li>
                <button className="loginButton"
                onClick={()=>{
                    loginVal=="login"?setloginVal("logout"):setloginVal("login")
                }}

                >{loginVal}</button>
                
                <button className="loginButton"
                onClick={()=>{
                    if(dark=="☀️ light")
                    {
                        setdark("🌙 dark");
                        document.documentElement.classList.add("dark");
                    }
                    else{
                        setdark("☀️ light");
                        document.documentElement.classList.remove("dark");
                    }
                }}
                >{dark}</button>
            </ul>
            </div>
    </div>
}

export default Header;