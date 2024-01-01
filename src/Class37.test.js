import { render, screen, within } from "@testing-library/react";
import Class37 from "./Class37";

test("testing a class 37", () => {
  render(<Class37 />);
  const text = screen.getByText("parient");
  let subChild = within(text).getByText("Chaild1");
  let subChild2 = within(text).getByText("Child2");
  expect(text).toBeInTheDocument();
});
