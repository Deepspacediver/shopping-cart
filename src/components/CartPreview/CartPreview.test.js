import CartPreview from "./CartPreview";
import { ContextWrapperProp } from "../../utils/testProps";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../Image/Image", () => () => <img src="prop" alt="prop" />);

const stateProp = [
  {
    id: "bird-of-paradise",
    name: "Bird Of Paradise",
    price: 130.0,
    amount: 5,
  },
  {
    id: "yellow-crested-cockatoo",
    name: "Yellow Crested Cockatoo",
    price: 248.0,
    amount: 2,
  },
];
describe("Cart preview", () => {
  test("if renders preview display", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <CartPreview />
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("cart-preview-display")).toBeInTheDocument();
    expect(screen.getByTestId("svg")).toBeInTheDocument();
  });

  test("if renders correct amount of items in preview", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <CartPreview />
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("cart-preview-display").textContent).toBe("7");
  });

  test("if renders empty preview if cart does not contain products", () => {
    render(
      <ContextWrapperProp stateProp={[]}>
        <CartPreview />
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("cart-preview-display").textContent).toBe("");
  });
});
