import { render, screen } from "@testing-library/react";
import Class42 from "./Class42";
import userEvent from "@testing-library/user-event";

test("Class 42 for testing", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<Class42 testFunction={testFunction} />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(testFunction).toBeCalled();

  //   screen;
});
