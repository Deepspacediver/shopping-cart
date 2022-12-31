import CartItem from "./CartItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const productProp = { name: "someName" };
let amountStateMock = 3;
const incrementMock = jest.fn();
const decrementMock = jest.fn();
const removeMock = jest.fn();

describe("Product component html elements", () => {
  test("if renders heading with passed name", () => {
    render(<CartItem name={productProp.name} />);

    expect(screen.getByRole("heading").textContent).toMatch(/someName/);
  });

  test("if renders Image component", () => {
    render(<CartItem name={productProp.name} src={productProp.src} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("if increment/deceremnt buttons are present", () => {
    render(<CartItem />);

    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  test("if remove button is present", () => {
    render(<CartItem />);

    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  test("if amount value is displayed", () => {
    render(<CartItem amount={amountStateMock} />);

    expect(screen.getByTestId("amount-display").textContent).toEqual(
      String(amountStateMock)
    );
  });
});

describe("Calling dispatches", () => {
  test("if events fire", () => {
    render(
      <CartItem
        handleIncrement={incrementMock}
        handleDecrement={decrementMock}
        handleRemove={removeMock}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });
    const removebutton = screen.getByRole("button", { name: "Remove" });
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);
    userEvent.click(removebutton);
    expect(incrementMock).toBeCalledTimes(1);
    expect(decrementMock).toBeCalledTimes(1);
    expect(removeMock).toBeCalledTimes(1);
  });
});
