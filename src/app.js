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
// import Groceries from "./components/Groceries";

const Groceries= lazy(()=>import("./components/Groceries"));

const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
                path:"/groceries",
                element:
                <Suspense fallback={<h1>LAZY LOADING</h1>}>
                <Groceries/>
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

