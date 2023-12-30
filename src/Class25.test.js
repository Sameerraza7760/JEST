import { render, screen } from "@testing-library/react";
import Class25 from "./Class25";

test("testing class 25 ", () => {
  render(<Class25 />);
  const paraid = screen.getByTestId("para-test-id");
  expect(paraid).toBeInTheDocument();
});

test("testing heading class 25 ", () => {
  render(<Class25 />);
  const heaidngId = screen.getAllByTestId("heading-test-id");
  for (let i = 0; i < heaidngId.length; i++) {
    expect(heaidngId[i]).toBeInTheDocument();
  }
});
