import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Login=()=>{
    const info=useContext(UserContext);
    const [username,setusername]=useState("");
    
   
    
    return <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold ">Login</h1>
        <label htmlFor="" className="text-xl pt-3">Username</label>
        <input type="text" className="h-10 w-[400px] p-[20px] m-[20px] bg-gray-200"  onChange={(e)=>{
            setusername(e.target.value)
        }}/>
         <button className="bg-orange-400 text-2xl text-white p-2 rounded-xl cursor-pointer" onClick={()=>{
            info.setName(username);
         }}>Login</button>
    </div>
};

export default Login;
