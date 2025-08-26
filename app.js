import React from "react";
import  ReactDOM  from "react-dom/client";
import logo2 from './logo.png'; 


const Header=()=>{
    return <div className="nav">
            {console.log(logo2)}
            <div className="logo-container">
            <img src={logo2} alt="" />
            <img className="logoIcon" src="https://i.pinimg.com/736x/44/95/10/449510635385ed24bbb47456c6d0ec9b.jpg" alt="Company Logo" />
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

const App=()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);