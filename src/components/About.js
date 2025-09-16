import User from "./User";
import React from "react";

class About extends React.Component{
    
    constructor(){
        super()
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent mounted");
    }
    render(){
        console.log("parent render")
        return <div className="user">
        
        <h2 className="userHEad">here are some of the Creaters</h2>
        <User name={"Dipanshu"} location={"Dehradun"} company={"apple"} className="user-card"/>
        <User name={"Bhawna"} location={"Dehradun"} company={"apple"}  className="user-card"/>
    </div>    
    }
}

// const About=()=>{
//     return <div>
//         <h1>about page</h1>
//         <h2>here are some of the users</h2>
//         <User name={"Pipanshu"} location={"Dehradun"} company={"apple"}/>
//     </div>
// };

export default About;