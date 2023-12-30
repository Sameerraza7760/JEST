import { render, screen, configure } from "@testing-library/react";
import Class32 from "./Class32";

test("testclass32", () => {
  render(<Class32 />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("sameer");
  expect(input).toBeEnabled;
  expect(input).toHaveAttribute("id");
  expect(input).toHaveClass("inputClass");
});

test("negativeTEsting", () => {
  render(<Class32 />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).not.toHaveClass('btn')
  expect(button).not.toHaveAttribute('id')
});
