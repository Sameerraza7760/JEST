import { render, screen } from "@testing-library/react";
import Class39 from "./Class39";
import userEvent from "@testing-library/user-event";

test("class 39 for testing", async () => {
  userEvent.setup();
  render(<Class39 />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "sameer");
  expect(screen.getByText("sameer")).toBeInTheDocument();
});
