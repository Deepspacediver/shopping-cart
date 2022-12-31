import ProductsContainer from "./ProductsContainer";
import birdProducts from "../../../utils/birdProducts";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Products Container tests", () => {
  test("if renders heading", () => {
    render(<ProductsContainer />);

    expect(
      screen.getByRole("heading", { name: /Bird Posters/ })
    ).toBeInTheDocument();
  });

  test("if renders description", () => {
    render(<ProductsContainer />);

    expect(
      screen.getByTestId("description", {
        name: /Collection of Posters with Exotic Birds from all over the world/,
      })
    ).toBeInTheDocument();
  });

  test("if renders products given an array of products", () => {
    render(<ProductsContainer />);

    expect(
      screen.getByRole("heading", { name: /Red Macaw/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Lanius/ })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Bird Of Paradise/ })
    ).toBeInTheDocument();
  });
});
