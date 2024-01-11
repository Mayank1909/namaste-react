import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from 'react-redux';

const Header = () => {
    const [loginbtn, setloginbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);
    // selector
    const cartItems = useSelector((store) => store?.cart?.items);
    console.log(cartItems);
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

                    <li className="px-2 font-bold hover:bg-gray-100"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
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
{/* <Link to="/cart">Cart {cartItems.length} items</Link> */ }