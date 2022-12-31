import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

jest.mock("../CartPreview/CartPreview", () => () => (
  <svg data-testid="svg"></svg>
));

describe("Navbar with route link", () => {
  test("if renders 3 navlinks", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getAllByTestId("navlink").length).toBe(3);
  });

  test("cartpreview visible", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByTestId("svg")).toBeInTheDocument();
  });
});
