import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About us</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>

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