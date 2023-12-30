import { render, screen } from "@testing-library/react";
import Class31 from "./Class31";

test("class31 for testing", () => {
  render(<Class31 />);
  const para = screen.getByText("hi broo", { exact: false });
  expect(para).toBeInTheDocument()
});


test("test case with regex", () => {
    render(<Class31 />);
    const div = screen.getByText(/Hello?/i);
    expect(div).toBeInTheDocument()
  });
  