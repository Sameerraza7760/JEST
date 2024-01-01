import { render, screen } from "@testing-library/react";
import Class35 from "./Class35";

test("class 35testing", async () => {
  render(<Class35 />);
  const para = await screen.findByText("Data Found", {}, { timeout: 3000 });
  expect(para).toBeInTheDocument();
});
