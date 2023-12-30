import React from 'react'

function Class21() {
  return (
    <div>
        <h1>getByLabel test</h1>
        <label htmlFor="userName">userName</label>
        <input type="text" id='userName' defaultValue={"sameer"}/>



        <label htmlFor="skills">skills</label>
        <input type="cheakbox" id='skills' defaultChecked={true} />

    </div>
  )
}

export default Class21