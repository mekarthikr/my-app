import React, { useState } from "react";
import UseEffect from "./useEffect";

export default function EventContainer()
{
    const [display,HandelDisplay]=useState(true);
    return(
    <div>
        <button onClick={()=>HandelDisplay(!display)}>click</button>
        {
            display && <UseEffect/>
        }
    </div>)
}