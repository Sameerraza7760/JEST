import { render } from "@testing-library/react"
import Class36 from "./Class36"

test("test a class 36",()=>{
    render(<Class36/>)
    const element=document.querySelector(".Custom")
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Custom query")
    
})