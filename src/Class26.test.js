import { render,screen,configure } from "@testing-library/react"
import Class26 from "./Class26"



configure({testIdAttribute:'id'})
test("testing a class 26",()=>{
    render(<Class26/>)
    const id=screen.getByTestId('para-id')
    expect(id).toBeInTheDocument()

})