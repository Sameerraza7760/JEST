import React, { useState } from "react";
import { useEffect } from "react";

function Class35() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  });
  return (
    <div>
      {data ? <h1>Data Found</h1> : <h1>Data Not Found</h1>}
      {/* <h1>Data Found</h1> */}
    </div>
  );
}

export default Class35;
