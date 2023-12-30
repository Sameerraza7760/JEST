import { render, screen } from "@testing-library/react";
import Class22 from "./Class22";

test("class 22 for test", () => {
  render(<Class22 />);

  const getAllLabel = screen.getAllByLabelText("username");
  const getAllCheckBox=screen.getAllByLabelText("Skills")
  // expect(getAllLabel[2]).toBeInTheDocument();
  for (let i = 0; i < getAllLabel.length; i++) {
    expect(getAllLabel[i]).toBeInTheDocument();
    expect(getAllLabel[i]).toHaveValue("sameer")
  }

  for (let i = 0; i < getAllCheckBox.length; i++) {
   expect(getAllCheckBox[i]).toBeInTheDocument()
//    expect(get)
    
  }
});
