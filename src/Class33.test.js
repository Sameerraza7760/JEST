import { render, screen } from "@testing-library/react";
import Class33 from "./Class33";

test("testing a class 33", () => {
  render(<Class33 />);
  //   const dv = screen.getByText((content, element) =>
  //     content.startsWith("Hello world")
  //   const dv = screen.getByText((content, element) => content.endsWith("sameer"));
  const dv = screen.getByText((content, element) => {
    // return content.includes("ll");
    // return content.length("11");
  });
});
