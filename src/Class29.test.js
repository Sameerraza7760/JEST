import { render, screen } from "@testing-library/react";
import Class29 from "./Class29";

test("testing a class 29", () => {
  render(<Class29 />);
  //   const altimage = screen.getByAltText("bikeimage");
  //   expect(altimage).toBeInTheDocument();

  //if we have many images with same alt text so we used loop

  const Allaltimage = screen.getAllByAltText("bikeimage");
  for (let index = 0; index < Allaltimage.length; index++) {
    expect(Allaltimage[index]).toBeInTheDocument();
  }
});
