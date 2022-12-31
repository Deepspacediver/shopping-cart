import Checkout from "./Checkout";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Static display", () => {
  test("if displays checkout button", () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", { name: /Checkout/ })
    ).toBeInTheDocument();
  });

  test("if displays continue shopping button", () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", { name: /Continue Shopping/ })
    ).toBeInTheDocument();
  });
});
