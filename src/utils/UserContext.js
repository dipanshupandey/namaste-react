import { createContext } from "react";

const UserContext=createContext({
    id:0,
    name:"default"
});

export default UserContext;