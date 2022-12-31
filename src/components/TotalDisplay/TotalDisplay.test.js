import TotalDisplay from "./TotalDisplay";
import { ContextWrapperProp } from "../../utils/testProps";

import { render, screen } from "@testing-library/react";

const stateProp = [
  { price: 10, amount: 3 },
  { price: 20, amount: 1 },
  { price: 15, amount: 2 },
];

describe("TotalDispla", () => {
  test("if displays total with appropariate amount", () => {
    render(
      <ContextWrapperProp stateProp={stateProp}>
        <TotalDisplay />
      </ContextWrapperProp>
    );

    expect(screen.getByTestId("total-display").textContent).toBe("Total: $80");
  });
});
