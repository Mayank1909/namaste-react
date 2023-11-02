import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About us</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;