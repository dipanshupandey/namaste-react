import { LOGO_URL } from "../utils/constants";
const Header=()=>{
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
                
            </ul>
            </div>
    </div>
}

export default Header;