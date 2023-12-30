import { render,screen } from "@testing-library/react"
import Class19 from "./Class19"

test("btn1",()=>{
    render(<Class19/>)
    const btn=screen.getByRole('button',{name:"Click 1"})
    const btn2=screen.getByRole('button',{name:"Click 2"})
    const input1=screen.getByRole('textbox',{name:"username"})
    const input2=screen.getByRole('textbox',{name:"username2"})
    const div1=screen.getByRole('dummy')
    expect(btn).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(div1).toBeInTheDocument()
   
})

// the symantic elemaent not get role