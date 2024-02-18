import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";



it("should load a header compoent with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // const login = screen.getByText("Login");
    const login = screen.getByRole("button", { name: "Login" })

    expect(login).toBeInTheDocument();

});
it("should load a header compoent with Cart item 0 button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartitem = screen.getByText("Cart (0 items)");

    expect(cartitem).toBeInTheDocument();

})
it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginbutton = screen.getByRole("button", { name: "Login" })
    fireEvent.click(loginbutton)
    const logoutbutton = screen.getByRole("button", { name: "Logout" })

    expect(logoutbutton).toBeInTheDocument();

})