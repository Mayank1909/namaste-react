// suppose we have to creasgte nested divs like 
{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2> </h2>
    </div>
</div> */}
// if we are asked to create a siblings then we wi;; use [] to make it and pass all the createelemtn in it . 

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hello i am h1 in  nested div "), React.createElement("h2", {}, "hello i am h2 in nested div ")]))


const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },  // whatever is passed its and attributes
    "Hello world from react");
// console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);