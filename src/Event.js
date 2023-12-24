import React, { useState } from 'react';

function Event() {
    const [data, setData] = useState("");
    const [btnData,setBtnData]=useState("")
    return (
        <div>
            {/* class 9 */}
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            {/* class 10 */}
            <button onClick={()=>setBtnData("update Data")} >Update Data</button>
            <p>{btnData}</p>
        </div>
    );
}

export default Event;