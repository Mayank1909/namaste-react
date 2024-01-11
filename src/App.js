import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { useState, useContext, useEffect } from "react";
// import { Provider } from 'react-redux'
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
const AppLayout = () => {


    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Mayank Joshi",
        };
        setUserName(data.name)
    }, [])
    return (<Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />

            </div>
        </UserContext.Provider>
    </Provider>)
};
const Grocery = lazy(() =>
    import("./components/Grocery"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<shimmer></shimmer>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestroMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)   
