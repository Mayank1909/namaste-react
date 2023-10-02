import React from "react";
import ReactDOM from "react-dom/client";


// React element 
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀"); // this an obejct

//JSX thsi jsx code is transpiled before going to js by parcel bable
const jsxheading = <h1 className="heading">Namaste React 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);