import React from "react";
import ReactDOM from "react-dom/client";

// const Heading=()=>{
//     return <h1>namaste react from functional component</h1>;

// }

const Title=<h1> Gruss Gott Dipanshu </h1>;

let number=1000;
const Heading=()=> (
<div>
    <h1>{console.log(number)}</h1>
    {Title}
    <h1>namaste react from functional component</h1>
    <h2>!!!!!</h2>
</div>);
// console.log(<h1>namaste react from functional component</h1>)
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactHeading);
root.render(<Heading/>);
