import React from "react";
import  ReactDOM  from "react-dom/client";


const Header=()=>{
    return <div className="nav">
            <div className="logo-container">
            {/* <img src={logo2} alt="" /> */}
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

const Card=()=>(

        <div className="card">
            <div className="cardimage">
                <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2019-10-recipe-20-minute-cajun-chicken-pasta%2F20-Minute-Cajun-Chicken-Pasta_018" alt="IMAGE"  />
            </div>

            <div className="info">
                <h4>NAME</h4>
                <div className="rating-time">
                    <span>Ratings</span>
                    <span>25-30 mins</span>
                </div>
                <div>
                <h3>cuisine</h3>
                <h3>city</h3>
            </div>
            </div>

            
        </div>
    )


const Body=()=>{
    return <>            
                <div className="body" >
                <div className="search"> <input type="text" placeholder="search" /></div>
                <div className="restrauntContainer">
                   
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                  < Card/>
                </div>
                </div>
            </>

            
}

const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);