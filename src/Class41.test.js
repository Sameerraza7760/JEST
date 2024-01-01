import { render, screen } from "@testing-library/react";
import Class41 from "./Class41";

test("Props testing"),
  () => {
    const name = "Sameer";
    render(<Class41 name={name} />);

    const user = screen.getByText(`UserName is :${name}`);
    expect(user).toBeInTheDocument();
  };
