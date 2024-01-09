import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 font-medium">
                    <li className="px-2 hover:bg-gray-100">
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-2 hover:bg-gray-100"><Link to="/">Home</Link></li>
                    <li className="px-2 hover:bg-gray-100"><Link to="/About">About us</Link></li>
                    <li className="px-2 hover:bg-gray-100"><Link to="/Contact">Contact us</Link></li>
                    <li className="px-2 hover:bg-gray-100"><Link to="/Grocery">Grocery</Link></li>

                    <li className="px-2 hover:bg-gray-100">Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;