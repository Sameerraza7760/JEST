import React, { useState } from 'react'

function FunctionComp() {
    const [data,setData]=useState('')
    const handleChange=()=>{
        setData('Hello world')
    }
    // in this function compoent we do directly used a funcation as a testing so we need to make a custom hook or helper hook and expost the function her
    const handleOtherMethod=()=>{
        return "HI"
    }
  return (
    <div>
        <p>{data}</p>
        <button data-testid='btn1' onClick={handleChange}>Button</button>
        <button onClick={handleOtherMethod}>Button</button>
    </div>
  )
}

export default FunctionComp