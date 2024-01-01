import { render, screen } from "@testing-library/react";
import Class40 from "./Class40";
import userEvent from "@testing-library/user-event";
import { act } from "react-test-renderer";

test("testing a class 40", async () => {
  render(<Class40 />);
  userEvent.setup();
  const input = screen.getByRole("textbox");
  await act(async () => {
    await userEvent.type(input, "sameer");
  });
  expect(screen.getByText("sameer")).toBeInTheDocument()
});

//when we work on update state in project so used act
