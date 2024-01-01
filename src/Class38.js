import React, { useState } from "react";

function Class38() {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData("hello")}>Click me</button>
    </div>
  );
}

export default Class38;
