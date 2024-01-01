import { logRoles, prettyDOM, render } from "@testing-library/react";
import Class43 from "./Class43";

test("testing a class 43", () => {
  const { container, debug } = render(<Class43 />);
  console.log(prettyDOM(container));
  debug(); //  also console.the all compoennt
  logRoles(container); // it console the redeble form ui
  //   logless 1000 also console the 1000 of lines
});

{
  /* <div>
<div>
  <h1>
    pretyDom
  </h1>
  <h1>
    Automatic Debugging
  </h1>
  <button>
    Click me
  </button>
</div>
</div> */
}
//pretty dom console all you compoent
