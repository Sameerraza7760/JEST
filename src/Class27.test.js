import { render, screen } from "@testing-library/react";
import Class27 from "./Class27";

test("testing a class 27", () => {
  render(<Class27 />);

  // Test input
  const input = screen.getAllByDisplayValue("Sameer");
  expect(input[0]).toBeInTheDocument();

  for (let index = 0; index < input.length; index++) {
    expect(input[index]).toBeInTheDocument();
  }
  // Test textarea
  //   const textarea = screen.getByDisplayValue("Sameer");
  //   expect(textarea).toBeInTheDocument();

  // Uncomment the following lines to test the radio button
  // const radio = screen.getByDisplayValue("male");
  // expect(radio).toBeInTheDocument();
});
