import { render,screen } from "@testing-library/react"
import Placeholder from "./Placeholder"

// test("Placeholder testing",()=>{
//     render(<Placeholder/>)
//     const inputPlaceholder=screen.getByPlaceholderText('enter your name')
//     expect(inputPlaceholder).toHaveValue('sameer')
//     expect(inputPlaceholder).toBeInTheDocument()
// })

test("Placeholder All testing",()=>{
    render(<Placeholder/>)
    const inputPlaceholder=screen.getAllByPlaceholderText('enter your name')

    for (let i = 0; i < inputPlaceholder.length; i++) {
         expect(inputPlaceholder[i]).toBeInTheDocument()
        
    }
    
 
})