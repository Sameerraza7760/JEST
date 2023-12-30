import { render, screen } from "@testing-library/react";
import Class21 from "./Class21";

test("class 21 getbylabeltext", () => {
  render(<Class21 />);
  let input = screen.getByLabelText("userName");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("sameer");
});

test("class 21 for inputcheakbox", () => {
  render(<Class21 />);
  let cheakbox = screen.getByLabelText("skills");
  expect(cheakbox).toBeInTheDocument();
  expect(cheakbox).toBeChecked
});
