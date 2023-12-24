import sum from "./sum"

test("testing sum function",()=>{
  let a=10
  let b=10
  let output=20
    expect(sum(a,b)).toBe(output)
})

test("testing sum function2",()=>{
    let a=100
    let b=10
    let output=110
      expect(sum(a,b)).toBe(output)
  })