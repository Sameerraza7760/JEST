import { fireEvent, render,screen } from "@testing-library/react";
import Event from "./event";

// class 12
// beforeAll(()=>{
//     console.log("***** before all test files one time only *****");
//like db clean function here
// })
// and only run one time before test cases run
// beforeEach(()=>{
//     console.log("***** before all test every time  *****");
// })
test("Test event react app case", () => {
    console.log("test1");
    render(<Event />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input.value).toBe("a");
});

test("test click event",()=>{
    console.log("test2");
    render(<Event/>);
    let button=screen.getByRole("button")
    fireEvent.click(button);
    expect(screen.getByText("update Data")).toBeInTheDocument()
})

///////////////////////////////////////////
// class 12

 afterEach(()=>{
    console.log("_______ after each it run every each _____");
 })

 afterAll(()=>{
    console.log("___after all it run only one time");
 })

 // when one test run it run and then another test run and then it run


////////////////////////////////////////////

// class 11

// you can give the file name like \
// filename.test.js
//filename.spec.js
//filename.spec.jsx 

// and you give the folder like __tests__
//in this folder that all files conside as a test file like any if you give app.js who also consider a test file in this 










