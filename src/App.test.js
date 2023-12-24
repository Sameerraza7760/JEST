
//CLASS 1



import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />); //ITS IMPORT TO RENDER A COMPONENT
//   const linkElement = screen.getByText(/learn react/i); ///IN THIS WE CHEAK THAT LEARN REACT WORD AVAILIBLIBLE ON SCREEN OD APP.JS OR NOT
//     expect(linkElement).toBeInTheDocument();                                                        ///IF AVAILIBLE SO PASS ELSE FAILED TEST
// });


// //IN THIS 2 SUITS MEAN TWO FILES



//CLASS 2
// import { render,screen } from "@testing-library/react";

// import App from "./App";


// test("Test first react app case",()=>{
//   render(<App/>)
//   const text=screen.getByText(/Sameer raza/i);
//   const title=screen.getByTitle('hi broo')  // /THIS CHEAK CASE SENSITIVITY/ 
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//    //IN THIS CASE SCREEN GET ALL OVER TXT DATA ANY THING IN CONST TEXT THE DATA ABOUT ANY FILE THAT YOU GIVE 
//   //BUT IN THIS CASE YOU GIVE APP.JS 
// })


// CLASS 3

// import { render,screen } from "@testing-library/react";

// import App from "./App"

// test("Testing Input box",()=>{
//   render(<App/>)
//   let cheakInput=screen.getByRole("textbox");
//   let placeholder=screen.getByPlaceholderText("Enter your Name")
  
//   expect(cheakInput).toBeInTheDocument()
//   expect(placeholder).toBeInTheDocument()
//   expect (cheakInput).toHaveAttribute("name","username") // IN THIS CHEAK HE CHEAK THE ATTRIBUT IN INPUT THAT NAME=USERNAME HAVE OR NOT
//   expect (cheakInput).toHaveAttribute("id","userId") 
//   expect (cheakInput).toHaveAttribute("value","sameer") 

// })

// CLASS 4
//WHY WE CHEAK PLACEHOLDER FOR TEST ITS A GOOD SO WHEN MORE DEELOPERS ARE WORK ON SAME PROJECT AND ONE DEVELOPER BY MISTAKE 
//CHANGE THE PLACEHOLDER LIKE ENTERNAME AND REMOVE ERNTER YOUR USERNAME AND WHEN USER COME ON WEBBSITE HE WATCH THAT ENTER NAME 
// SO ITS THE BUG INTRODUCED FOR USER AND THEN USERKNOW THAT USERNMAE THATS WHYY JEST IMPORTANT


// CLASS 5
//IF WE RUN EVERY TEST TOGETHER SO WE WRITE (NPM RUN TEST) BY DEFAULT RUN EVERY TEST TOGETHER  

// and if you run only one file so you run (NPM RUN TEST (FILENAME))
// and if you run more files together so you type (w) and then chooose (a) so you run every files together
// and if you  run only failed file so you type (w) and then choose (f)
// type q for quit the watch mode 
//  and enter for npm run test 
// and if type p for filter the file that you want to used as test 
// and if you type t so jest filter the function that you want to test


// CLASS 6 



//DESCRIBE

// IN THIS CASE WE MAKE A TEST GROUP FOR MAINTAIN THE CODE AND MAINTAIN THE TEST FOR EXAMPLE ONE COMPOENNT HAVE TO MUCH UI
// SO IN THIS CASE WE MAKE  A GROUPS LIKE UI GROUP IN ONE SIDE LOGIC GROUP IS ONE SIDE AND API GORIUP IN ONE SIDE 
describe('UI test case group', () => {
  test('TestCase1', () => {
    render(<App />);
    let checkInput = screen.getByRole('textbox');
    let placeholder = screen.getByPlaceholderText('Enter your Name');
    expect(checkInput).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute('name', 'username');
    expect(checkInput).toHaveAttribute('id', 'userId');
    expect(checkInput).toHaveAttribute('value', 'sameer');
  });

  test('TestCase2', () => {
    render(<App />);
    let linkElement = screen.getByText(/learn react/i); 
    expect(linkElement).toBeInTheDocument();
  });
});



describe.only('Api test case group', () => {
  test('TestCase1', () => {
    render(<App />);
    let checkInput = screen.getByRole('textbox');
    let placeholder = screen.getByPlaceholderText('Enter your Name');
    expect(checkInput).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute('name', 'username');
    expect(checkInput).toHaveAttribute('id', 'userId');
    expect(checkInput).toHaveAttribute('value', 'sameer');
  });

  test('TestCase2', () => {
    render(<App />);
    let linkElement = screen.getByText(/learn react/i); 
    expect(linkElement).toBeInTheDocument();
  });
});

// SO THIS THE GROUP OF TESTING THAT YOU MADE
// IF YOU ONLY RUN A ONE  GROUP LIKE API SO YOU NEED TO ADD ONLY AAFTER DESCRIBE SO YOU RUN ONLY THIS GROUP
// AND IF YOU SKIP THE GROUP LIKE  FAILED GROUP SO YOU NEED TO ADD SKIP FOR WHOSE GROUP AFTER DESCRIBE
// YOU CAN ADD A ANOTHER DESCRIBE IN DESCRIBE GROUP LIKE THATS CALLED NESTED DESCRIBE