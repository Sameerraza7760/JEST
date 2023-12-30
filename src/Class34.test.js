import { getByText, render, screen } from "@testing-library/react";
import Class34 from "./Class34";

test("testing a class 34", () => {
  render(<Class34 />);
  //   const dv = screen.getByText("Login");
  //   expect(dv).toBeInTheDocument();

  const dv = screen.queryByText("Login");
  expect(dv).not.toBeInTheDocument();
});
//query is testing the hide element as well
