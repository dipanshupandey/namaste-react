
import React from "react";
import ReactDOM from "react-dom/client";

const Logo=()=>
    (
        <a className="active" href="#home" id="logo">LOGO</a>
    )

const Search=()=>
    (
        <div >
            <input id="searchBar" type="text" placeholder="Search.." />
        </div>
    )


const Icon=()=>
    (
        <div id="icon">
           <i class="fa-solid fa-user"></i>
            </div>
    )

const Header=()=>
    (
        <div id="nav">
            
            <Logo/>
            <Search/>
            <Icon/>
        </div>
    )

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);
