{/* <div id="parent">
    <div id="child">
        <h1>gruss gott</h1>
    </div>
</div> */}

const heading1=React.createElement("h1",{},"gruss gott");
const heading2=React.createElement("h1",{},"auffweidersehen");
const child=React.createElement("div",{id:"child"},[heading1,heading2]);
const parent=React.createElement("div",{id:"parent"},child);

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);