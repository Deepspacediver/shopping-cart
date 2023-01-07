import ShoppingCart from "../ShoppingCart";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ContextWrapperProp } from "../../../utils/testProps";
import "@testing-library/jest-dom";

const stateProp = [
  {
    id: "bird-of-paradise",
    name: "Bird Of Paradise",
    price: 130.0,
  },
  {
    id: "heavenly-cuckoo",
    name: "Heavenly Cuckoo",
    price: 98.0,
  },
];

describe("Conditional rendering of checkout", () => {
  test("if does not render checkout when empty cart", () => {
    render(
      <ContextWrapperProp stateProp={[]}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </ContextWrapperProp>
    );

    expect(screen.queryByTestId("purchase-wrapper")).not.toBeInTheDocument();
    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });

  test("if renders checkout when cart is not empty", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("purchase-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("empty-cart")).not.toBeInTheDocument();
  });
});
