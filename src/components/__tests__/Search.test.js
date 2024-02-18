import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../__tests__/mocks/mockdata.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    })
});



it("should render the body component with search ", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>

    ));

    const searchbtn = screen.getByRole("button", { name: "Search" });

    expect(searchbtn).toBeInTheDocument();
})
it("should render the body component with search ", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>

    ));
    const searchbtn = screen.getByRole("button", { name: "Search" });
    const searchText = screen.getByTestId("searchInput");

    fireEvent.change(searchText, { target: { value: "pizza" } })
    fireEvent.click(searchbtn)
    // screen should load 2 cards
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(1);
})