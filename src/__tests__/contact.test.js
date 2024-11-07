import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should render contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


// import "@testing-library/jest-dom" ;
// /* eslint-disable no-undef */
// import { Sum } from "../Sum";

// test("Calculate sum of two numbers", () => {
//   const result = Sum(2, 3);
//   expect(result).toBe(5);
// });
