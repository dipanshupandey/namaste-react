import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Contact=()=>{
    const info=useContext(UserContext);
    console.log(info,"??");
    return <div>
        <h1>this is contact page</h1>
        <h1>{info.name}</h1>
    </div>;
}

export default Contact;