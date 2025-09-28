import React, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Restraunt from "./components/Restraunt";
import UserContext from "./utils/UserContext";
import { useState } from "react";

import { Provider } from "react-redux";
import store from "./utils/store";
// import Login from "./components/Login";

const Login= lazy(()=>import("./components/Login"));

const App=()=>{
    const [name,setName]=useState("default");
    return (
        <Provider store={store}>
        <UserContext value={{name,setName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
          </UserContext>
        </Provider>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/login",
                element:
                <Suspense fallback={<h1>LAZY LOADING</h1>}>
                <Login/>
                </Suspense>
            },
            {
                path:"/restraunt/:resId",
                element:<Restraunt/>
            }
        ]
    },
    

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);

