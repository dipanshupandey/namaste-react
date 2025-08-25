import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement("h1",
                                         { id: "parent" },
                                        "Namste React by REACT");



const JSXHeading=<h1 id="parent">Namste React BY JSX</h1>;
console.log(reactHeading);
console.log(JSXHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactHeading);
root.render(JSXHeading);
