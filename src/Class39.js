import React, { useState } from "react";

function Class39() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>onChange Event Testing</h1>
      <p>{name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Class39;
