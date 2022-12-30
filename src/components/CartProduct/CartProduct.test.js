import CartProduct from "./CartProduct";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const productProp = { name: "someName" };
let amountStateMock = 3;
const incrementMock = jest.fn();
const decrementMock = jest.fn();

describe("Product component html elements", () => {
  test("if renders heading with passed name", () => {
    render(<CartProduct name={productProp.name} />);

    expect(screen.getByRole("heading").textContent).toMatch(/someName/);
  });

  test("if renders Image component", () => {
    render(<CartProduct name={productProp.name} src={productProp.src} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("if increment/deceremnt buttons are present", () => {
    render(<CartProduct />);

    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  test("if amount value is displayed", () => {
    render(<CartProduct amount={amountStateMock} />);

    expect(screen.getByTestId("amount-display").textContent).toEqual(
      String(amountStateMock)
    );
  });
});

describe("Calling dispatches", () => {
  test("if events fire", () => {
    render(
      <CartProduct
        handleIncrement={incrementMock}
        handleDecrement={decrementMock}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);
    expect(incrementMock).toBeCalledTimes(1);
    expect(decrementMock).toBeCalledTimes(1);
  });
});
