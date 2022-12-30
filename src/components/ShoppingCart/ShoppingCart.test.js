import ShoppingCart from "./ShoppingCart";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ContextWrapperProp,} from "../../utils/testProps";

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

jest.mock(
  "../CartProduct/CartProduct",
  () =>
    ({ id, name, amount, handleIncrement, handleDecrement }) =>
      (
        <div data-testid="products" data-id={id}>
          <button onClick={handleIncrement}>+</button>
          <p data-testid="amount-display">{amount}</p>
          <button onClick={handleDecrement}>-</button>
        </div>
      )
);

describe("Shopping cart products display", () => {
  test("if renders two products", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <ShoppingCart />
      </ContextWrapperProp>
    );

    const products = screen.getAllByTestId("products");
    expect(products.length).toEqual(stateProp.length);
  });

  test("if incrementing count changes displaying value", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <ShoppingCart />
      </ContextWrapperProp>
    );

    const products = screen.getAllByTestId("products");
    const paradiseBirdField = products[0];
    const paradiseIncrementBtn = within(paradiseBirdField).getByRole("button", {
      name: "+",
    });
    userEvent.click(paradiseIncrementBtn);
    expect(
      within(paradiseBirdField).getByTestId("amount-display").textContent
    ).toBe("6");
  });

  test("if decrementing changes displaying value", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <ShoppingCart />
      </ContextWrapperProp>
    );

    const yellowBirdField = screen.getAllByTestId("products")[1];
    const yellowDecrementBtn = within(yellowBirdField).getByRole("button", {
      name: "-",
    });
    userEvent.click(yellowDecrementBtn);
    const amountDisplay = within(yellowBirdField).getByTestId("amount-display");

    expect(amountDisplay.textContent).toEqual("1");
  });

  test("if decrementing below 1 removes product", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <ShoppingCart />
      </ContextWrapperProp>
    );

    const yellowBirdField = screen.getAllByTestId("products")[1];
    const yellowDecrementBtn = within(yellowBirdField).getByRole("button", {
      name: "-",
    });
    userEvent.click(yellowDecrementBtn);
    expect(yellowBirdField).toBeInTheDocument();
    userEvent.click(yellowDecrementBtn);
    expect(yellowBirdField).not.toBeInTheDocument();
  });
});
