import { render, screen } from "@testing-library/react";
import CLASS18 from "./CLASS18";

test("class18 test", () => {
  render(<CLASS18 />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("hi");
  expect(inputField).toHaveValue("hi");
});

test("class18 test button", () => {
  render(<CLASS18 />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
