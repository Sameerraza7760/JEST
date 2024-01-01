import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Class38 from "./Class38";

test("testing a class 38", async () => {
  userEvent.setup();
  render(<Class38 />);
  const btn = screen.getByText("Click me");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
