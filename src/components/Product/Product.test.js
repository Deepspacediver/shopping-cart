import Product from "./Product";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextWrapperProp } from "../../utils/testProps";
import userEvent from "@testing-library/user-event";

const objProp = {
  id: "bird-of-paradise",
  name: "Bird Of Paradise",
  price: 130.0,
  src: "/BirdOfParadise",
};

describe("Static elements render", () => {
  test("if renders heading", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(
      screen.getByRole("heading", { name: /Bird Of Paradise/ })
    ).toBeInTheDocument();
  });

  test("if renders image", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders input", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton").value).toBe("1");
  });
  test("renders increment button", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });
  test("renders decrement button", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  test("renders add button", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    expect(
      screen.getByRole("button", { name: /Add To Cart/ })
    ).toBeInTheDocument();
  });

  test("renders price", () => {
    render(
      <ContextWrapperProp>
        <Product price={objProp.price} />
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("price").textContent).toBe(String(objProp.price));
  });
});

describe("User events", () => {
  test("if increment button changes input value", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );
    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByRole("spinbutton").value).toBe("2");
  });

  test("if decrement button changes input value", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));

    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByRole("spinbutton").value).toBe("3");
  });

  test("if decrement button does not change to input value to 0", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByRole("spinbutton").value).toBe("1");
  });

  test("if typing changes value", () => {
    render(
      <ContextWrapperProp>
        <Product name={objProp.name} />
      </ContextWrapperProp>
    );

    userEvent.type(screen.getByRole("spinbutton"), "12");
    expect(screen.getByRole("spinbutton").value).toBe("112");
  });
});
