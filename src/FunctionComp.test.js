import { render,fireEvent,screen } from "@testing-library/react";
import App from "./App";
import FunctionComp from "./FunctionComp";


// import function heree
// import handleOtherMethod from "./helper" orr custom hook

test("method testing case1",()=>{
    render(<FunctionComp/>)
    const btn=screen.getByTestId("btn1")
    fireEvent.click(btn)
    expect(screen.getByText("hello").toBeInTheDocument())
})


test("method testing case2",()=>{
   expect(handleOtherMethod()).toMatch('hi')
})

//WHAT IS SYMANTIC AND NON SYMANTIC

//SO ANS ISDESCRIBE BROWSER AND YOU FOR EXAMPLE BUTTON LIKE IF YOU MAKE A BUTTON SO BROWSER KNOW THAT AND YOU ALSO KNOW WHEN YOU SEE WEB THIS IS BUTTON
// AND OTHER NON  SYMANTIC NON SYMANTIC IS ALSO WHEN THE YOU DONT KNOW AFTER SEE WEBSITE THAT WHAT IS TAG OF OF THIS TEXT IN NON SYMANTICC