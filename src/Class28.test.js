import { render, screen } from "@testing-library/react";
import Class28 from "./Class28";

test("class 28 testing for title", () => {
  render(<Class28 />);

  const title = screen.getAllByTitle("icon-element");
  for (let index = 0; index < title.length; index++) {
   expect(title[index]).toBeInTheDocument()
    
  }
//   expect(title).toBeInTheDocument()
});
