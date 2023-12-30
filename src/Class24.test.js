import { render,screen } from "@testing-library/react"
import Class24 from "./Class24"

test("class24 get by text",()=>{
    render(<Class24/>)
    const btnText=screen.getByText('Login')
    expect(btnText).toBeInTheDocument()
})



test("class24 get by text p",()=>{
    render(<Class24/>)
    const ptag=screen.getByText('p tag testing')
    const headingtag=screen.getAllByText('heading tesing')
    expect(ptag).toBeInTheDocument()
    expect(ptag).toHaveClass('para-class')
    expect(ptag).toHaveAttribute('id')
    for (let i = 0; i < headingtag.length; i++) {
      expect(headingtag[i]).toBeInTheDocument()
        
    }
  
})