import RestroMenu from "../RestroMenu"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "./mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("should load restro menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestroMenu />
            </Provider>
        </BrowserRouter>));

    const accordationheader = screen.getByText("Love-Loaded Menu(8)");
    fireEvent.click(accordationheader);



    expect(screen.getAllByTestId("foodItems").length).toBe(8);
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button", { name: "ADD +" })
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();


});