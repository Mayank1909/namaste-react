import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// react element

// react component

const Title = () => {
    return (<h1 className="head" tabIndex="5">
        Namaste react using JSX
    </h1>)
};
// component composistion 
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React functional components</h1>
        </div>
    )
};
const heading = (
    <h1>Namaste react </h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< HeadingComponent />)   
