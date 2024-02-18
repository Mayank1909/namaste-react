import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
describe("Contact us page test cases", () => {
    it("should load contacts us component", () => {
        render(<Contact />);
        // whatever is render over here it will get loaded to jsdom 
        // also here jsx need to be enabled
        const button = screen.getByRole("button");
        //assertion
        expect(button).toBeInTheDocument();


    });
    it("should load submit inside component", () => {
        render(<Contact />);
        const para = screen.getByText("Submit");
        expect(para).toBeInTheDocument();

    });
    it("should load placeholder name ", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("name")
        expect(name).toBeInTheDocument();
    });
    it("should load inout boxes name ", () => {
        render(<Contact />);
        //QUERING
        const inputboxes = screen.getAllByRole("textbox")
        expect(inputboxes.length).toBe(2);
    });
});


// describe is used for grouping various tests
// it also used in place of test.