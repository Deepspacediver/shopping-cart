import Image from "./Image";
import { screen, render } from "@testing-library/react";

const mockProps = {
  src: "myMockedSrcToImg",
  alt: "mockedImageDescription",
};

describe("Image test", () => {
  test("if image renders with proper src", () => {
    render(<Image src={mockProps.src} />);
    expect(screen.getByRole("img").src).toMatch(/myMockedSrcToImg/);
  });

  test("if image renders with proper alt", () => {
    render(<Image alt={mockProps.alt} />);
    expect(screen.getByRole("img").alt).toMatch(/mockedImageDescription image/);
  });
});
