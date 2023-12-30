import { getByRole, render } from "@testing-library/react";
import Class20 from "./Class20";

test("class20 allbyrole",()=>{
    render(<Class20/>)  // value in array
    const buttons=screen.getAllByRoll("button")
    // expect(buttons[1]).toBeInTheDocument();
    // expect(buttons[2]).toBeInTheDocument();

    for (leti=0,i<buttons.lenth;i++){
        expect(buttons[i].getAllByRoll())
    }


    const option=screen.getAllByRoll("option")
    
    for (leti=0,i<buttons.lenth;i++){
        expect(buttons[i].getAllByRoll())
    }

})
