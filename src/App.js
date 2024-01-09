import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { useState, useContext, useEffect } from "react";

// import Grocery from "./components/Grocery";
const AppLayout = () => {


    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Mayank Joshi",
        };
        setUserName(data.name)
    }, [])
    return <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
            <Header />
            <Outlet />

        </div>
    </UserContext.Provider>
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
            }
        ],
        errorElement: <Error />,
    },


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)   
