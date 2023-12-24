import { fireEvent, render,screen } from "@testing-library/react";
import Event from "./event";




test("Test event react app case", () => {
    render(<Event />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input.value).toBe("a");
});


test("test click event",()=>{
    render(<Event/>);
    let button=screen.getByRole("button")
    fireEvent.click(button);
    expect(screen.getByText("update Data")).toBeInTheDocument()
})