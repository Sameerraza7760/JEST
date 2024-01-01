import React, { useState } from "react";

function Class40() {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Class 40 for act function</h1>
      <p>{data}</p>
      <input type="text" onChange={(e) => setData(e.target.value)} />
    </div>
  );
}

export default Class40;
