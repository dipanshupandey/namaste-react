import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addCart,removeCart,clearCart } from "../utils/cartSlice";
import cartSlice from "../utils/cartSlice";
const Header=()=>{
    const cartItems=useSelector((state)=>state.cart.items);
    const dispatch=useDispatch();
    const {name}=useContext(UserContext);
    // console.log(name);
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
                <li ><Link  to="/login"> LOGIN </Link></li>
                <button onClick={()=>{
                    dispatch(addCart());
                }}>+</button>
                <li ><Link  to="/cart" > CART - ({cartItems}) </Link></li>
                <li>{name}</li>
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